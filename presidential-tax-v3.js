/* LizzyOS V3 Presidential Tax — first-device collection, separate browser wallets. */
(()=>{'use strict';
const URL=window.LIZZY_TELEGRAM_WORKER_URL||'https://mickyhq-test.mulaudzimikael73.workers.dev/';
const DEVICE_KEY='lizzyV3TaxDeviceIdV1', WALLET='lizzyMickyBucsV1', RECEIPT='lizzyV3TaxReceiptsV1',HISTORY='lizzyV3TaxHistoryV1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function read(key,otherwise){try{return JSON.parse(localStorage.getItem(key)||'null')??otherwise}catch{return otherwise}}
function write(key,data){localStorage.setItem(key,JSON.stringify(data))}
function deviceId(){let d=localStorage.getItem(DEVICE_KEY);if(!d){d=crypto.randomUUID();localStorage.setItem(DEVICE_KEY,d)}return d}
const balance=()=>Math.max(0,Math.floor(Number(localStorage.getItem(WALLET))||0));
function setBalance(b){localStorage.setItem(WALLET,String(b));window.dispatchEvent(new CustomEvent('mickyBucsBalanceChanged',{detail:{balance:b,source:'presidential_tax'}}));window.dispatchEvent(new Event('lizzyStoreRefresh'));}
async function post(type,data={}){const r=await fetch(URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({type,...data}),cache:'no-store'});const body=await r.json().catch(()=>({success:false,error:'Invalid tax server response'}));if(!r.ok||!body.success)throw new Error(body.error||'Tax service unavailable');return body}
function record(entry){const xs=read(HISTORY,[]);if(!xs.some(x=>x.reference===entry.reference&&x.kind===entry.kind)){xs.unshift(entry);write(HISTORY,xs.slice(0,150))}render();}
function render(){const host=document.getElementById('v3TaxHistory');if(!host)return;const history=read(HISTORY,[]);host.innerHTML=history.length?history.map(x=>`<article style="padding:10px;border:1px solid #bc9ac7;border-radius:10px;margin:8px 0"><strong>${x.kind==='refund'?'↩️ Tax refund':'🏛️ Presidential tax'}: ${x.amount>=0?'+':''}${x.amount} MB</strong><div style="font-size:13px">${esc(x.reason)}</div><small>${esc(x.at||'')} · ${esc(x.reference)}</small>${x.debt>0?`<p style="font-size:12px">Outstanding: ${x.debt} MB (not collected on other devices)</p>`:''}</article>`).join(''):'<p class="seedStoreIntro">No Presidential tax transactions on this device.</p>'}
function notification(tax,paid,debt,refunded=false){const msg=refunded?`A refund of ${paid} MB has been returned to this device.\n${tax.reason}`:`${paid} MB was deducted automatically.\nReason: ${tax.reason}${debt?`\nUnpaid amount: ${debt} MB`:''}`;
 let note=document.getElementById('v3TaxToast');if(!note){note=document.createElement('aside');note.id='v3TaxToast';note.setAttribute('role','status');note.style.cssText='position:fixed;bottom:16px;right:14px;z-index:2147483000;background:#17101b;color:#fff;border:2px solid #c49ad5;border-radius:16px;box-shadow:0 10px 40px #0008;padding:16px;max-width:350px;white-space:pre-line';document.body.appendChild(note)}
 note.textContent='🏦 BANK OF MICKY — '+(refunded?'REFUND RECEIPT':'OFFICIAL TAX NOTICE')+'\n'+msg;
 const btn=document.createElement('button');btn.textContent='Dismiss';btn.style.cssText='display:block;margin-top:10px;padding:8px 13px;background:#f4d5ff;color:#291330;border:0;border-radius:7px;cursor:pointer';btn.onclick=()=>note.remove();note.appendChild(btn);
 window.dispatchEvent(new CustomEvent('lizzyV3TaxNotice',{detail:{taxId:tax.id,paid,debt,refunded}}));
}
function setReceipt(id,data){const receipts=read(RECEIPT,{});receipts[id]=data;write(RECEIPT,receipts);return data}
function receipt(id){return read(RECEIPT,{})[id]}
async function debit(tax){
 const existing=receipt(tax.id);
 let data=existing;
 if(!data){
   const before=balance(),applied=Math.min(before,Math.max(0,Number(tax.amount)||0));
   data=setReceipt(tax.id,{phase:'prepared',before,after:before-applied,applied,createdAt:new Date().toISOString()});
 }
 // Recovery of an interrupted local debit. Never blindly subtract twice.
 if(data.phase==='prepared'){
   const current=balance();
   if(current===data.before)setBalance(data.after);
   else if(current!==data.after)throw new Error('Tax requires manual balance reconciliation on this device; no second debit applied.');
   data=setReceipt(tax.id,{...data,phase:'applied'});
 }
 if(!data.recorded){
   record({reference:tax.id,kind:'tax',amount:-data.applied,reason:tax.reason,debt:Math.max(0,tax.amount-data.applied),at:new Date().toLocaleString()});
   notification(tax,data.applied,Math.max(0,tax.amount-data.applied));
   data=setReceipt(tax.id,{...data,recorded:true});
 }
 await post('v3_tax_confirm',{id:tax.id,deviceId:deviceId(),appliedAmount:data.applied,balanceAfter:data.after});
}
async function refund(tax){
 const refundKey=tax.id+':refund',amt=Math.max(0,Math.floor(Number(tax.refundDue)||0));
 let data=receipt(refundKey);
 if(!data){const before=balance();data=setReceipt(refundKey,{phase:'prepared',before,after:before+amt,applied:amt});}
 if(data.phase==='prepared'){
   const current=balance();if(current===data.before)setBalance(data.after);else if(current!==data.after)throw new Error('Refund requires manual reconciliation; no duplicate credit attempted.');
   data=setReceipt(refundKey,{...data,phase:'applied'});
 }
 if(!data.recorded){record({reference:tax.id,kind:'refund',amount:amt,reason:tax.reason,at:new Date().toLocaleString()});notification(tax,amt,0,true);data=setReceipt(refundKey,{...data,recorded:true})}
 await post('v3_tax_refund_confirm',{id:tax.id,deviceId:deviceId(),refundAmount:amt});
}
let running=false;
async function process(){if(running)return;running=true;try{
 // Up to ten tax records can be settled in one synchronisation.
 for(let i=0;i<10;i++){
   const response=await post('v3_tax_claim',{deviceId:deviceId()});const tax=response.tax;
   if(!tax)break;
   if(tax.status==='refund_due')await refund(tax);
   else if(tax.status==='assigned')await debit(tax);
   else break;
 }
 }catch(err){console.warn('Presidential Tax sync:',err.message);const e=document.getElementById('v3TaxSyncStatus');if(e)e.textContent='Tax sync: '+err.message;
 }finally{running=false;render()}}
function sync(){if(document.visibilityState==='hidden')return;
 if(navigator.locks?.request)navigator.locks.request('lizzy-v3-tax-wallet',()=>process()).catch(e=>console.warn(e));
 else process();
}
window.V3PresidentialTax={sync,history:()=>read(HISTORY,[]),deviceId};
window.addEventListener('load',()=>setTimeout(sync,1200));window.addEventListener('focus',sync);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')sync()});
window.addEventListener('lizzyBankReady',render);setInterval(sync,30000);render();
})();

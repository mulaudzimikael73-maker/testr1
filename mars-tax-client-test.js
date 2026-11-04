/* MARS TESTR — Telegram Presidential Tax Wallet Bridge
   A tax order is a receipt on TEST Worker, not a charge to a live wallet.
   Only the local TESTR Micky Bucs wallet is affected. One browser/profile only.
*/
(()=>{'use strict';
const KEY='lizzyMickyBucsTESTV1',PAID='marsTaxPaidTESTv1',REFUNDS='marsTaxRefundedTESTv1',NOTICES='marsTaxNoticedTESTv1';
const LEDGER='bankOfMickyTransactionsTESTV2',DEV='marsTaxDeviceTESTv1';
const read=(k,f)=>{try{const x=JSON.parse(localStorage.getItem(k)||'null');return x??f}catch{return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const wallet=()=>Math.max(0,Math.floor(Number(localStorage.getItem(KEY))||0));
const money=n=>Math.floor(Number(n)||0).toLocaleString('en-ZA');
const device=()=>{let v=localStorage.getItem(DEV);if(!v){v='TESTR-'+(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));localStorage.setItem(DEV,v)}return v};
const endpoint=()=>String(window.LIZZY_TELEGRAM_WORKER_URL||localStorage.getItem('lizzyos_test_worker_url_v1')||'').trim().replace(/\/+$/,'');
let syncing=false,next=null,reportedBalance=null,reportedAt=0;
const status=(txt)=>{let el=document.getElementById('marsTestTaxStatus');if(!el){el=document.createElement('div');el.id='marsTestTaxStatus';el.style.cssText='position:fixed;bottom:18px;left:18px;z-index:99996;max-width:min(340px,calc(100vw - 36px));background:#1c152c;color:#f7f0ff;border:1px solid #9b65d8;border-radius:14px;padding:12px 15px;font:14px/1.5 system-ui;box-shadow:0 10px 30px #140e2559;';el.innerHTML='<button aria-label="Dismiss tax notice" type="button" style="float:right;background:none;border:0;color:#fff;cursor:pointer;font-size:19px;line-height:1;">×</button><b style="display:block;margin-bottom:4px">🏛 MARS · TEST TAX NOTICE</b><div role="status"></div>';el.querySelector('button').onclick=()=>el.remove();document.body.appendChild(el)}el.querySelector('[role="status"]').textContent=txt};
function setWallet(n){n=Math.max(0,Math.floor(Number(n)||0));localStorage.setItem(KEY,String(n));document.querySelectorAll('#mickyBalance,#bankWalletBalance').forEach(el=>el.textContent=String(n));window.dispatchEvent(new CustomEvent('mickyBucsBalanceChanged',{detail:{balance:n,source:'mars_tax'}}));window.dispatchEvent(new Event('lizzyStoreRefresh'));return n}
function ledger(entry){const xs=read(LEDGER,[]);if(xs.some(x=>x.id===entry.id))return;xs.unshift(entry);write(LEDGER,xs.slice(0,250))}
async function api(body){const u=endpoint();if(!u)throw Error('TESTR Worker URL is not configured');const r=await fetch(u,{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(body),cache:'no-store'});const d=await r.json();if(!r.ok||d.success===false)throw Error(d.error||'Tax Worker unavailable');return d}
async function reportWallet(){const b=wallet(),now=Date.now();if(b===reportedBalance&&now-reportedAt<600000)return;await api({action:'mars_tax_wallet_report',device:device(),walletAfter:b});reportedBalance=b;reportedAt=now}
async function sync(){if(syncing||document.visibilityState==='hidden'||!endpoint())return;syncing=true;
 try{
  const r=await fetch(endpoint()+'?action=mars_tax_sync',{cache:'no-store'}),s=await r.json();if(!r.ok||!s.success)throw Error(s.error||'MARS sync failed');
  const paid=read(PAID,{}),refunded=read(REFUNDS,{}),notices=read(NOTICES,{});let due=0;
  // Refunds first, so refunds may also cover other active tax debt in this sync.
  for(const x of s.refunds||[]){
   if(refunded[x.id]){await api({action:'mars_tax_refund_ack',id:x.id,device:device(),walletAfter:wallet()});continue}
   if(x.device&&x.device!==device())continue;
   if(Number(paid[x.orderId]||0)<Number(x.amount))continue; // never refund money this device never paid
   const amt=Math.floor(Number(x.amount));if(!(amt>0))continue;
   const after=setWallet(wallet()+amt);refunded[x.id]=true;write(REFUNDS,refunded);
   ledger({id:'mars-refund-'+x.id,at:Date.now(),amount:amt,description:'MARS Tax Refund: '+x.reason,kind:'tax_refund',currency:'MB',balanceAfter:after});
   status(`Presidential tax refund: +${money(amt)} MB. Receipt ${x.orderId}. Updated balance: ${money(after)} MB.`);
   await api({action:'mars_tax_refund_ack',id:x.id,device:device(),walletAfter:after});
  }
  for(const o of s.orders||[]){
   if(o.device&&o.device!==device())continue;
   const local=Math.floor(Number(paid[o.id]||0));const remote=Math.floor(Number(o.collected||0));
   if(local>remote){await api({action:'mars_tax_ack',id:o.id,device:device(),appliedTotal:local,walletAfter:wallet()});continue}
   const remaining=Math.max(0,Math.floor(Number(o.amount))-Math.max(local,remote));if(!remaining)continue;
   if(!notices[o.id]){status(`Official tax: ${money(o.amount)} MB. Reason: ${o.reason}. Receipt ${o.id}.`);notices[o.id]=true;write(NOTICES,notices)}
   const take=Math.min(wallet(),remaining);if(!take){due+=remaining;continue}
   const newTotal=Math.max(local,remote)+take,after=setWallet(wallet()-take);
   // Local tax receipt persists before server confirmation. If the request fails,
   // the next sync re-acknowledges it rather than deducting it again.
   paid[o.id]=newTotal;write(PAID,paid);
   ledger({id:'mars-tax-'+o.id+'-'+newTotal,at:Date.now(),amount:-take,description:'Presidential Tax: '+o.reason,kind:'tax',currency:'MB',balanceAfter:after});
   status(`MARS deducted ${money(take)} MB. Reason: ${o.reason}. ${money(remaining-take)} MB outstanding. Balance: ${money(after)} MB.`);
   await api({action:'mars_tax_ack',id:o.id,device:device(),appliedTotal:newTotal,walletAfter:after});
   due+=remaining-take;
  }
  if(due>0){document.documentElement.dataset.marsTaxDue=String(due)}else{delete document.documentElement.dataset.marsTaxDue}
  await reportWallet();
 }catch(e){console.warn('[MARS TESTR tax sync]',e)}finally{syncing=false}}
function schedule(){if(next)clearTimeout(next);next=setTimeout(()=>{next=null;sync()},1200)}
window.marsTestTaxSync=sync;
window.addEventListener('load',()=>setTimeout(sync,1500));
window.addEventListener('focus',schedule);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')schedule()});
window.addEventListener('mickyBucsBalanceChanged',e=>{if(e.detail?.source!=='mars_tax')schedule()});
window.addEventListener('lizzyBankReady',schedule);
setInterval(sync,60000);
})();

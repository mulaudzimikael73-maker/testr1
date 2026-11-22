/* Daily Gobshite Revolution, PART 1. Appears INSIDE the existing newspaper. */
(()=>{'use strict';
const API='https://mickyhq-test.mulaudzimikael73.workers.dev/';
const STORE='lizzyGobshitePart1ReceiptsV1',DEVICE='lizzyGobshitePart1BrowserIdV1',DRAFT='lizzyGobshitePart1DraftV1';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
let data=null,busy=false,mode='headline',notice='';
const id=()=>((globalThis.crypto?.randomUUID?.()||('r'+Date.now().toString(36)+Math.random().toString(36).slice(2))).replaceAll('-','_'));
function device(){let v=localStorage.getItem(DEVICE);if(!v){v='lizzy_'+id();localStorage.setItem(DEVICE,v)}return v}
function receipts(){try{return JSON.parse(localStorage.getItem(STORE)||'{}')}catch{return {}}}
function saveReceipts(r){localStorage.setItem(STORE,JSON.stringify(r));}
function draft(){try{const x=JSON.parse(localStorage.getItem(DRAFT)||'{}');return x?.headline||x?.column?x[mode]||{}:mode==='headline'?x||{}:{}}catch{return {}}}
function saveDraft(o){try{let saved=JSON.parse(localStorage.getItem(DRAFT)||'{}');if(!saved||typeof saved!=='object')saved={};if(!saved.headline&&!saved.column)saved={headline:{title:saved.title||'',body:saved.body||'',byline:saved.byline||'Agent Yelizaveta'}};saved[mode]=o;localStorage.setItem(DRAFT,JSON.stringify(saved))}catch{}}
function core(){const c=window.LizzyInternetCore;if(!c?.bankSpend||!c?.bankCredit||!c?.bankSpendable)throw Error('Bank of Micky is not ready. Open LizzyOS normally, then return to the newspaper.');return c;}
async function call(action,body={}){const r=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,device:device(),...body}),cache:'no-store'});const d=await r.json().catch(()=>({}));if(!r.ok||d.success===false)throw Error(d.error||`Newspaper service failed (${r.status}).`);return d;}
function paymentEvidence(ref){try{const a=JSON.parse(localStorage.getItem('bankOfMickyTransactionsV2')||'[]');return Array.isArray(a)?a.some(x=>String(x?.description||'').includes(ref)&&Number(x?.amount||0)<0):false}catch{return false}}
function refundEvidence(ref){try{const a=JSON.parse(localStorage.getItem('bankOfMickyTransactionsV2')||'[]');return Array.isArray(a)?a.some(x=>String(x?.description||'').includes('Refund '+ref)&&Number(x?.amount||0)>0):false}catch{return false}}
function handleRefunds(){if(!data?.orders)return;const local=receipts();let dirty=false;
 for(const order of data.orders){const r=local[order.receipt];if(!r||order.status!=='refunded'||r.refunded)continue;
  if(refundEvidence(order.receipt)){r.refunded=true;dirty=true;continue;}
  try{if(core().bankCredit(order.price,'Daily Gobshite Refund '+order.receipt,'refund')){r.refunded=true;dirty=true;notice=`${order.price} MB was returned for ${order.title}.`}}catch(e){notice='Your refund is pending: '+e.message;}
 }
 if(dirty)saveReceipts(local);
}
async function recover(){let rs=receipts();
 const pending=Object.values(rs).some(r=>r?.status==='paid');if(pending){try{const ready=await call('gob_p1_ready');if(!ready.connected||!ready.build?.includes('EDITORIAL-RECEIPT-REPAIR'))throw Error('Worker build is out of date');}
 catch(e){notice='Saved paid submissions cannot sync until the updated TEST Worker is deployed: '+e.message;return;}}
 for(const [ref,r] of Object.entries(rs)){
 if(r.status==='prepared'&&paymentEvidence(ref)){r.status='paid';saveReceipts(rs)}
 if(r.status!=='paid')continue;
 try{await call('gob_p1_submit',{kind:r.kind,receipt:ref,title:r.title,body:r.body,byline:r.byline});r.status='submitted';saveReceipts(rs)}catch(e){notice='A previous paid submission still needs syncing. Reopen the newspaper when online: '+e.message;}
}}
function postMarkup(p){const body=p.body?`<div class="gobP1ArticleBody">${esc(p.body).split(/\n\s*\n/).map(x=>`<p>${x.replaceAll('\n','<br>')}</p>`).join('')}</div>`:'';
return `<article class="gobP1Published"><span class="gobP1Kicker">${p.type==='headline'?'READER HEADLINE':'GUEST COLUMN'} · ${esc(p.day)}</span><h3>${esc(p.title)}</h3>${p.type==='column'?`<p class="gobP1Byline">By ${esc(p.byline)}</p>`:''}${body}</article>`;}
function orderMarkup(o){return `<article class="gobP1Order"><b>${o.type==='headline'?'📰':'✍️'} ${esc(o.title)}</b><small>${o.price} MB · ${esc(o.id)} · ${esc(o.status.replaceAll('_',' '))}${o.day?' · '+esc(o.day):''}</small>${o.feedback?`<p>${esc(o.feedback)}</p>`:''}${o.status==='awaiting_lizzy_approval'?`<div class="gobP1Edit"><b>Editorial suggested version</b><h4>${esc(o.editedTitle)}</h4><p>${esc(o.editedBody)}</p><button data-gob="approve" data-id="${esc(o.id)}">Approve edits</button><button data-gob="decline" data-id="${esc(o.id)}" class="secondary">Decline edits</button></div>`:''}${o.status==='revision_requested'?`<div class="gobP1Revision"><input data-title="${esc(o.id)}" maxlength="145" value="${esc(o.title)}"><textarea data-body="${esc(o.id)}" rows="4">${esc(o.body)}</textarea><button data-gob="revise" data-id="${esc(o.id)}">Send revised version</button></div>`:''}</article>`}
function render(){const root=$('gobP1Mount');if(!root)return;const d=draft(),balance=(()=>{try{return core().bankSpendable().toFixed(0)}catch{return '—'}})();const posts=data?.posts||[],poll=data?.poll;
 const local=receipts();const serverRefs=new Set((data?.orders||[]).map(x=>x.receipt));
 const needsSync=Object.entries(local).filter(([ref,r])=>r&&(['paid','submitted'].includes(r.status)||(r.status==='prepared'&&paymentEvidence(ref)))&&!serverRefs.has(ref));
 const workerOk=String(data?.build||'').includes('EDITORIAL-RECEIPT-REPAIR');
 root.innerHTML=`<div class="gobP1Shell">
 <div class="gobP1Heading"><span>TESTR · DAILY GOBSHITE · EDITORIAL REPAIR R3</span><h2>Lizzy's Edition</h2><p>Read, vote, and have your say in tomorrow's headlines. Everything is reviewed by the Editorial Desk.</p></div>
 ${notice?`<p class="gobP1Notice" role="status">${esc(notice)}</p>`:''}
 ${!workerOk?`<p class="gobP1Notice">⚠️ The current Cloudflare Worker has not confirmed the newspaper repair. Do not purchase another item until the matching TEST Worker is deployed. Your saved receipts are preserved.</p>`:''}
 ${needsSync.length?`<div class="gobP1Section gobP1Recovery"><h3>🧾 Purchases waiting to reach Test HQ</h3><p>These are saved browser receipts. <b>Do not buy the same item again.</b> Retry sends the same receipt to the Worker without taking another MB.</p>${needsSync.map(([ref,r])=>`<article class="gobP1Order"><b>${esc(r.title||r.kind||'Newspaper submission')}</b><small>${esc(ref)} · ${r.price} MB · ${esc(r.status)}</small><button type="button" data-gob="retry" data-id="${esc(ref)}">↻ Send saved submission to HQ</button></article>`).join('')}</div>`:''}
 <div class="gobP1Section"><h3>🗞️ Reader contributions</h3>${posts.length?posts.slice(0,10).map(postMarkup).join(''):'<p class="gobP1Hint">No reader contributions have been published yet. Yours could be the first.</p>'}${posts.length>10?`<details><summary>Read earlier contributions (${posts.length-10})</summary>${posts.slice(10).map(postMarkup).join('')}</details>`:''}</div>
 <div class="gobP1Section"><h3>🗳️ Today's Reader Poll</h3><p>${poll?esc(poll.question):'Connecting to the newsroom…'}</p>${poll?`<div class="gobP1Poll">${poll.options.map((x,i)=>`<label><input type="radio" name="gobP1Vote" value="${i}" ${poll.voted!==null?'disabled':''}><span>${esc(x)}</span></label>`).join('')}</div>${poll.voted===null?'<button type="button" data-gob="vote">Submit my vote</button>':'<p class="gobP1Hint">Your vote was recorded.</p>'}<div class="gobP1Results">${poll.counts.map(c=>`<div><span>${esc(c.name)}</span><b>${c.count}</b></div>`).join('')}<small>${poll.realTotal} actual vote${poll.realTotal===1?'':'s'} · ${poll.fictionalTotal} simulated votes from fictional LizzyOS citizens</small></div>`:''}</div>
 <div class="gobP1Section"><h3>✍️ Submit to the newspaper</h3><p>Purchases use your existing Bank of Micky wallet. They are charged once, with a reference and a refund if publication is declined.</p><div class="gobP1Modes"><button data-gob="mode-headline" class="${mode==='headline'?'active':''}" type="button">📰 Buy a headline · 75 MB</button><button data-gob="mode-column" class="${mode==='column'?'active':''}" type="button">✍️ Guest column · 70 MB</button></div>
 <label>Proposed ${mode==='headline'?'headline':'column title'}<input id="gobP1Title" maxlength="${mode==='headline'?140:145}" value="${esc(d.title||'')}" placeholder="Make the President nervous…"></label><label>${mode==='headline'?'Short explanation (optional)':'Your guest column · minimum 120 characters'}<textarea id="gobP1Body" maxlength="${mode==='headline'?700:5000}" rows="${mode==='headline'?3:7}" placeholder="${mode==='headline'?'Tell our editors why this headline matters.':'Write at least 120 characters for your own guest column.'}">${esc(d.body||'')}</textarea></label>${mode==='column'?`<small class="gobP1Count" id="gobP1Count">${(d.body||'').length} / 120 characters required</small>`:''}${mode==='column'?`<label>Byline<input id="gobP1Byline" maxlength="65" value="${esc(d.byline||'Agent Yelizaveta')}"></label>`:''}<div class="gobP1Checkout"><span>Your wallet: <b>${balance} MB</b></span><button type="button" data-gob="purchase" ${busy?'disabled':''}>${busy?'Submitting…':`Confirm ${mode==='headline'?75:70} MB purchase`}</button></div>
 </div><div class="gobP1Section"><h3>📁 Your newspaper submissions</h3>${data?.orders?.length?data.orders.map(orderMarkup).join(''):'<p class="gobP1Hint">Your submissions and editorial responses will appear here.</p>'}</div></div>`;
 root.querySelectorAll('[data-gob]').forEach(x=>x.addEventListener('click',()=>action(x.dataset.gob,x.dataset.id)));
 root.querySelectorAll('#gobP1Title,#gobP1Body,#gobP1Byline').forEach(x=>x.addEventListener('input',()=>{const d={title:$('gobP1Title')?.value||'',body:$('gobP1Body')?.value||'',byline:$('gobP1Byline')?.value||'Agent Yelizaveta'};saveDraft(d);const count=$('gobP1Count');if(count){count.textContent=d.body.length+' / 120 characters required'+(d.body.length>=120?' ✓':' · '+(120-d.body.length)+' more');count.classList.toggle('ready',d.body.length>=120)}}));
}
async function refresh(){try{const r=await call('gob_p1_public');data=r;handleRefunds();}catch(e){notice='Newspaper extras are unavailable: '+e.message;}render();}
async function purchase(){const title=$('gobP1Title')?.value.trim()||'',body=$('gobP1Body')?.value.trim()||'',byline=$('gobP1Byline')?.value.trim()||'Agent Yelizaveta',price=mode==='headline'?75:70;
 if(title.length<8||title.length>(mode==='headline'?140:145)){notice='Please write a '+(mode==='headline'?'headline':'column title')+' of at least 8 characters.';render();return;}
 if(mode==='column'&&body.length<120){notice='Your column currently has '+body.length+' characters. Write '+(120-body.length)+' more to reach 120, then submit for 70 MB.';render();$('gobP1Body')?.focus();return;}
 if(mode==='column'&&byline.length<2){notice='Please enter the columnist name before buying.';render();return;}
 if(!confirm(`Submit your ${mode==='headline'?'newspaper headline':'guest column'} for ${price} MB?\n\nHQ must approve publication. If the submission is declined, you get a refund.`))return;
 // A test-Worker compatibility check prevents another charge when HQ cannot see submissions.
 try{const ready=await call('gob_p1_ready');if(!ready.connected||!ready.build?.includes('EDITORIAL-RECEIPT-REPAIR'))throw Error('The current test Worker is missing the new editorial endpoints.');}
 catch(e){notice='No MB was deducted. Cannot accept purchases until the full updated TEST Worker is installed: '+e.message;render();return;}
 const c=core();if(c.bankSpendable()<price){notice=`You need ${price} MB. Your wallet has ${c.bankSpendable()} MB.`;render();return;}
 const receipt='GOB'+id(),rs=receipts();rs[receipt]={kind:mode,title,body,byline,price,status:'prepared',at:Date.now()};
 try{saveReceipts(rs)}catch(e){notice='Unable to save the purchase receipt. No money was spent.';render();return;}
 if(!c.bankSpend(price,`Daily Gobshite ${mode} ${receipt}`,'newspaper')){delete rs[receipt];saveReceipts(rs);notice='Bank of Micky could not complete the payment.';render();return;}
 rs[receipt].status='paid';saveReceipts(rs);busy=true;notice='Payment recorded. Sending your submission…';render();
 try{const result=await call('gob_p1_submit',{kind:mode,receipt,title,body,byline});rs[receipt].status='submitted';rs[receipt].orderId=result.order?.id||null;saveReceipts(rs);saveDraft({});notice='✅ The TEST Worker recorded this '+mode+' as '+(result.order?.id||receipt)+'. Test HQ → Micky News will now show it.';}
 catch(e){notice=`Your ${price} MB payment is saved with receipt ${receipt}. Submission will retry when you reopen the paper. ${e.message}`;}
 finally{busy=false;await refresh();}
}
async function action(a,orderId){if(busy)return;
 if(a.startsWith('mode-')){mode=a.substring(5);render();return;}
 if(a==='purchase'){await purchase();return;}
 if(a==='retry'){
  const rs=receipts(),r=rs[orderId];if(!r){notice='Saved receipt not found.';render();return;}if(r.status==='prepared'&&!paymentEvidence(orderId)){notice='No completed MB payment was found for this draft. Nothing was resubmitted.';render();return;}
  try{busy=true;const ready=await call('gob_p1_ready');if(!ready.connected)throw Error('Worker is offline');const ack=await call('gob_p1_submit',{kind:r.kind,receipt:orderId,title:r.title,body:r.body,byline:r.byline});r.status='submitted';r.orderId=ack.order?.id||null;saveReceipts(rs);notice='✅ Synced to Test HQ as '+(r.orderId||orderId)+'. No additional MB charged.';}
  catch(e){notice='Saved receipt '+orderId+' could not reach Test HQ: '+e.message+'. No additional MB was deducted.';}
  finally{busy=false;await refresh();}return;
 }
 try{busy=true;
 if(a==='vote'){const n=$('gobP1Mount')?.querySelector('input[name="gobP1Vote"]:checked');if(!n)throw Error('Choose your answer first.');await call('gob_p1_vote',{choice:Number(n.value)});notice='Your vote has been counted.';}
 else if(a==='approve'||a==='decline'){await call('gob_p1_accept_edit',{id:orderId,accept:a==='approve'});notice=a==='approve'?'Your edit approval was sent to HQ.':'The editor has been told you declined the proposed changes.';}
 else if(a==='revise'){const title=$('gobP1Mount').querySelector(`[data-title="${CSS.escape(orderId)}"]`)?.value||'',body=$('gobP1Mount').querySelector(`[data-body="${CSS.escape(orderId)}"]`)?.value||'';await call('gob_p1_revise',{id:orderId,title,body});notice='Your revised submission is awaiting HQ review.';}
 }catch(e){notice=e.message}finally{busy=false;await refresh();}
}
async function mount(){if(!$('gobP1Mount'))return;notice='';render();await recover();await refresh();}
window.LizzyGobshitePart1={mount,refresh};
})();

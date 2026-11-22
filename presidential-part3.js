/* TESTR Part 3: Bank disputes/savings goal; immutable successful-share receipts; University Office Hours. */
(()=>{'use strict';const API='https://mickyhq-test.mulaudzimikael73.workers.dev/';const DEVICE='lizzyGobshitePart1BrowserIdV1',STOCKQUEUE='mickyPart3PendingTradesV1',DISPUTE_REFUNDS='mickyPart3DisputeRefundsV1',GOAL='mickyPart3SavingsGoalV1';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const read=(k,v)=>{try{return JSON.parse(localStorage.getItem(k)||'null')??v}catch{return v}},save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const uuid=()=>globalThis.crypto?.randomUUID?.().replaceAll('-','_')||'p3'+Date.now()+'_'+Math.random().toString(36).slice(2);
function device(){let x=localStorage.getItem(DEVICE);if(!x){x='lizzy_'+uuid();localStorage.setItem(DEVICE,x)}return x}
async function api(action,body={}){const r=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,device:device(),...body}),cache:'no-store'});const d=await r.json().catch(()=>({}));if(!r.ok||d.success===false)throw Error(d.error||'Test Worker service unavailable');return d;}
let bankState=null,officeState=null,marketNotice='',enrolledCourseIds=null;const BANK_PENDING='mickyP3PendingDisputesV2',OFFICE_PENDING='mickyP3PendingOfficeV2',OFFICE_SEEN='mickyP3OfficeSeenRepliesV2';
function tx(){const x=read('bankOfMickyTransactionsV2',[]);return Array.isArray(x)?x:[];}
function core(){const x=window.LizzyInternetCore;if(!x?.bankSpendable||!x?.bankCredit)throw Error('Bank of Micky wallet is unavailable');return x}
function goal(){return read(GOAL,{name:'',target:0})}
function renderBank(){const root=document.getElementById('part3BankMount');if(!root)return;const oldDebit=root.querySelector('#p3Debit')?.value||'',oldReason=root.querySelector('#p3DisputeReason')?.value||'',oldGoalName=root.querySelector('#p3GoalName')?.value,oldGoalTarget=root.querySelector('#p3GoalTarget')?.value;const list=tx().filter(x=>Number(x.amount)<0).slice(0,30),g=goal();let bal=0;try{bal=core().bankSpendable()}catch{}const qs=bankState?.disputes||[];
 root.innerHTML=`<section class="p3Section"><div class="p3Head"><small>BANK OF MICKY</small><h3>🏦 Banking Services</h3><p>Review charges, request a Presidential ruling, and track a savings goal. Your existing wallet and account history remain unchanged.</p></div><div class="p3Cols"><div class="p3Card"><h4>🧾 Dispute a suspicious charge</h4><label>Choose an actual debit from your bank statement<select id="p3Debit"><option value="">Choose transaction</option>${list.map(x=>`<option value="${esc(x.id)}">${esc(x.description||'Debit')} · ${Math.abs(Number(x.amount))} MB</option>`).join('')}</select></label><label>Your explanation<textarea id="p3DisputeReason" rows="3" maxlength="1000" placeholder="Why should the President reverse this charge?"></textarea></label><button type="button" data-p3="dispute">Submit dispute to HQ</button></div><div class="p3Card"><h4>🎯 Savings goal</h4><label>What are you saving towards?<input id="p3GoalName" maxlength="90" value="${esc(g.name||'')}" placeholder="My next Secret Shelf purchase"></label><label>Target (MB)<input id="p3GoalTarget" type="number" min="1" max="100000" value="${Number(g.target)||''}"></label><p>Your wallet: <b>${bal.toFixed(0)} MB</b>${Number(g.target)>0?` · Need ${Math.max(0,Math.ceil(Number(g.target)-bal))} MB more`:''}</p><button type="button" data-p3="goal">Save goal</button><p class="p3Hint">A tracker only. It does not deduct or reserve money.</p></div></div><div class="p3Card"><h4>📑 Presidential decisions</h4>${qs.length?qs.slice(0,12).map(q=>`<p><b>${esc(q.description)}</b> · ${esc(q.status)}${q.decision?' — '+esc(q.decision):''}${q.status==='refunded'?' · '+q.refundAmount+' MB '+(q.refundCreditedAt?'credited ✓':'refund authorised — will credit this browser'):''}</p>`).join(''):'<p>No disputes submitted yet.</p>'}</div><p role="status" id="p3BankStatus" class="p3Hint"></p></section>`;
 if(oldDebit)root.querySelector('#p3Debit').value=oldDebit;
 if(oldReason)root.querySelector('#p3DisputeReason').value=oldReason;
 if(oldGoalName!=null)root.querySelector('#p3GoalName').value=oldGoalName;
 if(oldGoalTarget!=null)root.querySelector('#p3GoalTarget').value=oldGoalTarget;
 root.querySelectorAll('[data-p3]').forEach(b=>b.onclick=()=>bankAction(b.dataset.p3));}
async function applyRefunds(){
 const qs=bankState?.disputes||[],refs=read(DISPUTE_REFUNDS,{});let dirty=false;
 for(const q of qs){if(q.status!=='refunded')continue;
  const ledgerRef='Bank of Micky Dispute Refund '+q.id;
  const previous=tx().find(x=>String(x.description||'').includes(ledgerRef)&&Number(x.amount)>0);
  if(!previous&&!refs[q.id]){
   try{if(core().bankCredit(q.refundAmount,ledgerRef,'dispute-refund')){refs[q.id]=true;dirty=true;}}catch{}
  }else if(previous&&!refs[q.id]){refs[q.id]=true;dirty=true;}
  if(refs[q.id]&&!q.refundCreditedAt){try{await api('p3_refund_ack',{id:q.id,ledgerRef});}catch{}}
 }
 if(dirty)save(DISPUTE_REFUNDS,refs);
}
async function syncPending(key){const items=read(key,[]),left=[];
 for(const item of items){try{await api(item.action,item.body);}catch(e){left.push(item);}}
 if(left.length!==items.length)save(key,left);
 return left.length;
}
async function syncRequests(){await syncPending(BANK_PENDING);await syncPending(OFFICE_PENDING);}
async function loadBank(){await syncPending(BANK_PENDING);try{const d=await api('p3_state');bankState=d;await applyRefunds();}catch(e){bankState=bankState||{disputes:[]};setTimeout(()=>{const x=document.getElementById('p3BankStatus');if(x)x.textContent='Connection: '+e.message},0);}renderBank();}
async function bankAction(a){const msg=document.getElementById('p3BankStatus');try{if(a==='goal'){const name=document.getElementById('p3GoalName')?.value.trim(),target=Math.floor(Number(document.getElementById('p3GoalTarget')?.value));if(!name||!Number.isSafeInteger(target)||target<1)throw Error('Enter a goal name and a positive MB target.');save(GOAL,{name,target});renderBank();return;}
 const id=document.getElementById('p3Debit')?.value,entry=tx().find(x=>x.id===id&&Number(x.amount)<0);if(!entry)throw Error('Choose a debit from your real bank history.');const reason=document.getElementById('p3DisputeReason')?.value.trim();if(reason.length<12)throw Error('Describe the problem in at least 12 characters.');const body={receipt:entry.id,description:entry.description,amount:entry.amount,reason};const queue=read(BANK_PENDING,[]);if(!queue.some(q=>q.body.receipt===entry.id)){queue.push({action:'p3_dispute',body});save(BANK_PENDING,queue);}
 const r=await api('p3_dispute',body);save(BANK_PENDING,read(BANK_PENDING,[]).filter(q=>q.body.receipt!==entry.id));if(msg)msg.textContent='Dispute '+r.dispute.id+' received by the Bank.';await loadBank();}catch(e){if(msg)msg.textContent=e.message;}}
function mountBank(){const root=document.getElementById('part3BankMount');if(!root)return;renderBank();loadBank();}
// Market buys are already committed to local wallet + share inventory before this is called. Queue notification only.
function queueStockPurchase(snapshot){const record={...snapshot,receipt:'stock_'+uuid(),createdAt:new Date().toISOString()};const pending=read(STOCKQUEUE,[]);pending.push(record);save(STOCKQUEUE,pending.slice(-100));marketNotice=`Share purchase saved · ${snapshot.quantity} ${snapshot.ticker} shares. Telegram alert ${pending.length?'pending sync':'sent'}.`;syncStocks();return record.receipt;}
let syncing=false;async function syncStocks(){if(syncing)return;syncing=true;try{const queue=read(STOCKQUEUE,[]),remain=[];for(const x of queue){try{await api('p3_stock_buy',x);}catch(e){remain.push(x);marketNotice='Stock notification waiting to sync: '+e.message;}}save(STOCKQUEUE,remain);if(!remain.length&&queue.length)marketNotice='✓ Share purchase reported to Test HQ and Telegram queue.';}finally{syncing=false;mountMarket();}}
function mountMarket(){const root=document.getElementById('p3MarketStatus');if(root)root.innerHTML=`<small class="p3Hint">📈 ${esc(marketNotice||'Confirmed share purchases are reported to Test HQ. Portfolio balances remain stored in this browser.')}</small>`;}
const catalog=()=>window.LizzyUomCatalog?.courses||[];
function renderOffice(active){const root=document.getElementById('part3OfficeMount');if(!root)return;const previousQuestion=root.querySelector('#p3CourseQuestion')?.value||'';const courses=catalog().filter(c=>enrolledCourseIds===null||enrolledCourseIds.includes(c.id)),valid=active&&courses.some(c=>c.id===active)?active:(courses[0]?.id||'');const qs=officeState?.office||[];
 root.innerHTML=`<section class="p3Section p3Office"><div class="p3Head"><small>UNIVERSITY OF MIKAEL · OFFICE HOURS</small><h3>🎓 Ask Your Lecturer</h3><p>Ask a question about a lesson. Your lecturer will personally answer your course questions. Office Hours never changes grades or certificates.</p></div>${courses.length?`<label>Course<select id="p3Course">${courses.map(c=>`<option value="${esc(c.id)}" ${c.id===valid?'selected':''}>${esc(c.id)} — ${esc(c.title)}</option>`).join('')}</select></label><label>Question<textarea id="p3CourseQuestion" maxlength="1500" rows="3" placeholder="What does this lesson mean, Professor?"></textarea></label><button type="button" data-p3-office-send>Send to lecturer (free)</button>`:'<p class="p3Hint">Enrol in a course first to ask its lecturer a question.</p>'}<div class="p3Replies"><h4>Office Hours correspondence</h4>${qs.length?qs.slice(0,12).map(q=>`<article><b>${esc(q.courseId)} — ${esc(q.courseTitle)}</b><p>You asked: ${esc(q.question)}</p><p>${q.status==='answered'?'🎓 Lecturer: '+esc(q.answer):'⏳ Awaiting Lecturer Response'}</p></article>`).join(''):'<p>No questions yet.</p>'}</div><p id="p3OfficeNotice" class="p3Hint"></p></section>`;
 if(previousQuestion&&root.querySelector('#p3CourseQuestion'))root.querySelector('#p3CourseQuestion').value=previousQuestion;
 root.querySelector('[data-p3-office-send]')?.addEventListener('click',async()=>{const status=root.querySelector('#p3OfficeNotice');try{const courseId=root.querySelector('#p3Course')?.value,question=root.querySelector('#p3CourseQuestion')?.value?.trim();if(!courseId||question.length<10)throw Error('Choose a course and ask a question of at least 10 characters.');const body={courseId,question};const queue=read(OFFICE_PENDING,[]);if(!queue.some(q=>q.body.courseId===courseId&&q.body.question===question)){queue.push({action:'p3_office_question',body});save(OFFICE_PENDING,queue);}
 await api('p3_office_question',body);save(OFFICE_PENDING,read(OFFICE_PENDING,[]).filter(q=>q.body.courseId!==courseId||q.body.question!==question));status.textContent='Your question has been sent to your lecturer.';await loadOffice(courseId);}catch(e){status.textContent=e.message;}});}
async function loadOffice(active){
 try{const university=await api('uom_get');enrolledCourseIds=Object.keys(university.state?.courses||{});}catch{enrolledCourseIds=null;}
 await syncPending(OFFICE_PENDING);
 let newReplyCount=0;try{officeState=await api('p3_state');const seen=read(OFFICE_SEEN,{});
  for(const q of officeState.office||[]){if(q.status==='answered'&&!seen[q.id]){
    seen[q.id]=true;newReplyCount++;
  }}save(OFFICE_SEEN,seen);
 }catch(e){officeState=officeState||{office:[]};}
 renderOffice(active);if(newReplyCount>0){const el=document.getElementById('p3OfficeNotice');if(el)el.textContent='📚 Your lecturer has responded!';}
}
function mountOffice(active){let root=document.getElementById('part3OfficeMount');const target=document.getElementById('uomUniversityContent');if(!target)return;if(!root){root=document.createElement('div');root.id='part3OfficeMount';target.appendChild(root);}loadOffice(active);}
window.LizzyPart3={mountBank,mountMarket,mountOffice,queueStockPurchase,syncStocks};
window.addEventListener('online',syncStocks);window.addEventListener('focus',()=>{if(read(STOCKQUEUE,[]).length)syncStocks();});document.addEventListener('DOMContentLoaded',()=>{setTimeout(syncStocks,1100);setTimeout(syncRequests,1600);});
window.addEventListener('focus',()=>{if(document.getElementById('part3OfficeMount'))loadOffice();if(document.getElementById('part3BankMount'))loadBank()});
setInterval(()=>{const office=document.getElementById('part3OfficeMount');if(office&&office.offsetParent!==null&&!office.contains(document.activeElement))loadOffice(office.querySelector('#p3Course')?.value);const bank=document.getElementById('part3BankMount');if(bank&&bank.offsetParent!==null&&!bank.contains(document.activeElement))loadBank();},20000);
})();

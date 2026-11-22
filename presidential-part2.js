/* PRESIDENTIAL EXPERIENCES — directly inside the original Secret Shelf and Open When folders. TESTR only. */
(()=>{'use strict';
const URL='https://mickyhq-test.mulaudzimikael73.workers.dev/';
const RECS='lizzyP2ReceiptsV2', DEVICE='lizzyGobshitePart1BrowserIdV1', DRAFT='lizzyP2DraftV2';
const products=[
 {id:18,icon:'🕵️',title:'Open an Investigation Against Mikael',price:65,teaser:'Your allegations deserve an official Presidential defence. Submit charges and evidence; HQ files a ruling.',fields:[['title','Case title','input'],['allegation','Your allegation','textarea'],['evidence','Evidence (optional)','textarea']]},
 {id:19,icon:'💌',title:'Request a Personal Letter',price:70,teaser:'One personal, handwritten-in-spirit reply from Mikael to a topic you choose.',fields:[['topic','What would you like me to write about?','textarea'],['tone','Sweet, funny or both?','input']]},
 {id:29,icon:'🧑‍⚖️',title:'The Great Presidential Interrogation',price:70,teaser:'Ask the President up to five questions. The answers come from him, not an automated bot.',fields:[['questions','Questions (one per line, max five)','textarea']]},
 {id:46,icon:'📘',title:'Official Guide to Understanding Mikael',price:80,teaser:'Five chapters: personality, moods, communication, quirks and personal advice.',fields:[['topic','What should this guide focus on?','textarea']]},
 {id:50,icon:'🔍',title:'Investigate What Mikael Really Thinks',price:85,teaser:'Choose one subject. Receive an in-depth, personally written classified assessment.',fields:[['topic','The subject of the investigation','textarea']]},
 {id:77,icon:'📦',title:'The Presidential Evidence Box',price:55,teaser:'Eight unique detective mysteries. Each 55 MB purchase unlocks your next unsolved case with five exhibits, witnesses, deductions and a final verdict.',fields:[]}
];
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=id=>document.getElementById(id);const id=()=>((globalThis.crypto?.randomUUID?.()||('p'+Date.now().toString(36)+Math.random().toString(36).slice(2))).replaceAll('-','_'));
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k)||'null')??d}catch{return d}};
const save=(k,d)=>localStorage.setItem(k,JSON.stringify(d));
function device(){let x=localStorage.getItem(DEVICE);if(!x){x='lizzy_'+id();localStorage.setItem(DEVICE,x)}return x;}
const core=()=>{const b=window.LizzyInternetCore;if(!b?.bankSpend||!b?.bankCredit||!b?.bankSpendable)throw Error('Open Bank of Micky to initialise your wallet.');return b};
let state=null,selected=18,notice='',loading=false,fetchAt=0;
async function call(action,body={}){const r=await fetch(URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,device:device(),...body}),cache:'no-store'});const d=await r.json().catch(()=>({}));if(!r.ok||d.success===false)throw Error(d.error||'Presidential service unavailable ('+r.status+')');return d;}
const orderById=id=>state?.orders?.find(o=>o.id===id);
function paidEvidence(ref){return read('bankOfMickyTransactionsV2',[]).some(x=>String(x.description||'').includes(ref)&&Number(x.amount||0)<0)}
function returnedEvidence(ref){return read('bankOfMickyTransactionsV2',[]).some(x=>String(x.description||'').includes('Presidential Request Refund '+ref)&&Number(x.amount||0)>0)}
function refunds(){const receipts=read(RECS,{});let changed=false;for(const o of state?.orders||[]){const r=receipts[o.receipt];if(!r||r.refunded||o.status!=='refunded')continue;if(returnedEvidence(o.receipt)){r.refunded=true;changed=true;continue}try{if(core().bankCredit(o.price,'Presidential Request Refund '+o.receipt,'refund')){r.refunded=true;changed=true;notice='Refund credited: '+o.price+' MB'}}catch(e){notice='Refund pending: '+e.message;}}if(changed)save(RECS,receipts)}
async function recover(){const rs=read(RECS,{});for(const [ref,r] of Object.entries(rs)){if(r.status==='prepared'&&paidEvidence(ref)){r.status='paid';save(RECS,rs)}if(r.status!=='paid')continue;try{await call('p2_purchase',{product:r.product,receipt:ref,fields:r.fields});r.status='submitted';save(RECS,rs)}catch(e){notice='Paid order '+ref+' will retry later: '+e.message}}}
function renderContent(o){if(o.product===77)return mystery(o);const c=o.content;if(!c)return '<p>The President is preparing your personalised response.</p>';
 if(o.product===18)return `<h4>${esc(c.title)}</h4><h5>Presidential Defence</h5><p>${esc(c.defence)}</p><h5>Final Ruling</h5><p>${esc(c.ruling)}</p>`;
 if(o.product===29)return (o.fields.questionList||[]).map((q,i)=>`<p><strong>Q${i+1}. ${esc(q)}</strong></p><p>${esc(c.answers?.[i]||'')}</p>`).join('');
 if(o.product===46)return (c.chapters||[]).map((s,i)=>`<h5>Chapter ${i+1} · ${['Personality','Moods','Communication','Known Weaknesses','Personal Advice'][i]}</h5><p>${esc(s)}</p>`).join('');
 return `<h4>${esc(c.title)}</h4><p>${esc(c.body)}</p>`;
}
function mystery(o){return `<div data-evidence2-id="${esc(o.id)}"><p>🔎 Opening your saved detective case…</p></div>`;}
function orderCard(o){return `<article class="p2order"><div class="p2meta">${esc(o.title)} · ${o.price} MB · ${esc(o.status)} · ${esc(o.id)}</div>${o.status==='delivered'?`<details ${o.product===77&&!o.mystery?.solvedAt?'open':''}><summary>📖 ${o.product===77?'Open mystery':'Read your delivered document'}</summary><div class="p2response">${renderContent(o)}</div></details>`:o.status==='refunded'?'<p class="p2good">Refund authorised. Reopen your Secret Shelf to receive the credit.</p>':'<p>Awaiting the President’s personal reply. You will not pay again.</p>'}</article>`}
function renderShelf(){const host=$('presidentialPart2Mount');if(!host)return;const p=products.find(x=>x.id===selected)||products[0];const dr=read(DRAFT,{}),form=dr[selected]||{};let wallet='—';try{wallet=core().bankSpendable().toFixed(0)}catch{}
 host.innerHTML=`<section class="p2suite"><div class="p2heading"><small>TESTR · SECRET SHELF · EVIDENCE BOX 2.0</small><h3>📜 Presidential Requests & Classified Experiences</h3><p>Pay once with your real TESTR Bank of Micky wallet. Your request goes straight to Mikael's existing HQ Letters section.</p></div>${notice?`<p class="p2notice" role="status">${esc(notice)}</p>`:''}<div class="p2products">${products.map(x=>`<button type="button" data-p2="choose" data-product="${x.id}" class="${selected===x.id?'chosen':''}">${x.icon} ${esc(x.title)} <b>${x.price} MB</b></button>`).join('')}</div><div class="p2checkout"><h4>${esc(p.title)} · ${p.price} MB</h4><details><summary>Read the confidential preview</summary><p>${esc(p.teaser)}</p><p>Includes one complete experience or personally authored fulfilment. No extra charge to read it again.</p></details>${p.fields.map(([k,title,type])=>`<label>${esc(title)}${type==='textarea'?`<textarea data-p2field="${k}" rows="${k==='questions'?5:3}">${esc(form[k]||'')}</textarea>`:`<input data-p2field="${k}" value="${esc(form[k]||'')}">`}</label>`).join('')}<div class="p2buy"><span>Available: <b>${wallet} MB</b></span><button type="button" data-p2="buy" ${loading?'disabled':''}>Buy for ${p.price} MB</button></div></div><div class="p2archive"><h4>📁 Your Presidential Requests</h4>${state?.orders?.length?state.orders.map(orderCard).join(''):'<p>Your requests, delivered letters, dossiers and case files will appear here.</p>'}</div></section>`;
 host.querySelectorAll('[data-p2]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.p2,b)));
 host.querySelectorAll('[data-p2field]').forEach(x=>x.addEventListener('input',()=>{const s=read(DRAFT,{});s[selected]=Object.fromEntries([...host.querySelectorAll('[data-p2field]')].map(e=>[e.dataset.p2field,e.value]));save(DRAFT,s)}));
 renderFolders();
 setTimeout(()=>window.LizzyEvidenceBoxV2?.mountAll?.(),0);
}
function renderFolders(){const letters=$('presidentialP2Letters');if(letters){const mine=state?.orders?.filter(o=>o.product===19&&o.status==='delivered')||[];letters.innerHTML=mine.length?`<h3>💌 Your Personal Letters from Mikael</h3>${mine.map(o=>`<article class="p2order"><details><summary>${esc(o.content?.title||o.title)}</summary><p>${esc(o.content?.body||'')}</p></details></article>`).join('')}`:'';}
const dos=$('presidentialP2Files');if(dos){const mine=state?.orders?.filter(o=>o.product!==19&&o.status==='delivered')||[];dos.innerHTML=mine.length?`<h3>🗃️ Presidential Classified Files</h3>${mine.map(o=>`<article class="p2order"><details><summary>${esc(o.title)}</summary><div class="p2response">${renderContent(o)}</div></details></article>`).join('')}`:'';dos.querySelectorAll('[data-p2]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.p2,b)));}setTimeout(()=>window.LizzyEvidenceBoxV2?.mountAll?.(),0);}
function letterOptions(){
 // The seven original Open When letters are FREE and must appear even if no paid Secret Shelf letters exist.
 const originals=[...document.querySelectorAll('#letterList [data-letter]')].map(b=>({id:'openwhen_'+b.dataset.letter,title:b.textContent.replace(/\s*—\s*FREE\s*/ig,'').trim()}));
 const old=read('lizzyPurchasedLettersV1',[]);
 const purchased=(Array.isArray(old)?old:[]).filter(x=>x?.id&&x.title).map(x=>({id:String(x.id),title:String(x.title)}));
 const personal=(state?.orders||[]).filter(o=>o.product===19&&o.status==='delivered').map(o=>({id:o.id,title:o.content?.title||o.title}));
 const seen=new Set();return [...originals,...purchased,...personal].filter(x=>{if(seen.has(x.id))return false;seen.add(x.id);return true;});
}
let currentOpenLetter='';
function renderLetters(){
 const host=$('presidentialP2Followups');if(!host)return;
 const options=letterOptions(),qs=state?.followups||[];
 const previously=host.querySelector('#p2LetterPick')?.value||currentOpenLetter;
 const draftQuestion=host.querySelector('#p2LetterQuestion')?.value||'';
 host.innerHTML=`<section class="p2suite p2FollowupSuite"><small>OPEN WHEN · QUESTIONS TO MIKAEL · REPAIR R3</small><h3>💬 Ask Mikael About a Letter</h3><p>Select any original Open When letter, an owned letter or a delivered personalised letter. This is free, and Mikael answers personally through Test HQ.</p>
 <label>Letter<select id="p2LetterPick">${options.map(x=>`<option value="${esc(x.id)}" ${previously===x.id?'selected':''}>${esc(x.title)}</option>`).join('')}</select></label>
 <label>Your question<textarea id="p2LetterQuestion" rows="3" maxlength="1200" placeholder="What would you really say to me about this letter?">${esc(draftQuestion)}</textarea></label>
 <button type="button" data-p2="followup" ${!options.length?'disabled':''}>Send my question to Mikael</button>
 ${options.length?'':`<p class="p2notice">Open When letters have not loaded yet. Reopen the letters folder.</p>`}
 ${qs.length?`<h4>Our follow-up conversations</h4>${qs.map(q=>`<article class="p2order"><strong>${esc(q.letterTitle)}</strong><p>You asked: ${esc(q.question)}</p><p>${q.status==='answered'?'👑 Mikael replied: '+esc(q.answer):'Awaiting a personal reply from HQ'}</p></article>`).join('')}`:''}
 </section>`;
 host.querySelector('[data-p2="followup"]')?.addEventListener('click',()=>action('followup',host));
}
function attachCurrentLetterButton(){
 const article=$('letterContent');if(!article||article.querySelector('#p2AskCurrentLetter'))return;
 const btn=document.createElement('button');btn.id='p2AskCurrentLetter';btn.type='button';btn.textContent='💬 Ask Mikael about this letter';btn.className='p2AskCurrent';
 btn.addEventListener('click',()=>{mountLetters();const pick=$('p2LetterPick');if(pick&&currentOpenLetter)pick.value=currentOpenLetter;$('presidentialP2Followups')?.scrollIntoView({behavior:'smooth',block:'nearest'});$('p2LetterQuestion')?.focus();});
 article.insertBefore(btn,article.querySelector('#backLetters'));
}
async function refresh(force=false){if(loading)return;const now=Date.now();if(!force&&state&&now-fetchAt<7000){renderShelf();renderLetters();return;}loading=true;
 try{await recover();state=await call('p2_state');refunds();fetchAt=now;}catch(e){notice='Secret Shelf service: '+e.message;}finally{loading=false;renderShelf();renderLetters();}}
async function purchase(){const p=products.find(x=>x.id===selected),host=$('presidentialPart2Mount');if(!p)return;const fields=Object.fromEntries([...host.querySelectorAll('[data-p2field]')].map(x=>[x.dataset.p2field,x.value.trim()]));if(selected===18&&(!fields.title||fields.allegation?.length<10)){notice='Enter a case title and an allegation of at least 10 characters.';renderShelf();return;}if(selected===19&&(fields.topic||'').length<5){notice='Tell Mikael what to write about (at least 5 characters).';renderShelf();return;}if(selected===29){const qs=(fields.questions||'').split(/\n+/).map(s=>s.trim()).filter(Boolean);if(qs.length<1||qs.length>5){notice='Enter between 1 and 5 questions, one on each line.';renderShelf();return;}}if([46,50].includes(selected)&&(fields.topic||'').length<5){notice='Choose a topic of at least 5 characters.';renderShelf();return;}
 if(!confirm('Purchase '+p.title+' for '+p.price+' MB?\n\nMikael personally fulfils requests that need a response.'))return;
 // Check the test Worker has these endpoints BEFORE touching the browser wallet.
 try{const ready=await call('p2_ready');if(!ready.connected||!String(ready.build||'').includes('SECRET-SHELF'))throw Error('The test Worker is older than the Secret Shelf update.');}
 catch(e){notice='No MB was deducted. The current test Cloudflare Worker cannot accept this purchase: '+e.message;renderShelf();return;}
 if(p.id===77){try{const availability=await call('case2_catalog');if(!availability.next)throw Error('All eight cases are already owned. There is no ninth case to purchase.');}catch(e){notice='No MB deducted: '+e.message;renderShelf();return;}}
 const c=core();if(c.bankSpendable()<p.price){notice='You need '+p.price+' MB; you have '+c.bankSpendable()+' MB.';renderShelf();return;}
 const receipt='P2_'+id(),rs=read(RECS,{});rs[receipt]={product:p.id,fields,price:p.price,status:'prepared',at:Date.now()};try{save(RECS,rs)}catch{notice='Browser storage unavailable. No charge was made.';renderShelf();return;}
 if(!c.bankSpend(p.price,'Presidential Secret Shelf '+receipt,'secret_shelf')){delete rs[receipt];save(RECS,rs);notice='Bank of Micky declined payment.';renderShelf();return;}
 rs[receipt].status='paid';save(RECS,rs);loading=true;renderShelf();
 try{await call('p2_purchase',{product:p.id,receipt,fields});rs[receipt].status='submitted';save(RECS,rs);const dr=read(DRAFT,{});delete dr[selected];save(DRAFT,dr);notice='Purchase received! You can track it here.';}
 catch(e){notice='Payment recorded under '+receipt+'. The request will retry when the Secret Shelf is opened again: '+e.message;}
 finally{loading=false;await refresh(true)}
}
async function action(a,b){try{if(a==='choose'){selected=Number(b.dataset.product);notice='';renderShelf();return;}
 if(a==='buy'){await purchase();return;}
 if(a==='followup'){const pick=$('p2LetterPick'),question=$('p2LetterQuestion')?.value.trim(),letterTitle=pick?.selectedOptions[0]?.textContent;if(!pick?.value||!question||question.length<10)throw Error('Select your letter and write a question of at least 10 characters.');await call('p2_followup',{letterId:pick.value,letterTitle,question});notice='Your question has been sent to Mikael.';await refresh(true);return;}
 if(a==='clue'){const r=await call('p2_open_clue',{id:b.dataset.order,index:Number(b.dataset.index)});notice=r.clue;await refresh(true);return;}
 if(a==='solve'){const pick=b.closest('.p2order,.p2response')?.querySelector('select[data-p2-suspect]')||document.querySelector('select[data-p2-suspect]');if(!pick)throw Error('Open all the exhibits first.');const r=await call('p2_solve',{id:b.dataset.order,choice:Number(pick.value)});notice=(r.correct?'Correct accusation! ':'Case concluded. ')+r.solution;await refresh(true);return;}
 }catch(e){notice=e.message;renderShelf();}}
 function ensureShelfMount(){const parent=$('secretShelfPanel');if(!parent)return null;
  let el=$('presidentialPart2Mount');if(el&&!parent.contains(el))el=null;
  if(!el){el=document.createElement('div');el.id='presidentialPart2Mount';const before=parent.querySelector('.secretShelfGrid,.vaultOwnedSummary');if(before)parent.insertBefore(el,before);else parent.appendChild(el);}
  return el;
 }
 function mountShelf(){const host=ensureShelfMount();if(!host)return;
  if(!state&&!loading){renderShelf();refresh(true);return;}renderShelf();}

 function mountLetters(){const w=$('openWhenWindow')||$('openWhenFolderWindow');if(!w)return;const h=w.querySelector('.windowScroll')||w;
  if(!$('presidentialP2Letters')){const n=document.createElement('div');n.id='presidentialP2Letters';h.appendChild(n)}
  if(!$('presidentialP2Followups')){const n=document.createElement('div');n.id='presidentialP2Followups';const anchor=h.querySelector('#letterContent');if(anchor)h.insertBefore(n,anchor);else h.appendChild(n)}
  attachCurrentLetterButton();renderFolders();renderLetters();}

 function mountClassified(){const w=$('classifiedFolderWindow');if(!w)return;const h=w.querySelector('.windowScroll')||w;if(!$('presidentialP2Files')){const n=document.createElement('div');n.id='presidentialP2Files';h.appendChild(n)}renderFolders();}
 window.LizzyP2={mountShelf,mountLetters,mountClassified,refresh};
 document.addEventListener('click',e=>{if(e.target.closest('#openWhenIcon'))setTimeout(()=>{mountLetters();refresh(false);},100);if(e.target.closest('#classifiedFolderIcon'))setTimeout(()=>{mountClassified();refresh(false);},100);if(e.target.closest('#seedStoreIcon,[data-store-tab="secret"]'))setTimeout(()=>{mountShelf();refresh(false);},100);
 const letter=e.target.closest('#letterList [data-letter]');if(letter){currentOpenLetter='openwhen_'+letter.dataset.letter;setTimeout(()=>{mountLetters();const p=$('p2LetterPick');if(p)p.value=currentOpenLetter;},100);}
 });
 window.addEventListener('focus',()=>{if(!$('secretShelfPanel')?.classList.contains('hidden'))refresh(false)});
 // The old Store rewrites #secretShelfPanel.innerHTML. Reinstate our content after every rewrite.
 const shelfParent=$('secretShelfPanel');if(shelfParent){
  const mo=new MutationObserver(()=>{if(!$('presidentialPart2Mount'))mountShelf();});
  mo.observe(shelfParent,{childList:true});
 }
 document.addEventListener('DOMContentLoaded',()=>{mountShelf();mountLetters();mountClassified();});
 mountLetters();mountClassified();mountShelf();
 setTimeout(()=>{mountShelf();mountLetters();},400);
})();

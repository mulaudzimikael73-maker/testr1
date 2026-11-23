/* Lizzy Assistant 2.1 — existing Assistant modal enhancement; TESTR only.
   Scripted dialogue and real Mikael replies remain visibly distinct. */
(()=>{'use strict';
const API=window.LIZZY_TELEGRAM_WORKER_URL||'https://mickyhq-test.mulaudzimikael73.workers.dev/';
const DEVICE='lizzyGobshitePart1BrowserIdV1',HISTORY='lizzyAssistantHistoryV21',MODE='lizzyAssistantModeV21',PENDING='lizzyAssistantPendingV21',SEEN='lizzyAssistantSeenV21';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const read=(k,d)=>{try{const x=localStorage.getItem(k);return x?JSON.parse(x):d}catch{return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch{return false}};
const uuid=()=>globalThis.crypto?.randomUUID?.().replaceAll('-','_')||'as'+Date.now()+Math.random().toString(36).slice(2);
function device(){let x=localStorage.getItem(DEVICE);if(!x){x='lizzy_'+uuid();localStorage.setItem(DEVICE,x)}return x;}
async function api(action,body={}){const res=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,device:device(),...body}),cache:'no-store'});const data=await res.json().catch(()=>({}));if(!res.ok||data.success===false)throw Error(data.error||'Assistant connection is unavailable');return data;}
let modal=null,pollId=null,questions=[],activeMode=read(MODE,'sarcastic');
const modes={helpful:'😊 Helpful',sarcastic:'🙄 Sarcastic',dramatic:'🎭 Dramatic',presidential:'👑 Presidential Propaganda'};
function style(q,answer){const lead={helpful:'',sarcastic:'🙄 Officially speaking: ',dramatic:'🎭 BREAKING NEWS! ',presidential:'👑 By Presidential Decree: '}[activeMode]||'';
 return lead+answer;}
function record(q,answer){const hist=read(HISTORY,[]);hist.push({id:uuid(),at:new Date().toISOString(),question:String(q).slice(0,300),answer:String(answer).slice(0,1800),mode:activeMode});save(HISTORY,hist.slice(-80));history();
 if(hist.length>0&&hist.length%6===0&&modal){const el=modal.querySelector('#asComment');if(el)el.textContent='👑 Presidential observation: Six questions and still not one government department has managed to silence you.';}}
function history(){if(!modal)return;const host=modal.querySelector('#asHistory');if(!host)return;const rows=read(HISTORY,[]).slice(-15).reverse();host.innerHTML=rows.length?rows.map(h=>`<article class="asHistoryItem"><small>${esc(new Date(h.at).toLocaleString())}</small><p><b>Lizzy:</b> ${esc(h.question)}</p><p><b>Assistant:</b> ${esc(h.answer)}</p><button type="button" data-as-remove="${esc(h.id)}">Delete</button></article>`).join(''):'<p>No conversations saved on this browser yet.</p>';
 host.querySelectorAll('[data-as-remove]').forEach(b=>b.onclick=()=>{save(HISTORY,read(HISTORY,[]).filter(x=>x.id!==b.dataset.asRemove));history();});}
function notify(s){const el=modal?.querySelector('#asNotice');if(el)el.textContent=s;}
function showRequests(requests){if(!modal)return;questions=requests;const host=modal.querySelector('#asRequests');if(!host)return;
 host.innerHTML=requests.length?requests.slice(0,12).map(r=>`<article class="asHistoryItem"><small>${esc(r.id)} · ${esc(r.status==='answered'?'Answered':'Awaiting Presidential Response')}</small><p><b>Your question:</b> ${esc(r.question)}</p>${r.status==='answered'?`<p class="asAnswer"><b>👑 President Mikael personally replied:</b> ${esc(r.answer)}</p>`:''}<button type="button" data-as-delete-request="${esc(r.id)}">Delete question</button></article>`).join(''):'<p>No personal questions yet.</p>';
 host.querySelectorAll('[data-as-delete-request]').forEach(btn=>btn.onclick=async()=>{if(!confirm('Delete this question and its reply from the Assistant and HQ?'))return;try{await api('ux_delete',{id:btn.dataset.asDeleteRequest});await loadRequests();}catch(e){notify('Could not delete this question: '+e.message);}});
 const seen=read(SEEN,{});let newAnswers=0;requests.filter(x=>x.status==='answered').forEach(x=>{if(!seen[x.id]){seen[x.id]=true;newAnswers++;}});save(SEEN,seen);
 if(newAnswers)notify('💌 The President has replied to '+newAnswers+' of your questions!');}
async function flush(){const q=read(PENDING,[]),keep=[];for(const r of q){try{await api('ux_ask',{question:r.question,receipt:r.receipt});}catch{keep.push(r)}}save(PENDING,keep);}
async function loadRequests(){try{await flush();const d=await api('ux_state');showRequests(d.requests||[]);return d;}catch(e){notify('Presidential messages: '+e.message);}}
async function askPresident(){const field=modal?.querySelector('#asQuestion'),button=modal?.querySelector('#asAsk');const question=field?.value.trim();if(!question||question.length<8){notify('Write a question of at least eight characters.');return;}
 const receipt='AP_'+uuid(),q=read(PENDING,[]);q.push({question,receipt});if(!save(PENDING,q)){notify('Please allow browser storage before sending. No question was submitted.');return;}
 button.disabled=true;try{await flush();if(read(PENDING,[]).some(r=>r.receipt===receipt)){notify('Connection unavailable. Your draft is saved and will retry without duplication.');}else{field.value='';notify('Your question has been received by the President.');}await loadRequests();}
 finally{button.disabled=false;}}
async function daily(hint=0,submit=false){try{const box=modal?.querySelector('#asDaily'),input=modal?.querySelector('#asDailyAnswer');if(!box)return;
 const d=await api('ux_daily',{hint,submit,answer:input?.value||''});box.querySelector('#asDailyQuestion').textContent=d.question;
 const msg=box.querySelector('#asDailyResult');msg.textContent=d.completed?'✅ Complete! '+(d.explain||''):submit&&!d.correct?(d.message||'Try again.'):(d.hint||'One new mini-challenge each day (Johannesburg time).');
 box.querySelector('#asDailyAnswer').disabled=!!d.completed;box.querySelector('[data-as-daily-check]').disabled=!!d.completed;
 }catch(e){notify('Daily challenge unavailable: '+e.message)}}
async function hints(){const box=modal?.querySelector('#asHints');if(!box)return;try{const r=await api('assistant_test_status'),active=(r.attempts||[]).filter(a=>a.status==='active');const sel=box.querySelector('#asAttempt');sel.innerHTML=active.length?active.map(a=>`<option value="${esc(a.id)}">${esc(a.challengeId)} · stage ${a.stage+1}</option>`).join(''):'<option value="">No active challenge attempts</option>';box.querySelector('#asHintLevel').value='1';box.querySelector('#asHintText').textContent=active.length?'Choose a hint level for your current challenge.':'Begin an Assistant challenge first, then return here.';}catch(e){box.querySelector('#asHintText').textContent='Challenge hints: '+e.message}}
async function getHint(){const id=modal?.querySelector('#asAttempt')?.value,level=Number(modal?.querySelector('#asHintLevel')?.value);if(!id)return notify('There are no active challenge attempts.');try{const d=await api('assistant_test_hint',{id,level});modal.querySelector('#asHintText').textContent='Hint '+d.level+' · '+d.hint;}catch(e){notify(e.message)}}
async function universityCourses(){const el=modal?.querySelector('#asUniversityCourses');if(!el)return;
 try{const data=await api('uom_get');const ids=Object.keys(data.state?.courses||{});const courses=(window.LizzyUomCatalog?.courses||[]).filter(c=>ids.includes(c.id));
  if(!courses.length){el.textContent='No enrolled courses yet. Open the University to enrol.';return;}
  el.innerHTML='<label>Choose an enrolled course<select id="asCourseChoose">'+courses.map(c=>'<option value="'+esc(c.id)+'">'+esc(c.id+' — '+c.title)+'</option>').join('')+'</select></label><button type="button" id="asExplainCourse">Explain the first lesson</button><p id="asCourseLesson" role="status"></p>';
  el.querySelector('#asExplainCourse').onclick=()=>{const id=el.querySelector('#asCourseChoose')?.value,first=window.LizzyUomTheory?.[id]?.[0],out=el.querySelector('#asCourseLesson');
   out.textContent=first?first.title+': '+first.theory:'No theory excerpt is available for this course yet. Open the University for the full lesson or ask the lecturer.';
  };
 }catch(e){el.textContent='Course information is unavailable: '+e.message;}}
function openUniversity(){modal?.remove();if(window.LizzyUniversityRepair?.open)window.LizzyUniversityRepair.open('university');else if(window.LizzyUniversityV3?.open)window.LizzyUniversityV3.open('university');else alert('University course files have not loaded.');}
function decorate(w){modal=w;if(pollId)clearInterval(pollId);const main=w.querySelector('.funAppModal main');if(!main)return;
 const section=document.createElement('section');section.id='asAddons';section.className='asAddons';section.innerHTML=`<h3>✨ Assistant Extras</h3><label class="asRow">Assistant personality <select id="asMode">${Object.entries(modes).map(([k,v])=>`<option value="${k}" ${k===activeMode?'selected':''}>${v}</option>`).join('')}</select></label><p class="asIntro">Personality changes the style of scripted Assistant replies. Personal answers from Mikael are always clearly identified.</p>
 <details id="asGotham"><summary>🦇 Gotham Communications — Batman, Catwoman & Alfred</summary><p>Message Gotham characters or paste text for Detective Analysis. Screenshots are not supported. Your private Gotham conversations are not sent to Test HQ or Telegram.</p><div id="asGothamComms" data-gc-mount="assistant"></div></details>
 <details><summary>👑 Ask the President</summary><label>Your question to Mikael<textarea id="asQuestion" rows="3" maxlength="1400" placeholder="What would you like to ask him?"></textarea></label><button type="button" id="asAsk">Send to the President</button><button type="button" id="asRefresh">↻ Check for his reply</button><div id="asRequests" aria-live="polite"></div></details>
 <details><summary>🎓 University & Office Hours</summary><p>Open your enrolled courses, revise lesson theory, or ask your lecturer directly in Office Hours. The Assistant cannot alter grades or give exam answers.</p><button type="button" id="asUniversity">Open University of Mikael</button><button type="button" id="asLoadCourses">My enrolled courses</button><div id="asUniversityCourses"></div></details>
 <details id="asHints"><summary>🧠 Hints for existing challenges</summary><p>Three progressively helpful clues without revealing the answer or changing scores.</p><button type="button" id="asLoadHints">Find my active challenge</button><select id="asAttempt"><option value="">Load an active challenge</option></select><label>Hint level<select id="asHintLevel"><option value="1">1 · Gentle</option><option value="2">2 · More specific</option><option value="3">3 · Strong guidance</option></select></label><button type="button" id="asGetHint">Give me a hint</button><p id="asHintText" aria-live="polite"></p></details>
 <details><summary>🧩 Daily Mini-Challenge</summary><div id="asDaily"><p id="asDailyQuestion">Loading today's challenge…</p><input id="asDailyAnswer" maxlength="120" placeholder="Your answer"><button type="button" data-as-daily-check>Check my answer</button><button type="button" data-as-daily-hint>Hint 1</button><button type="button" data-as-daily-hint2>Hint 2</button><button type="button" data-as-daily-hint3>Hint 3</button><p id="asDailyResult" aria-live="polite"></p></div></details>
 <details><summary>📖 Previous Assistant conversations</summary><p>Saved only in this browser. You can delete individual exchanges or the entire history.</p><div id="asHistory"></div><button type="button" id="asClearHistory">Delete all Assistant history</button></details>
 <p id="asComment" class="asComment"></p><p id="asNotice" class="asNotice" role="status"></p>`;
 main.insertBefore(section, main.querySelector('.v416QuestionGrid')||main.firstChild);
 if(window.GothamComms)window.GothamComms.mount(w.querySelector('#asGothamComms'),{surface:'assistant'});else w.querySelector('#asGothamComms').textContent='Gotham Communications is not installed. Check the Stage 2 website files.';
 w.querySelector('#asMode').addEventListener('change',e=>{activeMode=e.target.value;save(MODE,activeMode);notify('Personality updated to '+modes[activeMode]);});
 w.querySelector('#asAsk').onclick=askPresident;w.querySelector('#asRefresh').onclick=loadRequests;w.querySelector('#asUniversity').onclick=openUniversity;w.querySelector('#asLoadCourses').onclick=universityCourses;
 w.querySelector('#asLoadHints').onclick=hints;w.querySelector('#asGetHint').onclick=getHint;
 w.querySelector('[data-as-daily-check]').onclick=()=>daily(0,true);for(let i=1;i<=3;i++){const name=i===1?'[data-as-daily-hint]':`[data-as-daily-hint${i}]`;w.querySelector(name).onclick=()=>daily(i,false);}
 w.querySelector('#asClearHistory').onclick=()=>{if(confirm('Delete all saved Assistant conversations from this browser?')){save(HISTORY,[]);history();}};
 history();daily();loadRequests();pollId=setInterval(()=>{if(!w.isConnected){clearInterval(pollId);pollId=null;return;}loadRequests();},18000);
}
window.LizzyAssistantUpgrades={decorate,record,style};
})();

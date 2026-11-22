/* TESTR — Story-linked polls appear beside every article/headline actually displayed today. No fixed general poll. */
(()=>{'use strict';const API='https://mickyhq-test.mulaudzimikael73.workers.dev/';const DID='lizzyGobshitePart1BrowserIdV1';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>globalThis.crypto?.randomUUID?.().replaceAll('-','_')||('browser'+Date.now()+Math.random().toString(36).slice(2));
function device(){let x=localStorage.getItem(DID);if(!x){x='lizzy_'+uid();localStorage.setItem(DID,x)}return x;}
let items=[],polls=[],busy=false,message='',mountedDay='',mountSequence=0;
const day=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Johannesburg',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
async function api(action,fields={}){const r=await fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,device:device(),...fields}),cache:'no-store'});const j=await r.json().catch(()=>({}));if(!r.ok||j.success===false)throw Error(j.error||'Newspaper polls could not connect');return j;}
function slots(){const root=document.querySelector('#browserPage .newsPage');if(!root)return [];
 const get=(id,section,node,selector)=>{if(!node)return null;const title=(node.dataset.gob2Title||(node.matches('li')?String(node.firstChild?.textContent||'').trim():(node.querySelector(selector)||node).textContent.trim())).slice(0,165);if(!node.dataset.gob2Title)node.dataset.gob2Title=title;if(!title)return null;const snippet=node.querySelector('p')?.textContent.trim().slice(0,250)||'';return{id,section,title,snippet,node};};
 const featured=get('featured','featured',root.querySelector('.newsHeadlineCard.featured'),'h2');
 const cards=[...root.querySelectorAll('.newsHeadlineGrid .newsHeadlineCard')];const bank=get('banking','banking',cards[0],'h3'),life=get('lifestyle','lifestyle',cards[1],'h3'),sport=get('sports','sports',cards[2],'h3');
 const blogs=[...root.querySelectorAll('.newsBlog .newsArticle')];const finance=get('finance','finance',blogs[0],'h2'),president=get('president','president',blogs[1],'h2');
 // Presidential article is displayed with a generic title, so enrich metadata with its actual visible copy.
 if(president)president.snippet=blogs[1]?.querySelector('p:not(.newsByline)')?.textContent.trim().slice(0,250)||president.snippet;
 const holiday=get('holiday','holiday',root.querySelector('.uomHolidayArticle'),'h2');
 const ticker=[...root.querySelectorAll('.newsTicker > li')].slice(0,8).map((n,i)=>get('ticker'+i,'ticker',n,'span')).filter(Boolean);
 const reader=[...root.querySelectorAll('#gobP1Mount .gobP1Published[data-reader-story-id]')].filter(n=>n.dataset.day===day()).slice(0,18).map(n=>get('reader-'+n.dataset.readerStoryId,'reader',n,'h3')).filter(Boolean);
 return [featured,bank,life,sport,finance,president,...ticker,holiday,...reader].filter(Boolean);
}
function view(item,p){if(!p)return `<p class="gob2Tiny">Today's question is loading…</p>`;
 const total=p.realTotal+p.fictionalTotal;
 return `<div class="gob2Top"><span>🗳️ Reader Poll · ${esc(p.section)}</span>${p.voted!==null?'<small>✓ You voted</small>':''}</div><p class="gob2Question">${esc(p.question)}</p>${p.voted===null?`<div class="gob2Answers">${p.options.map((x,i)=>`<label><input type="radio" name="vote-${esc(p.id)}" value="${i}"><span>${esc(x)}</span></label>`).join('')}</div><button class="gob2Btn" type="button" data-gob2-vote="${esc(p.id)}">Submit my vote</button>`:`<p class="gob2Selected">Your answer: <strong>${esc(p.options[p.voted])}</strong></p>`}<div class="gob2Results">${p.counts.map(x=>`<div><span>${esc(x.name)}</span><b>${x.count}</b></div>`).join('')}</div><small class="gob2Foot">${p.realTotal} real vote${p.realTotal===1?'':'s'} · ${p.fictionalTotal} simulated fictional citizens · ${total} total displayed</small>`;
}
function draw(){for(const item of items){if(!item.node.isConnected)continue;let root=item.node.querySelector(':scope > .gob2Poll');if(!root){root=document.createElement('div');root.className='gob2Poll';item.node.appendChild(root);}const poll=polls.find(p=>p.storyId===item.id);root.innerHTML=poll?view(item,poll):`<div class="gob2Top">🗳️ Today's story poll</div><p class="gob2Tiny">${esc(message||'Preparing the question…')}</p>`;const btn=root.querySelector('[data-gob2-vote]');if(btn)btn.onclick=()=>vote(btn.dataset.gob2Vote,root);}}
async function vote(id,root){if(busy)return;const opt=root.querySelector('input[type="radio"]:checked');if(!opt){message='Choose an answer first.';const msg=root.querySelector('.gob2Tiny')||document.createElement('p');msg.className='gob2Tiny';msg.textContent=message;root.appendChild(msg);return;}busy=true;try{const r=await api('gob2_vote',{pollId:id,choice:Number(opt.value)});polls=polls.map(p=>p.id===id?r.poll:p);message='';draw();}catch(e){message=e.message;draw();}finally{busy=false;}}
async function mount(){const today=day(),sequence=++mountSequence;items=slots();if(items.length<6)return;const stories=items.map(({id,section,title,snippet})=>({id,section,title,snippet}));mountedDay=today;message='';draw();
 try{const r=await api('gob2_edition',{stories});if(mountedDay!==today||sequence!==mountSequence)return;polls=r.polls||[];draw();}catch(e){if(sequence!==mountSequence)return;message='Poll connection unavailable: '+e.message;draw();}}
window.LizzyArticlePolls={mount};
})();

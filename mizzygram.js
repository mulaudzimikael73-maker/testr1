(()=>{"use strict";

/* =====================================================================
   MizzyGram — Phase 2 (Make It Social)
   Everything is stored in this browser (IndexedDB) for now.
   To change a user's username / bio / picture, edit CONFIG below.
   To act as Mikael instead of Lizzy, use the "Switch to Mikael" button
   on the Profile tab (own profile) — this is a single-device app, so
   switching is how both of you can like/comment/follow from here until
   this moves onto the shared Worker.
   ===================================================================== */
const CONFIG={
  me:"lizzy",           // whose device/browser this normally is
  users:{
    lizzy:{
      id:"lizzy",
      username:"lizzy",
      name:"Lizzy",
      avatar:"assets/lizzy.png",
      bio:"Little Miss Attitude 💗\nMain character. Mikael is supporting cast."
    },
    mikael:{
      id:"mikael",
      username:"mikael",
      name:"Mikael",
      avatar:"assets/mikael-appears/mikael-1.jpg",
      bio:"Supporting cast, main heart 💫\nHere for Lizzy, always."
    }
  },
  reactions:[
    {id:"love",emoji:"❤️",label:"Love"},
    {id:"funny",emoji:"😂",label:"Funny"},
    {id:"attitude",emoji:"😈",label:"Attitude"},
    {id:"cute",emoji:"😍",label:"Cute"},
    {id:"fire",emoji:"🔥",label:"Fire"},
    {id:"bowling",emoji:"🎳",label:"Bowling"},
    {id:"chocolate",emoji:"🍫",label:"Chocolate"},
    {id:"suspicious",emoji:"👀",label:"Suspicious"}
  ],
  maxImage:1080,      // longest side of an uploaded photo, in px
  quality:.85,        // JPEG quality
  maxCaption:500,
  maxComment:300
};

const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);

/* ---------- icons ---------- */
const I={
  heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  comment:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z"/></svg>',
  photo:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="9" cy="9" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg>',
  search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>',
  grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  send:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>'
};

/* =====================================================================
   Storage layer — the only part that touches the browser's database.
   (When we go multi-device later, this is the piece we swap for the
   Cloudflare Worker.)
   ===================================================================== */
const Store=(()=>{
  let db=null,persistent=false;
  const mem={posts:[],meta:{}};
  const open=()=>new Promise(res=>{
    if(!window.indexedDB)return res(false);
    let req;
    try{req=indexedDB.open("mizzygram",1)}catch{return res(false)}
    req.onupgradeneeded=()=>{const d=req.result;d.createObjectStore("posts",{keyPath:"id"});d.createObjectStore("meta")};
    req.onsuccess=()=>{db=req.result;res(true)};
    req.onerror=req.onblocked=()=>res(false);
  });
  const run=(store,mode,fn)=>new Promise((res,rej)=>{
    const t=db.transaction(store,mode),r=fn(t.objectStore(store));
    t.oncomplete=()=>res(r&&r.result);
    t.onerror=t.onabort=()=>rej(t.error||new Error("Storage error"));
  });
  return{
    async init(){persistent=await open();return persistent},
    get persistent(){return persistent},
    async allPosts(){return persistent?(await run("posts","readonly",s=>s.getAll()))||[]:[...mem.posts]},
    async savePost(p){
      if(!persistent){const i=mem.posts.findIndex(x=>x.id===p.id);i<0?mem.posts.push(p):mem.posts[i]=p;return}
      await run("posts","readwrite",s=>s.put(p));
    },
    async getMeta(k,fallback){
      if(!persistent)return k in mem.meta?mem.meta[k]:fallback;
      const v=await run("meta","readonly",s=>s.get(k));
      return v===undefined?fallback:v;
    },
    async setMeta(k,v){
      if(!persistent){mem.meta[k]=v;return}
      await run("meta","readwrite",s=>s.put(v,k));
    }
  };
})();

/* ---------- state ---------- */
const state={
  posts:[],view:"home",pending:null,sheet:null,
  activeUser:CONFIG.me,   // who is "using" the app right now (lizzy or mikael)
  profileUser:null,       // whose profile is currently open (null = activeUser's own)
  replyTo:null            // {id,username} of the comment being replied to
};
const VIEWS=["home","explore","post","notifications","profile"];
const userOf=id=>CONFIG.users[id]||{username:"unknown",name:"Unknown",avatar:""};
const me=()=>userOf(state.activeUser);
const newestFirst=()=>state.posts.sort((a,b)=>b.createdAt-a.createdAt);
const reactionOf=id=>CONFIG.reactions.find(r=>r.id===id);
const otherUserId=()=>Object.keys(CONFIG.users).find(id=>id!==state.activeUser);

/* ---------- follow graph: { userId: Set(userIds they follow) } ---------- */
let followGraph={lizzy:new Set(),mikael:new Set(["lizzy"])}; // Mikael already follows Lizzy by default 💗
const isFollowing=(a,b)=>!!(followGraph[a]&&followGraph[a].has(b));
const followingOf=id=>[...(followGraph[id]||[])];
const followersOf=id=>Object.keys(CONFIG.users).filter(u=>followGraph[u]&&followGraph[u].has(id));
async function saveFollowGraph(){
  const plain={};for(const k in followGraph)plain[k]=[...followGraph[k]];
  try{await Store.setMeta("follow-graph",plain)}catch{}
}
async function toggleFollow(targetId){
  const who=state.activeUser;
  if(who===targetId||!CONFIG.users[targetId])return;
  if(!followGraph[who])followGraph[who]=new Set();
  followGraph[who].has(targetId)?followGraph[who].delete(targetId):followGraph[who].add(targetId);
  await saveFollowGraph();
  render(true);renderSheet();
}
async function switchUser(id){
  if(!CONFIG.users[id]||id===state.activeUser)return;
  state.activeUser=id;state.profileUser=null;state.replyTo=null;
  try{await Store.setMeta("active-user",id)}catch{}
  toast(`Now using MizzyGram as ${CONFIG.users[id].name} 💫`);
  render(false);
}
function goProfile(id){
  if(!CONFIG.users[id])return;
  state.profileUser=id;
  if(location.hash==="#profile"){state.view="profile";render(false)}
  else location.hash="#profile";
}

function ago(t){
  const s=Math.max(0,(Date.now()-t)/1000);
  if(s<60)return"just now";
  if(s<3600)return Math.floor(s/60)+"m";
  if(s<86400)return Math.floor(s/3600)+"h";
  if(s<604800)return Math.floor(s/86400)+"d";
  return new Date(t).toLocaleDateString([],{day:"numeric",month:"short",year:"numeric"});
}
let toastTimer;
function toast(msg){
  const t=$("toast");t.textContent=msg;t.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2600);
}

/* ---------- photo processing ---------- */
function prepareImage(file){
  return new Promise((resolve,reject)=>{
    if(!file||!/^image\//.test(file.type))return reject(new Error("Please choose a photo (JPG, PNG or WebP)."));
    const url=URL.createObjectURL(file),img=new Image();
    img.onload=()=>{
      try{
        const scale=Math.min(1,CONFIG.maxImage/Math.max(img.naturalWidth,img.naturalHeight));
        const w=Math.round(img.naturalWidth*scale),h=Math.round(img.naturalHeight*scale);
        const c=document.createElement("canvas");c.width=w;c.height=h;
        const x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,w,h);x.drawImage(img,0,0,w,h);
        resolve(c.toDataURL("image/jpeg",CONFIG.quality));
      }catch(e){reject(new Error("Couldn't process that photo."))}
      finally{URL.revokeObjectURL(url)}
    };
    img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error("Couldn't read that photo. Try a JPG or PNG."))};
    img.src=url;
  });
}

/* ---------- reactions helpers ---------- */
function reactionCounts(p){
  const buckets={};
  for(const uidKey in p.reactions){
    const rid=p.reactions[uidKey];
    (buckets[rid]||(buckets[rid]=[])).push(uidKey);
  }
  return CONFIG.reactions
    .map(r=>({...r,users:buckets[r.id]||[],count:(buckets[r.id]||[]).length}))
    .filter(g=>g.count>0)
    .sort((a,b)=>b.count-a.count);
}
const totalReactions=p=>Object.keys(p.reactions).length;

/* =====================================================================
   Views
   ===================================================================== */
function postCard(p){
  const u=userOf(p.userId),mineReact=p.reactions[state.activeUser],total=totalReactions(p);
  const n=p.comments.length;
  const alt=p.caption?`Photo by ${u.username}: ${p.caption.slice(0,100)}`:`Photo by ${u.username}`;
  const groups=reactionCounts(p).slice(0,3).map(g=>g.emoji).join("");
  return `<article class="post" data-id="${p.id}">
    <header class="postHead">
      <button class="ava" data-user="${u.id}" aria-label="${esc(u.name)}'s profile"><img src="${esc(u.avatar)}" alt=""></button>
      <button class="uname" data-user="${u.id}">${esc(u.username)}</button>
      <time datetime="${new Date(p.createdAt).toISOString()}">${ago(p.createdAt)}</time>
    </header>
    <div class="photo" data-dbl><img src="${p.image}" alt="${esc(alt)}"><span class="burst" aria-hidden="true">${mineReact?reactionOf(mineReact).emoji:I.heart}</span></div>
    <div class="actions">
      <div class="likeWrap">
        <button class="act ${mineReact?"on":""}" data-like data-id="${p.id}" aria-pressed="${!!mineReact}" aria-label="${mineReact?"Remove reaction":"Like (hold for more reactions)"}">${mineReact?`<span class="reactEmoji">${reactionOf(mineReact).emoji}</span>`:I.heart}</button>
      </div>
      <button class="act" data-comment aria-label="Comment">${I.comment}</button>
    </div>
    ${total?`<button class="likes" data-reactions="${p.id}">${groups} ${total} ${total===1?"reaction":"reactions"}</button>`:""}
    ${p.caption?`<div class="cap"><b>${esc(u.username)}</b>${esc(p.caption)}</div>`:""}
    ${n?`<button class="viewC" data-comment>View ${n===1?"1 comment":`all ${n} comments`}</button>`:""}
  </article>`;
}

function emptyState(icon,title,text,cta){
  return `<div class="empty"><div class="bigIcon">${icon}</div><h2>${title}</h2><p>${text}</p>${cta||""}</div>`;
}

const renderers={
  home(){
    if(!state.posts.length)return emptyState(I.photo,"Nothing here yet","Your feed is empty. Share the first photo in Our World.",'<a class="btn primary" href="#post">Post a photo</a>');
    return state.posts.map(postCard).join("");
  },
  explore(){
    if(!state.posts.length)return emptyState(I.search,"Nothing to explore","When photos get posted, they'll show up here.");
    return `<h1 class="pageTitle">Explore</h1><div class="grid">${state.posts.map(tile).join("")}</div>`;
  },
  post(){
    const pend=state.pending;
    return `<form class="compose" id="composeForm" novalidate>
      <label class="drop">
        <input type="file" id="photoInput" accept="image/*" aria-label="Choose a photo">
        ${pend?`<img src="${pend.image}" alt="Selected photo preview">`:`<span class="dropHint">${I.photo}<b>Choose a photo</b><span>Tap to pick one from your device</span></span>`}
      </label>
      <label class="lbl" for="caption">Caption</label>
      <textarea id="caption" maxlength="${CONFIG.maxCaption}" placeholder="Write a caption…">${esc(pend?pend.caption:"")}</textarea>
      <div class="count" id="capCount">0/${CONFIG.maxCaption}</div>
      <div class="err" id="postErr" role="alert"></div>
      <button class="btn primary block" id="shareBtn" type="submit" ${pend?"":"disabled"}>Post</button>
    </form>`;
  },
  notifications(){
    return emptyState('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',"All quiet","Likes and comments will show up here.");
  },
  profile(){
    const viewing=state.profileUser||state.activeUser;
    const u=userOf(viewing),isMe=viewing===state.activeUser;
    const mine=state.posts.filter(p=>p.userId===viewing);
    const followers=followersOf(viewing).length,following=followingOf(viewing).length;
    const other=otherUserId();
    return `<section class="pHead">
        <div class="pAva"><img src="${esc(u.avatar)}" alt="${esc(u.name)}'s profile picture"></div>
        <div class="stats">
          <div><b>${mine.length}</b><span>Posts</span></div>
          <button class="statBtn" data-stat="followers" data-stat-user="${viewing}"><b>${followers}</b><span>Followers</span></button>
          <button class="statBtn" data-stat="following" data-stat-user="${viewing}"><b>${following}</b><span>Following</span></button>
        </div>
      </section>
      <section class="pInfo">
        <h1 class="pName">${esc(u.name)}</h1>
        <div class="pUser">@${esc(u.username)}</div>
        <p class="pBio">${esc(u.bio)}</p>
        ${isMe
          ?`<button class="btn ghost block" data-switch="${other}">Switch to ${esc(userOf(other).name)}</button>`
          :`<button class="btn ${isFollowing(state.activeUser,viewing)?"ghost":"primary"} block" data-follow="${viewing}" aria-pressed="${isFollowing(state.activeUser,viewing)}">${isFollowing(state.activeUser,viewing)?"Following":"Follow"}</button>`}
      </section>
      <div class="gridLabel">${I.grid}<span>Posts</span></div>
      ${mine.length?`<div class="grid">${mine.map(tile).join("")}</div>`:`<div class="gridEmpty">No posts yet.</div>`}`;
  }
};

const tile=p=>`<button class="tile" data-open="${p.id}" aria-label="Open photo${p.caption?": "+esc(p.caption.slice(0,60)):""}"><img src="${p.image}" alt=""></button>`;

/* ---------- render + routing ---------- */
function render(keepScroll){
  const v=$("view"),top=v.scrollTop;
  v.innerHTML=renderers[state.view]();
  v.scrollTop=keepScroll?top:0;
  document.querySelectorAll(".bottom a").forEach(a=>{
    if(a.dataset.view===state.view)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  if(state.view==="post")bindCompose();
}
function route(){
  const h=(location.hash||"#home").slice(1);
  state.view=VIEWS.includes(h)?h:"home";
  closeSheet(true);closeReactPicker();
  render(false);
}
window.addEventListener("hashchange",route);
document.querySelector('.bottom a[data-view="profile"]').addEventListener("click",()=>{state.profileUser=null});

/* ---------- create post ---------- */
function bindCompose(){
  const input=$("photoInput"),cap=$("caption"),count=$("capCount"),err=$("postErr"),btn=$("shareBtn");
  const upd=()=>{count.textContent=`${cap.value.length}/${CONFIG.maxCaption}`;if(state.pending)state.pending.caption=cap.value};
  upd();cap.addEventListener("input",upd);
  input.addEventListener("change",async()=>{
    err.textContent="";
    const f=input.files&&input.files[0];if(!f)return;
    try{
      const image=await prepareImage(f);
      state.pending={image,caption:cap.value};
      render(true);$("caption").focus();
    }catch(e){err.textContent=e.message}
  });
  $("composeForm").addEventListener("submit",async e=>{
    e.preventDefault();
    if(!state.pending)return;
    btn.disabled=true;err.textContent="";
    const post={id:uid(),userId:state.activeUser,image:state.pending.image,caption:cap.value.trim(),createdAt:Date.now(),reactions:{},comments:[]};
    try{
      await Store.savePost(post);
      state.posts.push(post);newestFirst();
      state.pending=null;
      toast("Posted 💗");
      location.hash="#home";
      if(state.view==="home")render(false);
    }catch(e2){
      err.textContent="Couldn't save that post — your browser may be out of space.";
      btn.disabled=false;
    }
  });
}

/* ---------- likes / reactions ---------- */
async function toggleReaction(id,reactionId){
  const p=state.posts.find(x=>x.id===id);if(!p)return;
  if(p.reactions[state.activeUser]===reactionId)delete p.reactions[state.activeUser];
  else p.reactions[state.activeUser]=reactionId;
  try{await Store.savePost(p)}catch{toast("Couldn't save that reaction")}
  render(true);renderSheet();
}
async function forceLove(id){
  const p=state.posts.find(x=>x.id===id);if(!p)return;
  p.reactions[state.activeUser]="love";
  try{await Store.savePost(p)}catch{toast("Couldn't save that reaction")}
  render(true);renderSheet();
}

/* ---------- reaction picker (press & hold the like button) ---------- */
let pressTimer=null,longPressed=false;
function showReactPicker(postId,btn){
  closeReactPicker();
  const app=$("app"),pop=document.createElement("div");
  pop.id="reactPop";pop.className="reactPop";pop.setAttribute("role","menu");pop.setAttribute("aria-label","Choose a reaction");
  pop.innerHTML=CONFIG.reactions.map(r=>`<button class="reactOpt" type="button" data-react="${r.id}" data-id="${postId}" role="menuitem" aria-label="${r.label}">${r.emoji}</button>`).join("");
  app.appendChild(pop);
  const aRect=app.getBoundingClientRect(),bRect=btn.getBoundingClientRect();
  const left=Math.min(Math.max(bRect.left-aRect.left+bRect.width/2,110),aRect.width-110);
  pop.style.left=left+"px";
  pop.style.top=Math.max(bRect.top-aRect.top-58,8)+"px";
  requestAnimationFrame(()=>pop.classList.add("show"));
}
function closeReactPicker(){const p=$("reactPop");if(p)p.remove()}
function onPressStart(e){
  const btn=e.target.closest("[data-like]");if(!btn)return;
  longPressed=false;
  clearTimeout(pressTimer);
  pressTimer=setTimeout(()=>{
    longPressed=true;
    showReactPicker(btn.closest("[data-id]").dataset.id,btn);
    if(navigator.vibrate)try{navigator.vibrate(8)}catch{}
  },420);
}
function onPressEnd(){clearTimeout(pressTimer)}
["view","sheet"].forEach(id=>{
  const el=$(id);
  el.addEventListener("pointerdown",onPressStart);
  el.addEventListener("pointerup",onPressEnd);
  el.addEventListener("pointerleave",onPressEnd);
  el.addEventListener("pointercancel",onPressEnd);
});
document.addEventListener("click",e=>{
  const opt=e.target.closest("[data-react]");
  if(opt)return toggleReaction(opt.dataset.id,opt.dataset.react),closeReactPicker();
  if($("reactPop")&&!e.target.closest("#reactPop")&&!e.target.closest("[data-like]"))closeReactPicker();
});

/* ---------- comments ---------- */
async function submitComment(postId,text,parentId){
  const p=state.posts.find(x=>x.id===postId);if(!p)return;
  p.comments.push({id:uid(),userId:state.activeUser,text,createdAt:Date.now(),likes:[],parentId:parentId||null});
  try{await Store.savePost(p)}catch{toast("Couldn't save that comment")}
  state.replyTo=null;
  render(true);renderSheet();
}
async function toggleCommentLike(postId,commentId){
  const p=state.posts.find(x=>x.id===postId);if(!p)return;
  const c=p.comments.find(x=>x.id===commentId);if(!c)return;
  const i=c.likes.indexOf(state.activeUser);
  i<0?c.likes.push(state.activeUser):c.likes.splice(i,1);
  try{await Store.savePost(p)}catch{toast("Couldn't save that")}
  render(true);renderSheet();
}
async function deleteComment(postId,commentId){
  const p=state.posts.find(x=>x.id===postId);if(!p)return;
  const c=p.comments.find(x=>x.id===commentId);
  if(!c||c.userId!==state.activeUser)return;
  if(!confirm("Delete this comment?"))return;
  p.comments=p.comments.filter(x=>x.id!==commentId&&x.parentId!==commentId);
  if(state.replyTo&&state.replyTo.id===commentId)state.replyTo=null;
  try{await Store.savePost(p)}catch{toast("Couldn't delete that comment")}
  render(true);renderSheet();
}
function commentRow(c,isReply){
  const u=userOf(c.userId),liked=c.likes.includes(state.activeUser),canDel=c.userId===state.activeUser;
  return `<div class="cItem ${isReply?"reply":""}">
    <button class="ava sm" data-user="${u.id}" aria-label="${esc(u.name)}'s profile"><img src="${esc(u.avatar)}" alt=""></button>
    <div class="cBody">
      <div><button class="cUname" data-user="${u.id}">${esc(u.username)}</button> ${esc(c.text)}</div>
      <div class="cMeta">
        <time>${ago(c.createdAt)}</time>
        ${c.likes.length?`<span>${c.likes.length} like${c.likes.length===1?"":"s"}</span>`:""}
        <button class="cLink" data-like-comment="${c.id}">${liked?"Liked":"Like"}</button>
        ${!isReply?`<button class="cLink" data-reply-comment="${c.id}" data-reply-user="${esc(u.username)}">Reply</button>`:""}
        ${canDel?`<button class="cLink danger" data-del-comment="${c.id}">Delete</button>`:""}
      </div>
    </div>
  </div>`;
}

/* ---------- sheets (comments, post viewer, reactions, follow lists) ---------- */
let lastFocus=null;
function openSheet(s){
  lastFocus=document.activeElement;
  if(s.type==="comments")state.replyTo=null;
  state.sheet=s;renderSheet();
}
function closeSheet(silent){
  if(!state.sheet)return;
  state.sheet=null;$("sheet").hidden=true;$("sheet").innerHTML="";
  if(!silent&&lastFocus&&document.contains(lastFocus))lastFocus.focus();
}
function renderSheet(){
  const el=$("sheet"),s=state.sheet;
  if(!s){el.hidden=true;return}
  el.hidden=false;

  if(s.type==="post"){
    const p=state.posts.find(x=>x.id===s.id);
    if(!p){closeSheet();return}
    el.innerHTML=`<div class="sheetBody" role="dialog" aria-modal="true" aria-label="Photo">
      <div class="sheetHead"><h2>Photo</h2><button class="act" data-close aria-label="Close">${I.close}</button></div>
      <div class="sheetScroll">${postCard(p)}</div></div>`;
    el.querySelector("[data-close]").focus();

  }else if(s.type==="comments"){
    const p=state.posts.find(x=>x.id===s.id);
    if(!p){closeSheet();return}
    const top=p.comments.filter(c=>!c.parentId).sort((a,b)=>a.createdAt-b.createdAt);
    const repliesOf=pid=>p.comments.filter(c=>c.parentId===pid).sort((a,b)=>a.createdAt-b.createdAt);
    const list=top.length
      ?`<div class="cList">${top.map(c=>commentRow(c,false)+repliesOf(c.id).map(r=>commentRow(r,true)).join("")).join("")}</div>`
      :`<div class="cNone">No comments yet. Say something nice 💗</div>`;
    const draft=el.querySelector("#cInput")?el.querySelector("#cInput").value:"";
    el.innerHTML=`<div class="sheetBody" role="dialog" aria-modal="true" aria-label="Comments">
      <div class="sheetHead"><h2>Comments</h2><button class="act" data-close aria-label="Close">${I.close}</button></div>
      <div class="sheetScroll">${list}</div>
      ${state.replyTo?`<div class="replyBanner"><span>Replying to @${esc(state.replyTo.username)}</span><button type="button" data-cancel-reply aria-label="Cancel reply">${I.close}</button></div>`:""}
      <form class="cForm" id="cForm"><input id="cInput" maxlength="${CONFIG.maxComment}" placeholder="${state.replyTo?"Write a reply…":"Add a comment…"}" aria-label="Add a comment" autocomplete="off" value="${esc(draft)}"><button class="btn primary" type="submit" aria-label="Send comment">${I.send.replace('<svg','<svg width="20" height="20"')}</button></form></div>`;
    const scroller=el.querySelector(".sheetScroll");scroller.scrollTop=scroller.scrollHeight;
    if(!draft||s.focusInput){el.querySelector("#cInput").focus();}

  }else if(s.type==="reactions"){
    const p=state.posts.find(x=>x.id===s.id);
    if(!p){closeSheet();return}
    const groups=reactionCounts(p);
    el.innerHTML=`<div class="sheetBody" role="dialog" aria-modal="true" aria-label="Reactions">
      <div class="sheetHead"><h2>Reactions</h2><button class="act" data-close aria-label="Close">${I.close}</button></div>
      <div class="sheetScroll">${groups.length?groups.map(g=>`
        <div class="reactGroup">
          <div class="reactGroupHead">${g.emoji} <b>${g.label}</b><span>${g.count}</span></div>
          ${g.users.map(uidKey=>{const u=userOf(uidKey);return `<button class="reactUser" data-user="${uidKey}">
            <span class="ava sm"><img src="${esc(u.avatar)}" alt=""></span><span>${esc(u.name)}</span></button>`}).join("")}
        </div>`).join(""):`<div class="cNone">No reactions yet.</div>`}</div></div>`;

  }else if(s.type==="followList"){
    const ids=s.mode==="followers"?followersOf(s.id):followingOf(s.id);
    el.innerHTML=`<div class="sheetBody" role="dialog" aria-modal="true" aria-label="${s.mode==="followers"?"Followers":"Following"}">
      <div class="sheetHead"><h2>${s.mode==="followers"?"Followers":"Following"}</h2><button class="act" data-close aria-label="Close">${I.close}</button></div>
      <div class="sheetScroll">${ids.length?ids.map(uidKey=>{
        const u=userOf(uidKey),isMe=uidKey===state.activeUser;
        return `<div class="followRow">
          <button class="followUser" data-user="${uidKey}"><span class="ava sm"><img src="${esc(u.avatar)}" alt=""></span><span><b>${esc(u.name)}</b><small>@${esc(u.username)}</small></span></button>
          ${isMe?"":`<button class="btn ${isFollowing(state.activeUser,uidKey)?"ghost":"primary"} sm" data-follow="${uidKey}">${isFollowing(state.activeUser,uidKey)?"Following":"Follow"}</button>`}
        </div>`}).join(""):`<div class="cNone">${s.mode==="followers"?"No followers yet.":"Not following anyone yet."}</div>`}</div></div>`;
  }
}
$("sheet").addEventListener("click",e=>{
  if(e.target.id==="sheet"||e.target.closest("[data-close]"))return closeSheet();
  const userBtn=e.target.closest("[data-user]");
  if(userBtn)return closeSheet(true),goProfile(userBtn.dataset.user);
  const followBtn=e.target.closest("[data-follow]");
  if(followBtn)return toggleFollow(followBtn.dataset.follow);
  const likeC=e.target.closest("[data-like-comment]");
  if(likeC&&state.sheet)return toggleCommentLike(state.sheet.id,likeC.dataset.likeComment);
  const delC=e.target.closest("[data-del-comment]");
  if(delC&&state.sheet)return deleteComment(state.sheet.id,delC.dataset.delComment);
  const replyC=e.target.closest("[data-reply-comment]");
  if(replyC){state.replyTo={id:replyC.dataset.replyComment,username:replyC.dataset.replyUser};renderSheet();$("cInput")?.focus();return}
  if(e.target.closest("[data-cancel-reply]")){state.replyTo=null;renderSheet();$("cInput")?.focus();return}
  const reactBtn=e.target.closest("[data-reactions]");
  if(reactBtn&&state.sheet)return openSheet({type:"reactions",id:reactBtn.dataset.reactions});
  handlePostClick(e);
});
$("sheet").addEventListener("submit",async e=>{
  e.preventDefault();
  const s=state.sheet;if(!s||s.type!=="comments")return;
  const inp=$("cInput"),text=inp.value.trim();if(!text)return;
  inp.value="";
  await submitComment(s.id,text,state.replyTo?state.replyTo.id:null);
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeReactPicker();closeSheet()}});

/* ---------- click handling ---------- */
function handlePostClick(e){
  const art=e.target.closest("[data-id]");
  if(e.target.closest("[data-like]")&&art){
    if(longPressed){longPressed=false;return}
    return toggleReaction(art.dataset.id,"love");
  }
  if(e.target.closest("[data-comment]")&&art)return openSheet({type:"comments",id:art.dataset.id,focusInput:true});
  if(e.target.closest("[data-reactions]")){const btn=e.target.closest("[data-reactions]");return openSheet({type:"reactions",id:btn.dataset.reactions})}
}
$("view").addEventListener("click",e=>{
  const openBtn=e.target.closest("[data-open]");
  if(openBtn)return openSheet({type:"post",id:openBtn.dataset.open});
  const statBtn=e.target.closest("[data-stat]");
  if(statBtn)return openSheet({type:"followList",id:statBtn.dataset.statUser,mode:statBtn.dataset.stat});
  const followBtn=e.target.closest("[data-follow]");
  if(followBtn)return toggleFollow(followBtn.dataset.follow);
  const switchBtn=e.target.closest("[data-switch]");
  if(switchBtn)return switchUser(switchBtn.dataset.switch);
  const userBtn=e.target.closest("[data-user]");
  if(userBtn)return goProfile(userBtn.dataset.user);
  handlePostClick(e);
});
$("view").addEventListener("dblclick",e=>{
  const ph=e.target.closest("[data-dbl]"),art=e.target.closest("[data-id]");
  if(!ph||!art)return;
  ph.classList.remove("pop");void ph.offsetWidth;ph.classList.add("pop");
  forceLove(art.dataset.id);
});

/* ---------- migration (phase 1 -> phase 2 data shape) ---------- */
function migratePost(p){
  if(!p.reactions){
    p.reactions={};
    (p.likes||[]).forEach(uidKey=>{p.reactions[uidKey]="love"});
  }
  delete p.likes;
  p.comments=(p.comments||[]).map(c=>({likes:[],parentId:null,...c}));
  return p;
}

/* ---------- boot ---------- */
(async function boot(){
  await Store.init();
  try{
    state.posts=(await Store.allPosts()).map(migratePost);newestFirst();
    const savedGraph=await Store.getMeta("follow-graph",null);
    if(savedGraph){followGraph={};for(const k in savedGraph)followGraph[k]=new Set(savedGraph[k])}
    state.activeUser=await Store.getMeta("active-user",CONFIG.me);
    if(!CONFIG.users[state.activeUser])state.activeUser=CONFIG.me;
  }catch{}
  route();
  if(!Store.persistent)toast("Heads up: this browser can't save posts");
})();
})();

(()=>{"use strict";

/* =====================================================================
   MizzyGram — Phase 3 (Build The MizzyGram Community)
   Everything is stored in this browser (IndexedDB) for now.
   To change a user's username / bio / picture / personality, edit
   CONFIG below. To act as Mikael instead of Lizzy, use the "Switch to
   Mikael" button on the Profile tab (own profile).
   ===================================================================== */

/* ---------- tiny generators for the fictional accounts' art ----------
   No real photos exist for these accounts, so their avatars and posts
   are drawn on the fly as little SVG cards — a gradient + an emoji. */
function xesc(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function tileAvatar(emoji,c1,c2){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">`+
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>`+
    `<rect width="100" height="100" rx="50" fill="url(#g)"/>`+
    `<text x="50" y="59" font-size="46" text-anchor="middle" dominant-baseline="middle">${xesc(emoji)}</text></svg>`;
  return "data:image/svg+xml;utf8,"+encodeURIComponent(svg);
}
function cardImage(text,emoji,c1,c2){
  const words=String(text).split(" ");let line="",lines=[];
  words.forEach(w=>{if((line+" "+w).trim().length>21){lines.push(line.trim());line=w}else line=(line+" "+w).trim()});
  if(line)lines.push(line.trim());
  const startY=520-(lines.length-1)*32;
  const tspans=lines.map((l,i)=>`<tspan x="60" y="${startY+i*60}">${xesc(l)}</tspan>`).join("");
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">`+
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>`+
    `<rect width="900" height="900" fill="url(#g)"/>`+
    `<text x="60" y="220" font-size="130">${xesc(emoji)}</text>`+
    `<text font-family="Georgia,'Times New Roman',serif" font-size="50" font-weight="700" fill="#fff">${tspans}</text></svg>`;
  return "data:image/svg+xml;utf8,"+encodeURIComponent(svg);
}

const CONFIG={
  me:"lizzy",           // whose device/browser this normally is
  humans:["lizzy","mikael"],
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
      bio:"Supporting cast, main heart 💫\nHere for Lizzy, always.",
      favReaction:"love",
      posts:["Just here thinking about her again. No updates needed, just facts. 💗"],
      comments:["This one's my favorite so far.","Saving this. Obviously.","She has no idea how much I love this.","This is exactly why I follow this account.","Okay but this is adorable, no notes."]
    },
    mikaelhq:{
      id:"mikaelhq",username:"mikaelhq",name:"Mikael HQ",bot:true,favReaction:"love",
      avatar:tileAvatar("🏢","#4c4c72","#181828"),
      bio:"Private command centre ops. Uptime: eternal.\nFiling reports on one (1) very important girl.",
      tile:["🏢","#4c4c72","#181828"],
      posts:[
        "📋 SYSTEM STATUS: All servers green. Mikael's attention: 100% allocated to Lizzy.",
        "🔧 MAINTENANCE NOTICE: HQ chessboard has been reset. Reason: Lizzy won again.",
        "📈 QUARTERLY REPORT: Letters received from Lizzy this month — all of them. Letters replied to — also all of them."
      ],
      comments:["Filed under: reasons HQ exists.","Logging this as a Priority One update.","HQ approves this post. Unanimously.","Forwarding this straight to Mikael's desk."]
    },
    lizzyos:{
      id:"lizzyos",username:"lizzyos",name:"LizzyOS",bot:true,favReaction:"cute",
      avatar:tileAvatar("💻","#ff8fce","#7a35dc"),
      bio:"The system Lizzy lives in. Uptime: since day one.\nRunning on caffeine and main-character energy.",
      tile:["💻","#ff8fce","#7a35dc"],
      posts:[
        "💻 BOOT LOG: Lizzy is online. All systems say 'good.'",
        "🔔 NOTIFICATION: 1 new adorable moment detected. No further action needed, just admire it.",
        "🛠️ UPDATE PATCH v2.0: Added more reasons to smile. Bug fixes: none needed, she's perfect as is."
      ],
      comments:["Logged. Cuteness levels rising.","System says: 😍","Running diagnostics… conclusion: iconic.","Saving this to permanent memory."]
    },
    bowlingfederation:{
      id:"bowlingfederation",username:"bowlingfederation",name:"Bowling Federation",bot:true,favReaction:"bowling",
      avatar:tileAvatar("🎳","#ffb84c","#e8317f"),
      bio:"Official-ish authority on all things bowling.\nStrikes only. Gutter balls will be mocked.",
      tile:["🎳","#ffb84c","#e8317f"],
      posts:[
        "🎳 BREAKING: Someone rolled a gutter ball and we are still recovering emotionally.",
        "🏆 ANNOUNCEMENT: The Bowling Federation officially declares today a Strike Day. Act accordingly.",
        "📢 REMINDER: Bowling shoes are not a fashion statement. We don't make the rules. Actually we do."
      ],
      comments:["This deserves a 300 score. Perfect game.","STRIKE. That's a strike right there.","The Federation has reviewed this post. Verdict: excellent.","10/10, would high-five."]
    },
    chocolateemergency:{
      id:"chocolateemergency",username:"chocolateemergency",name:"Chocolate Emergency",bot:true,favReaction:"chocolate",
      avatar:tileAvatar("🍫","#8a5a2c","#3a220f"),
      bio:"First responders for chocolate-related crises.\nAvailable 24/7. Bring snacks.",
      tile:["🍫","#8a5a2c","#3a220f"],
      posts:[
        "🚨 CHOCOLATE ALERT 🚨 Supplies are running dangerously low. Please remain calm.",
        "🍫 UPDATE: Emergency chocolate reserves have been located. Crisis averted. For now.",
        "⚠️ PUBLIC SERVICE ANNOUNCEMENT: A chocolate-free day has never been survived. Don't be a statistic."
      ],
      comments:["This is now a Level 1 Chocolate Emergency. Sending backup.","Deploying rescue chocolate to this post immediately.","We've never seen anything this sweet. Dispatching a team to investigate.","Confirmed: chocolate-worthy content."]
    },
    bankofmicky:{
      id:"bankofmicky",username:"bankofmicky",name:"Bank of Micky",bot:true,favReaction:"fire",
      avatar:tileAvatar("💰","#2f8f5b","#123322"),
      bio:"Handling deposits to the Token Jar since forever.\nInterest rates: unreasonably high for good behaviour.",
      tile:["💰","#2f8f5b","#123322"],
      posts:[
        "💰 DEPOSIT NOTICE: One (1) Token Jar contribution has been logged. Balance: growing.",
        "📊 STATEMENT: Affection levels this quarter exceeded all projections. No withdrawals recommended.",
        "🏦 ANNOUNCEMENT: The Bank of Micky now offers 0% interest on apologies and 100% interest on good deeds."
      ],
      comments:["Logging this as a Token Jar deposit. Approved.","This post just increased your account balance significantly.","The Bank of Micky has reviewed this and issued a bonus.","Certified: this is rich (in a good way)."]
    },
    mickysdailynews:{
      id:"mickysdailynews",username:"mickysdailynews",name:"Micky's Daily News",bot:true,favReaction:"suspicious",
      avatar:tileAvatar("📰","#c9c9d6","#4a4a5a"),
      bio:"Covering the Lizzy & Mikael beat, 24 hours a day.\nUnverified sources. Fully biased. Front page always.",
      tile:["📰","#c9c9d6","#4a4a5a"],
      posts:[
        "📰 BREAKING: Local girl posts photo, entire app agrees it's the best one yet.",
        "🗞️ EXCLUSIVE: Sources confirm Mikael has, once again, been left speechless.",
        "📸 FRONT PAGE: MizzyGram's most-followed story continues to develop. Stay tuned."
      ],
      comments:["This is going on the front page. No debate.","Sources confirm: adorable. Printing tomorrow's headline now.","Breaking news just dropped and it's this post.","Exclusive coverage incoming. This is huge."]
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
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

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
  const mem={posts:[],stories:[],meta:{}};
  const open=()=>new Promise(res=>{
    if(!window.indexedDB)return res(false);
    let req;
    try{req=indexedDB.open("mizzygram",2)}catch{return res(false)}
    req.onupgradeneeded=()=>{
      const d=req.result;
      if(!d.objectStoreNames.contains("posts"))d.createObjectStore("posts",{keyPath:"id"});
      if(!d.objectStoreNames.contains("meta"))d.createObjectStore("meta");
      if(!d.objectStoreNames.contains("stories"))d.createObjectStore("stories",{keyPath:"id"});
    };
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
    async allStories(){return persistent?(await run("stories","readonly",s=>s.getAll()))||[]:[...mem.stories]},
    async saveStory(s){
      if(!persistent){const i=mem.stories.findIndex(x=>x.id===s.id);i<0?mem.stories.push(s):mem.stories[i]=s;return}
      await run("stories","readwrite",s2=>s2.put(s));
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
  posts:[],stories:[],view:"home",pending:null,sheet:null,
  activeUser:CONFIG.me,   // who is "using" the app right now (lizzy or mikael)
  profileUser:null,       // whose profile is currently open (null = activeUser's own)
  replyTo:null,           // {id,username} of the comment being replied to
  seenStories:new Set()   // story ids the active user has already opened
};
const VIEWS=["home","explore","post","notifications","profile"];
const userOf=id=>CONFIG.users[id]||{username:"unknown",name:"Unknown",avatar:""};
const newestFirst=()=>state.posts.sort((a,b)=>b.createdAt-a.createdAt);
const reactionOf=id=>CONFIG.reactions.find(r=>r.id===id);
const otherHuman=id=>CONFIG.humans.find(h=>h!==id);

/* ---------- follow graph: { userId: Set(userIds they follow) } ---------- */
function followGraphDefault(){
  const g={lizzy:new Set(),mikael:new Set(["lizzy"])}; // Mikael already follows Lizzy by default 💗
  Object.values(CONFIG.users).forEach(u=>{
    if(!u.bot)return;
    g[u.id]=new Set(["lizzy","mikael"]); // every fictional account already follows both of you
  });
  if(g.mickysdailynews)g.mickysdailynews=new Set(Object.keys(CONFIG.users).filter(id=>id!=="mickysdailynews")); // paparazzi — follows literally everyone
  return g;
}
let followGraph=followGraphDefault();
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
  const savedSeen=await Store.getMeta("seen-stories:"+id,[]).catch(()=>[]);
  state.seenStories=new Set(savedSeen);
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
function weightedReaction(u){
  if(u.favReaction&&Math.random()<0.7)return u.favReaction;
  return CONFIG.reactions[Math.floor(Math.random()*CONFIG.reactions.length)].id;
}

/* ---------- the community: fictional accounts liking / commenting / following ---------- */
function scheduleCommunityReactions(post){
  if(post.communityScheduled)return;
  post.communityScheduled=true;
  Store.savePost(post).catch(()=>{}); // persist the flag right away so a quick reload can't double-schedule
  const pool=Object.values(CONFIG.users).filter(u=>u.bot&&u.id!==post.userId);
  if(post.userId==="lizzy"&&state.activeUser!=="mikael")pool.push(CONFIG.users.mikael); // Mikael's quiet, passive presence
  shuffle(pool);
  const n=Math.min(pool.length,2+Math.floor(Math.random()*4)); // 2–5 accounts show up
  pool.slice(0,n).forEach((u,i)=>{
    const delay=1400+Math.random()*11000+i*700;
    setTimeout(()=>communityReact(post.id,u.id),delay);
  });
}
async function communityReact(postId,userId){
  const p=state.posts.find(x=>x.id===postId);if(!p)return;
  const u=CONFIG.users[userId];if(!u)return;
  if(!p.reactions[userId])p.reactions[userId]=weightedReaction(u);
  if(u.comments&&u.comments.length&&Math.random()<0.6){
    const top=p.comments.filter(c=>!c.parentId);
    const replyToExisting=top.length&&Math.random()<0.3;
    const text=u.comments[Math.floor(Math.random()*u.comments.length)];
    p.comments.push({id:uid(),userId,text,createdAt:Date.now(),likes:[],parentId:replyToExisting?top[Math.floor(Math.random()*top.length)].id:null});
  }
  try{await Store.savePost(p)}catch{}
  render(true);renderSheet();
}

/* ---------- one-time seeding of the fictional accounts' posts + stories ---------- */
async function seedCommunityIfNeeded(){
  const seeded=await Store.getMeta("npc-seed-v1",false);
  if(seeded)return;
  const now=Date.now();let t=now-1000*60*60*24*6;
  for(const u of Object.values(CONFIG.users)){
    if(!u.posts)continue;
    for(const caption of u.posts){
      t+=1000*60*60*(5+Math.random()*19);
      const image=u.bot?cardImage(caption,u.tile[0],u.tile[1],u.tile[2]):null;
      if(!image)continue; // (human seed posts need a real photo, so they're skipped here)
      const post={id:uid(),userId:u.id,image,caption,createdAt:Math.min(t,now-60000),reactions:{},comments:[],communityScheduled:true};
      state.posts.push(post);
      try{await Store.savePost(post)}catch{}
    }
  }
  newestFirst();
  try{await Store.setMeta("npc-seed-v1",true)}catch{}
}
async function seedStoriesIfNeeded(){
  const seeded=await Store.getMeta("story-seed-v1",false);
  if(seeded)return;
  const seeds=[
    ["Thinking about her again. No updates needed, just facts.","💭","#ff8fce","#7a35dc"],
    ["HQ is quiet tonight. She's the loudest part of my day, even from here.","🌙","#3a3a55","#171726"]
  ];
  for(const [caption,emoji,c1,c2] of seeds){
    const story={id:uid(),userId:"mikael",image:cardImage(caption,emoji,c1,c2),caption,createdAt:Date.now()};
    state.stories.push(story);
    try{await Store.saveStory(story)}catch{}
  }
  try{await Store.setMeta("story-seed-v1",true)}catch{}
}

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

function storiesBar(){
  const byUser={};
  state.stories.forEach(s=>{(byUser[s.userId]||(byUser[s.userId]=[])).push(s)});
  const order=Object.keys(byUser).sort((a,b)=>{
    if(a==="mikael")return -1;if(b==="mikael")return 1;
    return Math.max(...byUser[b].map(s=>s.createdAt))-Math.max(...byUser[a].map(s=>s.createdAt));
  });
  if(!order.length)return"";
  return `<div class="stories">${order.map(uidKey=>{
    const u=userOf(uidKey),list=byUser[uidKey],unseen=list.some(s=>!state.seenStories.has(s.id));
    return `<button class="storyRing ${unseen?"unseen":""}" data-story-user="${uidKey}"><span class="storyAva"><img src="${esc(u.avatar)}" alt=""></span><span class="storyName">${esc(u.name)}</span></button>`;
  }).join("")}</div>`;
}

const renderers={
  home(){
    const bar=storiesBar();
    if(!state.posts.length)return bar+emptyState(I.photo,"Nothing here yet","Your feed is empty. Share the first photo in Our World.",'<a class="btn primary" href="#post">Post a photo</a>');
    return bar+state.posts.map(postCard).join("");
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
    const other=otherHuman(state.activeUser);
    return `<section class="pHead">
        <div class="pAva"><img src="${esc(u.avatar)}" alt="${esc(u.name)}'s profile picture"></div>
        <div class="stats">
          <div><b>${mine.length}</b><span>Posts</span></div>
          <button class="statBtn" data-stat="followers" data-stat-user="${viewing}"><b>${followers}</b><span>Followers</span></button>
          <button class="statBtn" data-stat="following" data-stat-user="${viewing}"><b>${following}</b><span>Following</span></button>
        </div>
      </section>
      <section class="pInfo">
        <h1 class="pName">${esc(u.name)}${u.bot?' <span class="botTag">bot</span>':""}</h1>
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
      scheduleCommunityReactions(post);
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

/* ---------- stories ---------- */
function openStoryViewer(userId){
  const list=state.stories.filter(s=>s.userId===userId).sort((a,b)=>a.createdAt-b.createdAt);
  if(!list.length)return;
  openSheet({type:"story",userId,list,index:0});
  markStorySeen(list[0].id);
}
function markStorySeen(id){
  state.seenStories.add(id);
  Store.setMeta("seen-stories:"+state.activeUser,[...state.seenStories]).catch(()=>{});
}
function storyNav(dir){
  const s=state.sheet;if(!s||s.type!=="story")return;
  const ni=s.index+dir;
  if(ni<0)return;
  if(ni>=s.list.length)return closeSheet();
  s.index=ni;markStorySeen(s.list[ni].id);renderSheet();
}

/* ---------- sheets (comments, post viewer, reactions, follow lists, stories) ---------- */
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

  }else if(s.type==="story"){
    const st=s.list[s.index],u=userOf(s.userId);
    el.innerHTML=`<div class="sheetBody storySheet" role="dialog" aria-modal="true" aria-label="${esc(u.name)}'s story">
      <div class="svBars">${s.list.map((_,i)=>`<span class="${i<=s.index?"on":""}"></span>`).join("")}</div>
      <div class="svHead"><span class="ava sm"><img src="${esc(u.avatar)}" alt=""></span><b>${esc(u.name)}</b><span class="svTime">${ago(st.createdAt)}</span><button class="act" data-close aria-label="Close">${I.close}</button></div>
      <div class="svImgWrap"><img class="svImg" src="${st.image}" alt=""></div>
      ${st.caption?`<div class="svCap">${esc(st.caption)}</div>`:""}
      <button class="svZone left" type="button" data-story-prev aria-label="Previous story"></button>
      <button class="svZone right" type="button" data-story-next aria-label="Next story"></button>
    </div>`;
  }
}
$("sheet").addEventListener("click",e=>{
  if(e.target.id==="sheet"||e.target.closest("[data-close]"))return closeSheet();
  if(e.target.closest("[data-story-prev]"))return storyNav(-1);
  if(e.target.closest("[data-story-next]"))return storyNav(1);
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
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){closeReactPicker();closeSheet()}
  if(state.sheet&&state.sheet.type==="story"){
    if(e.key==="ArrowRight")storyNav(1);
    if(e.key==="ArrowLeft")storyNav(-1);
  }
});

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
  const storyBtn=e.target.closest("[data-story-user]");
  if(storyBtn)return openStoryViewer(storyBtn.dataset.storyUser);
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

/* ---------- migration (phase 1/2 -> phase 3 data shape) ---------- */
function migratePost(p){
  if(!p.reactions){
    p.reactions={};
    (p.likes||[]).forEach(uidKey=>{p.reactions[uidKey]="love"});
  }
  delete p.likes;
  p.comments=(p.comments||[]).map(c=>({likes:[],parentId:null,...c}));
  if(p.communityScheduled===undefined)p.communityScheduled=false;
  return p;
}

/* ---------- boot ---------- */
(async function boot(){
  await Store.init();
  try{
    state.posts=(await Store.allPosts()).map(migratePost);newestFirst();
    await seedCommunityIfNeeded();
    // give the community a chance to catch up on any older posts that never got reactions
    state.posts.filter(p=>!p.communityScheduled&&CONFIG.humans.includes(p.userId)).forEach(scheduleCommunityReactions);
    state.stories=await Store.allStories();
    await seedStoriesIfNeeded();
    const savedGraph=await Store.getMeta("follow-graph",null);
    if(savedGraph){
      followGraph=followGraphDefault();
      for(const k in savedGraph)followGraph[k]=new Set(savedGraph[k]);
    }
    state.activeUser=await Store.getMeta("active-user",CONFIG.me);
    if(!CONFIG.users[state.activeUser])state.activeUser=CONFIG.me;
    const savedSeen=await Store.getMeta("seen-stories:"+state.activeUser,[]);
    state.seenStories=new Set(savedSeen);
  }catch{}
  route();
  if(!Store.persistent)toast("Heads up: this browser can't save posts");
})();
})();

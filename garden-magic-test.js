/* LIZZY'S GARDEN MAGIC v2 — TESTR ONLY. All original garden functionality is untouched. */
(()=>{'use strict';
 const $=id=>document.getElementById(id);
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const OLD='lizzyGardenMagicTESTv1',KEY='lizzyGardenMagicTESTv2',GARDEN='lizzyGardenV1',URLKEY='lizzyos_test_worker_url_v1';
 const A='assets/garden-magic/';
 const catalog={"tulip":{"name":"Tulip","img":"assets/flowers/tulip.png","type":"flower","rarity":"Common"},"redRose":{"name":"Red Rose","img":"assets/flowers/redRose.png","type":"flower","rarity":"Common"},"pinkRose":{"name":"Pink Rose","img":"assets/flowers/pinkRose.png","type":"flower","rarity":"Uncommon"},"whiteRose":{"name":"White Rose","img":"assets/flowers/whiteRose.png","type":"flower","rarity":"Uncommon"},"lilyValley":{"name":"Lily of the Valley","img":"assets/flowers/lilyValley.png","type":"flower","rarity":"Rare"},"cryingLily":{"name":"Crying Lily","img":"assets/flowers/cryingLily.png","type":"flower","rarity":"Rare"},"snapdragon":{"name":"Snapdragon","img":"assets/flowers/snapdragon.png","type":"flower","rarity":"Uncommon"},"sunflower":{"name":"Sunflower","img":"assets/flowers/sunflower.png","type":"flower","rarity":"Common"},"daisy":{"name":"Daisy","img":"assets/flowers/daisy.png","type":"flower","rarity":"Common"},"lavender":{"name":"Lavender","img":"assets/flowers/lavender.png","type":"flower","rarity":"Uncommon"},"orchid":{"name":"Orchid","img":"assets/flowers/orchid.png","type":"flower","rarity":"Rare"},"peony":{"name":"Peony","img":"assets/flowers/peony.png","type":"flower","rarity":"Rare"},"hydrangea":{"name":"Hydrangea","img":"assets/flowers/hydrangea.png","type":"flower","rarity":"Uncommon"},"carnation":{"name":"Carnation","img":"assets/flowers/carnation.png","type":"flower","rarity":"Common"},"daffodil":{"name":"Daffodil","img":"assets/flowers/daffodil.png","type":"flower","rarity":"Common"},"iris":{"name":"Iris","img":"assets/flowers/iris.png","type":"flower","rarity":"Rare"},"chrysanthemum":{"name":"Chrysanthemum","img":"assets/flowers/chrysanthemum.png","type":"flower","rarity":"Uncommon"},"poppy":{"name":"Poppy","img":"assets/flowers/poppy.png","type":"flower","rarity":"Common"},"forgetMeNot":{"name":"Forget-Me-Not","img":"assets/flowers/forgetMeNot.png","type":"flower","rarity":"Rare"},"hibiscus":{"name":"Hibiscus","img":"assets/flowers/hibiscus.png","type":"flower","rarity":"Uncommon"},"mysteryBloom":{"name":"Mystery Blossom","img":"assets/flowers/mysteryBloom.png","type":"flower","rarity":"Secret"},"moonflower":{"name":"Moonflower","img":"assets/flowers/moonflower.png","type":"flower","rarity":"Legendary"},"starBloom":{"name":"Star Bloom","img":"assets/flowers/starBloom.png","type":"flower","rarity":"Legendary"},"gardenCrown":{"name":"Garden Crown","img":"assets/flowers/gardenCrown.png","type":"flower","rarity":"Legendary"},"bananaTree":{"name":"Suspicious Banana Tree","img":"assets/flowers/bananaTree.png","type":"tree","rarity":"Secret"},"jacaranda":{"name":"Jacaranda Tree","img":"assets/flowers/jacaranda.png","type":"tree","rarity":"Uncommon"},"willow":{"name":"Willow Tree","img":"assets/flowers/willow.png","type":"tree","rarity":"Rare"},"cherryTree":{"name":"Cherry Blossom Tree","img":"assets/flowers/cherryTree.png","type":"tree","rarity":"Rare"},"lemonTree":{"name":"Lemon Tree","img":"assets/flowers/lemonTree.png","type":"tree","rarity":"Uncommon"},"pinkDogwood":{"name":"Pink Dogwood Tree","img":"assets/flowers/pinkDogwood.png","type":"tree","rarity":"Uncommon"},"bottlebrush":{"name":"Bottlebrush Tree","img":"assets/flowers/bottlebrush.png","type":"tree","rarity":"Rare"},"silkTree":{"name":"Persian Silk Tree","img":"assets/flowers/silkTree.png","type":"tree","rarity":"Rare"},"japaneseMaple":{"name":"Japanese Maple","img":"assets/flowers/japaneseMaple.png","type":"tree","rarity":"Epic"},"saucerMagnolia":{"name":"Saucer Magnolia","img":"assets/flowers/saucerMagnolia.png","type":"tree","rarity":"Legendary"},"protea":{"name":"Protea","img":"assets/flowers/protea.png","type":"flower","rarity":"Rare"},"zinnia":{"name":"Zinnia","img":"assets/flowers/zinnia.png","type":"flower","rarity":"Uncommon"},"camellia":{"name":"Camellia","img":"assets/flowers/camellia.png","type":"flower","rarity":"Uncommon"},"marigold":{"name":"Marigold","img":"assets/flowers/marigold.png","type":"flower","rarity":"Common"},"babysBreath":{"name":"Baby's Breath","img":"assets/flowers/babysBreath.png","type":"flower","rarity":"Common"},"ranunculus":{"name":"Ranunculus","img":"assets/flowers/ranunculus.png","type":"flower","rarity":"Rare"},"blueRose":{"name":"Blue Rose","img":"assets/flowers/blueRose.png","type":"flower","rarity":"Legendary"},"weepingCherry":{"name":"Weeping Cherry Tree","img":"assets/flowers/weepingCherry.png","type":"tree","rarity":"Rare"},"redwood":{"name":"Redwood Tree","img":"assets/flowers/redwood.png","type":"tree","rarity":"Epic"},"baobab":{"name":"Baobab Tree","img":"assets/flowers/baobab.png","type":"tree","rarity":"Epic"},"wisteriaArch":{"name":"Wisteria Arch","img":"assets/flowers/wisteriaArch.png","type":"tree","rarity":"Legendary"},"cacaoTree":{"name":"Cacao Tree","img":"assets/flowers/cacaoTree.png","type":"tree","rarity":"Epic"}};
 const special=[
 ['butterflyBloom','Butterfly Bloom','butterfly','Common'],['roseNectarFlower','Rose Nectar Flower','butterfly','Rare'],['emeraldPetalVine','Emerald Petal Vine','butterfly','Epic'],
 ['lunarLavender','Lunar Lavender','moon','Common'],['midnightTulip','Midnight Tulip','moon','Uncommon'],['moonlightOrchid','Moonlight Orchid','moon','Rare'],
 ['starLily','Star Lily','moon','Rare'],['silverRose','Silver Rose','moon','Epic'],['celestialBlossom','Celestial Blossom','moon','Legendary'],
 ['secretRose','Secret Rose','hidden','Rare'],['memoryVine','Memory Vine','hidden','Epic'],['wishingLily','Wishing Lily','hidden','Epic'],['eternalBlossom','Eternal Blossom','hidden','Legendary']
 ].map(([id,name,zone,rarity])=>({id,name,zone,rarity,type:'flower',img:A+'plants/'+id+'.webp'}));
 for(const plant of special)catalog[plant.id]=plant;
 const species=Object.fromEntries(special.map(x=>[x.id,x]));
 const butterflies=[
 ['meadowFlutter','Meadow Flutter','Common'],['daisySkipper','Daisy Skipper','Common'],['whiteWhisper','White Whisper','Common'],
 ['blueDream','Blue Dream','Common'],['rosewing','Rosewing','Rare'],['emeraldDancer','Emerald Dancer','Rare'],
 ['sunsetMonarch','Sunset Monarch','Common'],['crystalWing','Crystal Wing','Rare'],['midnightSapphire','Midnight Sapphire','Epic'],['violetEmpress','Violet Empress','Epic'],
 ['stardustFlutter','Stardust Flutter','Epic'],['goldenMonarch','Golden Monarch','Legendary'],['moonpetalSkimmer','Moonpetal Skimmer','Rare'],
 ['opalVeil','Opal Veil','Rare'],['rubyHalo','Ruby Halo','Epic'],['silverDrift','Silver Drift','Rare'],
 ['coralGlimmer','Coral Glimmer','Common'],['celestialLacewing','Celestial Lacewing','Legendary'],
 ['amethystBloomwing','Amethyst Bloomwing','Epic'],['sunlitEmber','Sunlit Ember','Legendary']
 ].map(([id,name,rarity])=>({id,name,rarity,img:A+'butterflies/'+id+'.webp'}));
 const butterflyIndex=Object.fromEntries(butterflies.map(x=>[x.id,x]));
 const flowerOptions=Object.entries(catalog).filter(([id,v])=>v.type==='flower').map(([id,v])=>({id,...v}));
 const glowIds=new Set(['moonflower','lunarLavender','midnightTulip','moonlightOrchid','starLily','silverRose','celestialBlossom','eternalBlossom']);
 const wrapOptions=['Blush Pink','Classic Cream','Midnight Blue','Starlight Silver'];
 const ribbonOptions=['White Satin','Gold','Pink','Moonbeam'];
 const giftPlaces={memoryTree:'Memory Tree',fountain:'Wishing Fountain',hedge:'Secret Hedge'};
 const decorations={butterflyFountain:['Butterfly Fountain','⛲'],moonLantern:['Moon Lantern','🏮'],gardenBench:['Garden Bench','🪑'],starPlanter:['Star Planter','✨'],butterflyStatue:['Butterfly Statue','🦋'],topiary:['Flower Topiary','🌳'],miniFountain:['Mini Fountain','⛲']};
 const seedDefault={};
 const defaults=()=>({version:2,tab:'butterfly',grownIds:[],butterflies:{},seeds:{},beds:[],harvested:{},potted:[],decor:[],claimedGifts:[],
 milestones:[],lastArrival:0,lastPollinateDay:'',lastFireflyAt:0,fireflies:{},stardust:0,lastStarAt:0,starsCaught:0,
 constellationIndex:0,constellation:false,gateStep:0,hiddenUnlocked:false,lastWishDay:'',lastSync:'',pendingDelivery:null,
 light:'auto',lastGallery:'',unlockedSeeds:[],legacyMigrated:false});
 function read(k,fallback={}){try{return JSON.parse(localStorage.getItem(k)||'null')??fallback}catch{return fallback}}
 const old=read(OLD,{});
 let local={...defaults(),...read(KEY,defaults())};
 if(!local.legacyMigrated){
  // Preserve verified discoveries when upgrading the previous TEST-only Garden Magic.
  const mapping={0:'blueDream',1:'rosewing',10:'crystalWing',11:'goldenMonarch'};
  for(const i of old.butterflies||[])if(mapping[i])local.butterflies[mapping[i]]={first:new Date().toISOString(),sightings:1,photos:1};
  local.hiddenUnlocked=!!old.hiddenUnlocked;local.lastWishDay=old.lastWishDay||'';
  local.legacyMigrated=true;
 }
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(local))}catch(e){status('Local storage is full. Garden changes may not save.')}};
 let shared={bouquets:[],surprises:[],progress:{},deliveries:{total:0,fromMikael:0,fromLizzy:0}};
 let connected=false,lastFetched=0,isFetching=false,sendingProgress=false;
 let chosen=[],wrapping=wrapOptions[0],ribbon=ribbonOptions[0],note='',encounter=null,arrivalTimer=0;
 const status=t=>{const e=$('gmStatus');if(e)e.textContent=t};
 const garden=()=>read(GARDEN,{plants:[],flowers:{}});
 const worker=()=>{const v=String(localStorage.getItem(URLKEY)||window.LIZZY_TELEGRAM_WORKER_URL||'').trim();return v?v.replace(/\/+$/,'')+'/':''};
 const now=()=>Date.now(),today=()=>new Date().toISOString().slice(0,10),uid=()=>('gm_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,11));
 const fromHQ=()=>shared.bouquets.filter(x=>x.from==='Mikael').length;
 const fromLizzy=()=>shared.bouquets.filter(x=>x.from==='Lizzy').length;
 const deliveries=()=>{const r=shared.deliveries||{};return {total:Math.max(Number(r.total||0),shared.bouquets.length),fromMikael:Math.max(Number(r.fromMikael||0),fromHQ()),fromLizzy:Math.max(Number(r.fromLizzy||0),fromLizzy())}};
 async function api(action,extra={}){const url=worker();if(!url)throw Error('Connect the TEST Worker using the TEST badge first.');const ac=new AbortController(),t=setTimeout(()=>ac.abort(),15000);try{
  const r=await fetch(url+'?action='+encodeURIComponent(action),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,role:'Lizzy',...extra}),cache:'no-store',signal:ac.signal});
  const d=await r.json().catch(()=>({}));if(!r.ok||d.success===false)throw Error(d.error||'TEST Worker request failed ('+r.status+')');connected=true;return d;
 }finally{clearTimeout(t)}}
 function mergeShared(d){shared={...shared,...d,deliveries:d.deliveries||shared.deliveries};reconcileOpenedGifts();reconcileDelivery();}
 function scan(){let changed=false;for(const p of garden().plants||[]){const id='normal:'+p.id;if(!p.id||!catalog[p.flowerId]||catalog[p.flowerId].type!=='flower'||Number(p.waterCount||0)<6)continue;
  if(!local.grownIds.includes(id)){local.grownIds.push(id);changed=true}
 }
 for(const p of local.beds){if(p.stage>=3){const id='special:'+p.id;if(!local.grownIds.includes(id)){local.grownIds.push(id);changed=true}}}
 if(changed)save();return changed;
 }
 const grown=()=>local.grownIds.length;
 const found=()=>Object.keys(local.butterflies).length;
 const canButter=()=>grown()>=12&&deliveries().total>=1;
 const canMoon=()=>grown()>=15&&deliveries().fromLizzy>=3;
 const canHidden=()=>canButter()&&canMoon()&&grown()>=20&&deliveries().total>=5&&deliveries().fromMikael>=1;
 const hidden=()=>local.hiddenUnlocked&&canHidden();
 function treeStage(){const total=deliveries().total,opened=(shared.surprises||[]).filter(x=>x.openedAt).length;return Math.min(4,1+Math.floor(Math.max(0,total-5)/3)+Math.floor(opened/3))}
 const progress=()=>({flowersGrown:grown(),butterfly:canButter(),moonlight:canMoon(),hiddenUnlocked:hidden(),butterfliesFound:found(),butterflyEmblem:found()>=10,
 moonEmblem:local.constellation&&Object.keys(local.harvested).filter(x=>species[x]?.zone==='moon').length>=3,
 fireflies:Object.values(local.fireflies).reduce((a,b)=>a+Number(b),0),stardust:local.stardust,moonFlowers:local.beds.filter(x=>x.stage>=3&&species[x.flowerId]?.zone==='moon').length,memoryTreeStage:treeStage()});
 function grantSeed(id,n=1){if(!species[id])return;local.seeds[id]=(local.seeds[id]||0)+n;}
 function grantOnce(key,fn){if(local.milestones.includes(key))return;local.milestones.push(key);fn();save()}
 function unlockSeeds(){if(canButter())grantOnce('butterSeeds',()=>{grantSeed('butterflyBloom',2);grantSeed('roseNectarFlower');});
  if(canMoon())grantOnce('moonSeeds',()=>{grantSeed('lunarLavender',2);grantSeed('midnightTulip');grantSeed('moonlightOrchid');});
  if(hidden())grantOnce('hiddenSeeds',()=>{grantSeed('secretRose');grantSeed('memoryVine');grantSeed('wishingLily');});
  const count=found();
  if(count>=5)grantOnce('butter5',()=>{grantSeed('emeraldPetalVine');local.decor.push({id:'butterflyFountain',source:'milestone',giftId:'milestone_b5'})});
  if(count>=10)grantOnce('butter10',()=>grantSeed('roseNectarFlower'));
  if(count>=15)grantOnce('butter15',()=>local.decor.push({id:'butterflyStatue',source:'milestone',giftId:'milestone_b15'}));
  if(count>=20)grantOnce('butter20',()=>grantSeed('celestialBlossom'));
  const ff=Object.values(local.fireflies).reduce((a,b)=>a+b,0);
  if(ff>=3)grantOnce('firefly3',()=>grantSeed('starLily'));
  if(local.constellation)grantOnce('constellation',()=>grantSeed('silverRose'));
  if(local.starsCaught>=3)grantOnce('stars3',()=>grantSeed('celestialBlossom'));
  if(hidden())grantOnce('secretUnlock',()=>grantSeed('eternalBlossom'));
 }
 function grantGift(g){if(local.claimedGifts.includes(g.id)||!g.openedAt)return false;
  local.claimedGifts.push(g.id);
  if((g.kind==='seed')&&species[g.itemId])grantSeed(g.itemId);
  if(g.kind==='plant'&&species[g.itemId])local.potted.push({giftId:g.id,flowerId:g.itemId,location:g.location});
  if(g.kind==='decor'&&decorations[g.itemId])local.decor.push({giftId:g.id,id:g.itemId,location:g.location});
  save();return true;
 }
 function reconcileOpenedGifts(){if(!hidden())return;for(const g of shared.surprises||[])if(g.openedAt)grantGift(g)}
 function applyDelivery(item){const p=local.pendingDelivery;if(!p||item.clientTx!==p.clientTx)return false;
  // One local deduction for one server-confirmed receipt, regardless of retries.
  if(!p.applied){let ok=true;const originals=[];
   for(const id of p.flowers){
    if(species[id]){if(Number(local.harvested[id]||0)<1){ok=false;continue}local.harvested[id]--;}
    else originals.push(id);
   }
   // Use original garden's public API so its in-memory model AND localStorage stay consistent.
   // Updating localStorage alone would be undone by the next original-garden render/save.
   if(originals.length&&typeof window.LizzyGarden?.addFlower==='function'){
    for(const id of originals){if(Number(garden().flowers?.[id]||0)<1){ok=false;continue}window.LizzyGarden.addFlower(id,-1,'Used in a delivered bouquet');}
   }else if(originals.length){const g=garden();for(const id of originals){if(Number(g.flowers?.[id]||0)<1){ok=false;continue}g.flowers[id]--;}
    try{localStorage.setItem(GARDEN,JSON.stringify(g))}catch(e){ok=false}
   }
   p.applied=true;p.inventoryOK=ok;save();}
  local.pendingDelivery=null;chosen=[];note='';save();return true;
 }
 function reconcileDelivery(){const p=local.pendingDelivery;if(!p)return;const item=shared.bouquets.find(b=>b.clientTx===p.clientTx&&b.from==='Lizzy');if(item){const safe=applyDelivery(item);if(safe)status('💌 Previous bouquet delivery was recovered successfully.')}}
 async function retryDelivery(){const p=local.pendingDelivery;if(!p)return;const res=await api('garden_test_send',{from:'Lizzy',...p});shared.bouquets.push(res.item);shared.deliveries={...deliveries(),total:deliveries().total+(res.duplicate?0:1),fromLizzy:deliveries().fromLizzy+(res.duplicate?0:1)};applyDelivery(res.item);await sendProgress();}
 async function sendProgress(){if(!worker()||sendingProgress)return;scan();unlockSeeds();const p=progress(),s=JSON.stringify(p);if(local.lastSync===s)return;
 sendingProgress=true;try{const d=await api('garden_test_progress',{progress:p});mergeShared(d);local.lastSync=s;save()}catch(e){status('⚠️ Test sync: '+e.message)}finally{sendingProgress=false}}
 async function refresh(force=false){if(isFetching||!worker()||(!force&&now()-lastFetched<38000))return;
  isFetching=true;try{const d=await api('garden_test_state');mergeShared(d);lastFetched=now();scan();unlockSeeds();status('🟢 Connected to TEST HQ');render();await sendProgress();}catch(e){connected=false;status('⚠️ '+e.message)}finally{isFetching=false}}
 const img=(s,extra='')=>`<img loading="lazy" src="${esc(s)}" alt="" ${extra}>`;
 const smallImg=id=>catalog[id]?img(catalog[id].img):'';
 const bar=(v,max)=>`<div class="gm-progress"><i style="width:${Math.min(100,Math.floor(v/max*100))}%"></i></div>`;
 const tile=(ok,label)=>`<div class="gm-tile"><b>${ok?'✅':'🔒'} ${label}</b></div>`;
 function makeUI(){if($('gmHub'))return;const a=document.querySelector('#lizzyGardenWindow .gardenApp');if(!a)return;
  const el=document.createElement('section');el.className='gm-hub';el.id='gmHub';el.innerHTML=`<div class="gm-head"><div><small>GARDEN MAGIC · TEST V2</small><h3>🦋 Lizzy's Special Gardens</h3><p class="gm-caption">Original garden, layouts, real photos and your existing game features remain untouched.</p></div><button id="gmLight">🌙 Preview Moonlight</button></div><div class="gm-tabs"><button data-tab="butterfly">🦋 Sanctuary</button><button data-tab="moon">🌙 Moonlight</button><button data-tab="hidden">🔐 Hidden Garden</button><button data-tab="studio">💐 Bouquets</button><button data-tab="passport">📖 Passport</button></div><div id="gmStatus" class="gm-caption">TEST Worker connection not yet verified</div><div id="gmBody" class="gm-pane"></div>`;
  const anchor=a.querySelector('#gardenMikaelComment');if(anchor)anchor.before(el);else a.append(el);
  el.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{local.tab=b.dataset.tab;save();render();refresh()}));
  $('gmLight').onclick=()=>{local.light=local.light==='auto'?'night':local.light==='night'?'day':'auto';save();scene();};
 }
 function scene(){const night=local.light==='night'||local.light==='auto'&&Math.floor(now()/90000)%2===1;document.querySelector('#lizzyGardenWindow')?.classList.toggle('gm-evening',night);if($('gmLight'))$('gmLight').textContent=night?'☀️ Preview Daylight':'🌙 Preview Moonlight'}
 function plantBeds(zone){const plants=special.filter(p=>p.zone===zone),beds=local.beds.filter(p=>species[p.flowerId]?.zone===zone);
  return `<div class="gm-card"><h3>🌱 Exclusive ${zone==='butterfly'?'Sanctuary':zone==='moon'?'Moonlight':'Hidden Garden'} plants</h3><p class="gm-caption">Water new plants three times to grow them. Mature plants can produce another blossom after resting. New seeds are earned by completing garden activities.</p><div class="gm-seedlist">${plants.map(p=>`<div class="gm-seedcard">${img(p.img)}<b>${esc(p.name)}</b><small>${esc(p.rarity)} · Seeds: ${local.seeds[p.id]||0}</small><button data-plant-seed="${p.id}" ${(local.seeds[p.id]||0)>0?'':'disabled'}>Plant seed</button></div>`).join('')}</div><h4>Growing beds</h4><div class="gm-grid">${beds.length?beds.map(p=>{const info=species[p.flowerId];const mature=p.stage>=3;const ready=mature&&now()-(p.lastHarvest||0)>=20000;return `<div class="gm-tile gm-plantbed">${img(info.img)}<b>${esc(info.name)}</b><small>${mature?'🌸 Fully grown · Blooming':`🌱 Growth ${p.stage}/3`}</small>${mature?`<button data-harvest="${p.id}" ${ready?'':'disabled'}>${ready?'Collect a blossom':'Resting…'}</button>`:`<button data-water-special="${p.id}" ${now()-(p.lastCare||0)>=1200?'':'disabled'}>💧 Water plant</button>`}</div>`}).join(''):'<p class="gm-caption">Your garden beds are empty. Plant a seed above.</p>'}</div></div>`;
 }
 function butterflyPage(){const n=found();const established=local.beds.filter(p=>p.stage>=3&&species[p.flowerId]?.zone==='butterfly').length;
  const ready=canButter();const items=butterflies.map(x=>{const rec=local.butterflies[x.id];return `<div class="gm-species ${rec?'gm-discovered':'gm-undiscovered'}">${img(x.img)}<b>${rec?esc(x.name):'Undiscovered'}</b><small>${rec?esc(x.rarity)+' · '+rec.sightings+' sighting(s)':'???'}</small>${rec?`<small>First seen ${new Date(rec.first).toLocaleDateString()}</small>`:''}</div>`}).join('');
  return `<h3>🦋 Butterfly Sanctuary ${ready?'· Unlocked':'· Locked'}</h3><p>Discover 20 individual butterflies, grow nectar plants, collect photographs and earn sanctuary rewards.</p><div class="gm-grid">${tile(grown()>=12,`Grow 12 flowers (${grown()}/12)`)}${tile(deliveries().total>=1,`Deliver 1 bouquet (${deliveries().total}/1)`)}${tile(n>=10,`Butterfly Emblem (${n}/10)`)}</div>
  ${ready?`<div class="gm-card"><h3>🦋 A butterfly is visiting!</h3><div id="gmEncounter">${encounter?encounterHTML():`<p class="gm-caption">Butterflies visit when you call them. Rare visitors become more likely around mature sanctuary plants.</p><button id="gmVisit">Look for butterflies</button>`}</div><p class="gm-caption">Found ${n}/20 butterflies · Mature nectar plants: ${established}</p><button id="gmPollinate">🌿 Pollinate one existing plant (daily)</button></div>${plantBeds('butterfly')}<h3>📸 Butterfly Album</h3><div class="gm-butterfly-album">${items}</div>`:'<p class="gm-warning">Both unlock requirements must be complete. Bouquet deliveries from either person count.</p>'}`;
 }
 function encounterHTML(){const x=butterflyIndex[encounter.id];return `<div class="gm-encounter">${img(x.img)}<div><b>${esc(x.name)}</b> <small>${esc(x.rarity)}</small><p class="gm-caption">Catch it when the moving marker enters the central golden zone.</p><div class="gm-timing"><div class="gm-target" style="width:${x.rarity==='Common'?38:x.rarity==='Rare'?26:x.rarity==='Epic'?18:12}%"></div><div class="gm-marker"></div></div><button id="gmCatch" class="gm-primary">🦋 Catch / photograph</button><button id="gmLeave">Let it fly</button></div></div>`}
 function moonPage(){const ready=canMoon(),f=Object.values(local.fireflies).reduce((s,x)=>s+x,0);const phaseNames=['New Moon','Waxing Crescent','First Quarter','Waxing Gibbous','Full Moon','Waning Gibbous','Last Quarter','Waning Crescent'];const phase=phaseNames[Math.floor(now()/86400000)%8];
  return `<h3>🌙 Moonlight Garden ${ready?'· Unlocked':'· Locked'}</h3><p>A permanent moonlit garden with glowing plants, firefly collecting and celestial puzzles. You do not need to log in after dark.</p><div class="gm-grid">${tile(grown()>=15,`Grow 15 flowers (${grown()}/15)`)}${tile(deliveries().fromLizzy>=3,`Lizzy sends 3 bouquets (${deliveries().fromLizzy}/3)`)}</div>
  ${ready?`<div class="gm-card gm-moon-scene"><h3>🌒 ${phase}</h3><div class="gm-statline"><span>✨ Stardust: ${local.stardust}</span><span>🪲 Fireflies caught: ${f}</span><span>🌠 Shooting stars: ${local.starsCaught}</span></div><div class="gm-two-actions"><button id="gmFirefly">🪲 Catch a firefly</button><button id="gmMeteor">🌠 Watch for shooting star</button></div><p class="gm-caption">New events appear after a short rest. Moon phases cycle automatically.</p></div><div class="gm-card"><h3>⭐ Constellation Puzzle</h3><p>Connect the symbols in their secret order: <b>Moon → Star → Butterfly</b>.</p><div class="gm-starline">${['Moon','Star','Butterfly'].map((n,i)=>`<button data-star="${n}" ${local.constellation?'disabled':''}>${['🌙','⭐','🦋'][i]} ${n}</button>`).join('')}</div><p>${local.constellation?'✅ Constellation solved! Silver Rose unlocked.':'Connected stars: '+local.constellationIndex+'/3'}</p></div>${plantBeds('moon')}<p class="gm-caption">Using Moonlight Garden flowers in a bouquet unlocks its glowing presentation. HQ can also send glowing bouquets.</p>`:'<p class="gm-warning">Grow flowers in your main garden and send three bouquets to Mikael to unlock this area.</p>'}`;
 }
 function giftCard(g){const opened=!!g.openedAt,info=catalog[g.itemId],name=info?.name||decorations[g.itemId]?.[0]||(g.kind==='letter'?'Secret Letter':'Surprise');return `<div class="gm-card gm-giftcard"><b>${opened?'💝 Discovered':'🎁 A hidden surprise'}</b>${opened?`${info?img(info.img):''}<p>${esc(name)}</p><p>${esc(g.message||'A thoughtful gift from Mikael')}</p>`:`<p>Something is waiting near the ${esc(giftPlaces[g.location]||'garden')}.</p><button data-open-gift="${esc(g.id)}">Unwrap gift</button>`}</div>`}
 function hiddenPage(){const d=deliveries();const steps=[['Butterfly Sanctuary',canButter()],['Moonlight Garden',canMoon()],['Grow 20 flowers',grown()>=20],['Complete 5 bouquet deliveries',d.total>=5],['At least 1 bouquet from Mikael',d.fromMikael>=1]];
  if(!hidden())return `<h3>🔐 The Hidden Garden</h3><p>A secret place for your memories, rare plants and surprises from Mikael.</p><div class="gm-grid">${steps.map(([l,b])=>tile(b,esc(l))).join('')}</div>${canHidden()?`<div class="gm-card"><h3>🌳 You've found the secret gate!</h3><p>The butterfly and moon symbols are etched into its lock.</p><button id="gmGate">${local.gateStep===0?'🦋 Turn the Butterfly Key':'🌙 Turn the Moon Key'}</button></div>`:'<p class="gm-caption">All five conditions must be complete before the secret gate can be opened by Lizzy.</p>'}`;
  const stage=treeStage(),gifts=(shared.surprises||[]).filter(x=>x.revealed),potted=local.potted,decor=local.decor;
  return `<h3>🌳 The Hidden Garden · Unlocked</h3><p>Mikael can leave real plants, seeds, decorations, letters and surprises from Test HQ.</p><div class="gm-memory-tree gm-card">${img(A+'tree/memoryTree'+stage+'.webp')}<div><h3>🌸 Memory Tree — Stage ${stage} of 4</h3><p>Its branches grow as bouquets and gifts are exchanged.</p><p class="gm-caption">${d.total} bouquet deliveries · ${gifts.filter(x=>x.openedAt).length} gifts discovered</p></div></div><div class="gm-card"><h3>⛲ Wishing Fountain</h3><p>Make one wish each day for Stardust or a rare seed.</p><button id="gmWish" ${local.lastWishDay===today()?'disabled':''}>${local.lastWishDay===today()?"Today's wish granted":"Make today's wish"}</button></div>
  ${plantBeds('hidden')}<h3>🎁 Gifts from Mikael</h3><div class="gm-gifts">${gifts.length?gifts.slice().reverse().map(giftCard).join(''):'<p>No gifts waiting yet. Mikael can prepare surprises through Test HQ.</p>'}</div><h3>🪴 Potted plants placed in your Hidden Garden</h3><div class="gm-seedlist">${potted.length?potted.map(p=>`<div class="gm-seedcard">${smallImg(p.flowerId)}<b>${esc(catalog[p.flowerId]?.name||p.flowerId)}</b><small>Gift from Mikael · ${esc(giftPlaces[p.location]||'Garden')}</small></div>`).join(''):'<p class="gm-caption">Potted plants Mikael sends will appear here when you unwrap them.</p>'}</div><h3>✨ Garden decorations</h3><div class="gm-statline">${decor.length?decor.map(p=>`<span>${decorations[p.id]?.[1]||'🌷'} ${esc(decorations[p.id]?.[0]||p.id)}</span>`).join(''):'<span>No decorations yet</span>'}</div>`;
 }
 function available(){const g=garden(),arr=[];for(const o of flowerOptions){const count=Number(species[o.id]?local.harvested[o.id]:g.flowers?.[o.id])||0;if(count>0)arr.push({...o,count})}return arr}
 function flowerSelection(){const valid=available();return `<div class="gm-flower-choices">${valid.length?valid.map(o=>`<button data-flower="${o.id}" class="${chosen.includes(o.id)?'gm-on':''}">${img(o.img)}<b>${esc(o.name)}</b><small>Available: ${o.count}</small></button>`).join(''):'<p>No harvested flowers available. Grow plants in your main garden or one of the special gardens.</p>'}</div>`}
 function bouquetCard(b){const isIn=b.to==='Lizzy',glow=b.glow===true||false;return `<div class="gm-card ${glow?'gm-glowing-bouquet':''}"><b>${isIn?'🎁 From Mikael':'💌 Sent to Mikael'} ${glow?'· ✨ Glowing':''}</b><div class="gm-gift-header">${(b.flowers||[]).map(smallImg).join('')}</div><p>${esc((b.flowers||[]).map(id=>catalog[id]?.name||id).join(', '))}</p><p class="gm-caption">${esc(b.wrapping||'')} · ${esc(b.ribbon||'')} · ${b.openedAt?'Opened':'Delivered'}</p><div class="gm-message">${esc(b.note||'A bouquet with love')}</div>${isIn&&!b.openedAt?`<button data-open-bouquet="${esc(b.id)}">${glow?'✨ Open glowing bouquet':'💐 Open bouquet'}</button>`:''}</div>`}
 function studioPage(){const gl=chosen.some(id=>glowIds.has(id));const c=deliveries();return `<h3>💐 Bouquet Studio</h3><p>Choose up to six harvested flowers, wrapping and a ribbon. Glowing bouquets require a moonlit flower. Mikael can send bouquets directly from HQ.</p><div class="gm-statline"><span>Sent: ${c.fromLizzy}</span><span>From Mikael: ${c.fromMikael}</span><span>Total deliveries: ${c.total}</span></div><div class="gm-card"><h3>🌷 Pick flowers</h3>${flowerSelection()}<p class="gm-caption">Selected: ${chosen.length}/6 · ${gl?'✨ Glowing bouquet available':'Choose a moonlit flower for glow'}</p><div class="gm-formgrid"><label>Wrapping<select id="gmWrapping" class="gm-select">${wrapOptions.map(x=>`<option ${x===wrapping?'selected':''}>${x}</option>`).join('')}</select></label><label>Ribbon<select id="gmRibbon" class="gm-select">${ribbonOptions.map(x=>`<option ${x===ribbon?'selected':''}>${x}</option>`).join('')}</select></label></div><label>Personal note<textarea id="gmNote" maxlength="300" class="gm-textarea" placeholder="Write Mikael a note…">${esc(note)}</textarea></label><label class="gm-check"><input id="gmGlow" type="checkbox" ${gl?'checked':''} ${gl?'':'disabled'}> ✨ Glowing bouquet</label><button id="gmSend" class="gm-primary" ${chosen.length&&!local.pendingDelivery?'':'disabled'}>💌 Send to Mikael</button>${local.pendingDelivery?'<div class="gm-warning">The previous delivery may have reached HQ. Retry the same reference to finish safely.</div><button id="gmRetry">↻ Retry / confirm previous delivery</button>':''}</div><h3>📖 Bouquet & Gift Memory Book</h3><div class="gm-letters">${shared.bouquets.length?shared.bouquets.slice().reverse().map(bouquetCard).join(''):'<p class="gm-caption">Your delivered bouquets will be kept here.</p>'}</div>`}
 function passportPage(){const c=deliveries(),photos=Object.values(local.butterflies).reduce((s,x)=>s+Number(x.photos||0),0),moon=local.beds.filter(p=>p.stage>=3&&species[p.flowerId]?.zone==='moon').length;
  return `<h3>📖 Garden Passport</h3><p>Your milestones across all four garden areas.</p><div class="gm-grid">${tile(canButter(),`Butterfly Sanctuary · 12 flowers + 1 bouquet`)}${tile(canMoon(),`Moonlight Garden · 15 flowers + 3 bouquets sent`)}${tile(hidden(),`Hidden Garden · 20 flowers + 5 deliveries, 1 from Mikael`)}</div><div class="gm-statline"><span>🌷 ${grown()} flowers grown</span><span>💌 ${c.total} deliveries</span><span>🦋 ${found()}/20 butterflies</span><span>📸 ${photos} photos</span><span>🌙 ${moon} moon plants</span><span>✨ ${local.stardust} Stardust</span></div>${bar(found(),20)}<p>Butterfly Emblem: ${found()>=10?'✅ Awarded':'🔒 10 unique species required'} · Moon Emblem: ${progress().moonEmblem?'✅ Awarded':'🔒 Three Moon flower varieties harvested and constellation solved'}</p><p class="gm-caption">Only flowers matured in the garden count. Potted HQ gift plants and trees do not increase the flower-grown total.</p>`}
 function render(){makeUI();scan();unlockSeeds();scene();const body=$('gmBody');if(!body)return;document.querySelectorAll('#gmHub [data-tab]').forEach(x=>x.classList.toggle('gm-on',x.dataset.tab===local.tab));const tabs={butterfly:butterflyPage,moon:moonPage,hidden:hiddenPage,studio:studioPage,passport:passportPage};body.innerHTML=(tabs[local.tab]||butterflyPage)();wire(body)}
 function growAllowed(zone){return zone==='butterfly'?canButter():zone==='moon'?canMoon():hidden()}
 function chooseVisitor(){const n=found(),mature=new Set(local.beds.filter(p=>p.stage>=3).map(p=>p.flowerId));
  const available=butterflies.filter(x=>x.rarity==='Common'||x.rarity==='Rare'&&(n>=3||mature.has('roseNectarFlower'))||x.rarity==='Epic'&&(n>=8||mature.has('emeraldPetalVine'))||x.rarity==='Legendary'&&n>=14);
  const weights={Common:17,Rare:9,Epic:5,Legendary:2};const bag=available.map(x=>({x,weight:weights[x.rarity]*(local.butterflies[x.id]?.sightings?0.3:3)*(x.id==='emeraldDancer'&&mature.has('emeraldPetalVine')?2:1)}));
  let r=Math.random()*bag.reduce((s,x)=>s+x.weight,0);for(const x of bag){r-=x.weight;if(r<=0)return x.x;}return bag[0]?.x;
 }
 function popupBouquet(b){$('gmOpenOverlay')?.remove();const el=document.createElement('div');el.id='gmOpenOverlay';el.className='gm-overlay';el.innerHTML=`<div class="gm-reveal ${b.glow?'gm-reveal-glow':''}"><button id="gmCloseReveal" aria-label="Close">✕</button><h2>${b.glow?'✨ A Moonlit Bouquet':'💐 A Bouquet for Lizzy'}</h2><div class="gm-reveal-flowers">${(b.flowers||[]).map(smallImg).join('')}</div><p>${esc(b.note||'With love from Mikael')}</p><small>${esc(b.wrapping||'')} · ${esc(b.ribbon||'')}</small></div>`;document.body.append(el);$('gmCloseReveal').onclick=()=>el.remove();el.addEventListener('click',e=>{if(e.target===el)el.remove()});}
 function wire(body){
  body.onchange=e=>{if(e.target.id==='gmWrapping')wrapping=e.target.value;if(e.target.id==='gmRibbon')ribbon=e.target.value};
  body.oninput=e=>{if(e.target.id==='gmNote')note=e.target.value};
  body.onclick=async e=>{
   const b=e.target.closest('button');if(!b||!body.contains(b))return;
   const key=(name)=>b.dataset[name];
   if(b.id==='gmVisit'){
    if(now()-local.lastArrival<4500){status('🦋 The butterflies need a few seconds before another visit.');return}
    const v=chooseVisitor();if(!v)return;encounter={id:v.id,started:now()};render();status('🦋 '+v.name+' is visiting. Time your catch!');return;
   }
   if(b.id==='gmLeave'){encounter=null;local.lastArrival=now();save();render();return}
   if(b.id==='gmCatch'){
    if(!encounter)return;const x=butterflyIndex[encounter.id];const delta=now()-encounter.started;const f=(delta%5200)/2600;const p=f>1?2-f:f;
    const width={Common:.38,Rare:.26,Epic:.18,Legendary:.12}[x.rarity]||.2;
    const hit=!!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||Math.abs(p-.5)<=width/2;
    if(hit){let rec=local.butterflies[x.id];if(!rec)rec={first:new Date().toISOString(),sightings:0,photos:0};rec.sightings++;rec.photos++;rec.last=new Date().toISOString();local.butterflies[x.id]=rec;status('📸 '+x.name+' photographed! '+found()+'/20 species discovered.');}
    else status('🦋 The butterfly fluttered away. Try again when another visits.');
    local.lastArrival=now();encounter=null;unlockSeeds();save();render();await sendProgress();return;
   }
   if(b.id==='gmPollinate'){
    if(local.lastPollinateDay===today())return status('The butterflies have already visited your plants today.');
    local.lastPollinateDay=today();const p=local.beds.find(x=>x.stage>=3&&species[x.flowerId]?.zone==='butterfly');
    if(p){local.harvested[p.flowerId]=(local.harvested[p.flowerId]||0)+1;status('🦋 Butterfly pollination produced an extra '+species[p.flowerId].name+' blossom!')}
    else{grantSeed('butterflyBloom');status('🦋 The butterflies left you an extra Butterfly Bloom seed!')}
    save();render();return;
   }
   if(key('plantSeed')){
    const id=b.dataset.plantSeed,p=species[id];if(!p||!growAllowed(p.zone)||!(local.seeds[id]>0))return;
    if(local.beds.filter(x=>species[x.flowerId]?.zone===p.zone).length>=18)return status('This garden has reached its 18-bed limit.');
    local.seeds[id]--;local.beds.push({id:uid(),flowerId:id,stage:0,lastCare:0,lastHarvest:0});save();render();status('🌱 '+p.name+' planted!');return;
   }
   if(key('waterSpecial')){
    const p=local.beds.find(x=>x.id===b.dataset.waterSpecial);if(!p||p.stage>=3)return;
    if(now()-(p.lastCare||0)<1200)return status('Give this plant a moment before watering again.');
    p.stage++;p.lastCare=now();
    if(p.stage===3){p.lastHarvest=now();local.harvested[p.flowerId]=(local.harvested[p.flowerId]||0)+1;scan();status('🌸 '+species[p.flowerId].name+' fully grown — one blossom collected!')}
    else status('💧 Growth '+p.stage+'/3. Your plant is getting stronger.');
    save();unlockSeeds();render();await sendProgress();return;
   }
   if(key('harvest')){
    const p=local.beds.find(x=>x.id===b.dataset.harvest);if(!p||p.stage<3||now()-(p.lastHarvest||0)<20000)return;
    p.lastHarvest=now();local.harvested[p.flowerId]=(local.harvested[p.flowerId]||0)+1;save();render();status('🌷 Another '+species[p.flowerId].name+' blossom harvested!');return;
   }
   if(b.id==='gmFirefly'){
    if(now()-local.lastFireflyAt<9000)return status('🌙 Give the fireflies a little time to return.');
    const colors=['Golden','Blue','Violet','Silver'],c=colors[Math.floor(Math.random()*colors.length)];local.fireflies[c]=(local.fireflies[c]||0)+1;local.lastFireflyAt=now();local.stardust+=Math.random()<.25?2:1;
    unlockSeeds();save();render();status('🪲 You collected a '+c+' firefly and Stardust!');await sendProgress();return;
   }
   if(b.id==='gmMeteor'){
    if(now()-local.lastStarAt<35000)return status('🌠 The shooting stars need time to return.');
    local.lastStarAt=now();local.starsCaught++;local.stardust+=3;unlockSeeds();save();render();status('🌠 Shooting star caught! +3 Stardust.');await sendProgress();return;
   }
   if(key('star')){
    if(local.constellation)return;const seq=['Moon','Star','Butterfly'];if(b.dataset.star===seq[local.constellationIndex]){
     local.constellationIndex++;
     if(local.constellationIndex===3){local.constellation=true;status('⭐ The constellation is complete! A Silver Rose seed is now yours.');unlockSeeds();}
     else status('⭐ Correct star! '+local.constellationIndex+'/3 connected.');
    }else{local.constellationIndex=0;status('The stars scattered — connect Moon, then Star, then Butterfly.');}
    save();render();await sendProgress();return;
   }
   if(b.id==='gmGate'){
    if(!canHidden())return;if(local.gateStep===0){local.gateStep=1;save();render();status('🦋 The butterfly key turned. One more symbol…');return}
    local.hiddenUnlocked=true;local.gateStep=0;save();await sendProgress();await refresh(true);render();status('🌳 The Hidden Garden has been discovered!');return;
   }
   if(b.id==='gmWish'){
    if(!hidden()||local.lastWishDay===today())return;
    local.lastWishDay=today();if(Math.random()<.6){local.stardust+=3;status('⛲ Your wish brought 3 Stardust!')}
    else{const ids=['secretRose','wishingLily','memoryVine'];const id=ids[Math.floor(Math.random()*ids.length)];grantSeed(id);status('⛲ Your wish brought a '+species[id].name+' seed!')}
    save();render();await sendProgress();return;
   }
   if(key('openGift')){
    b.disabled=true;try{const r=await api('garden_test_collect_surprise',{id:b.dataset.openGift});shared.surprises=shared.surprises.map(x=>x.id===r.item.id?r.item:x);
     const awarded=grantGift(r.item);render();status(awarded?'🎁 Gift opened and added to your Hidden Garden!':'🎁 Gift opened.');await sendProgress();
    }catch(e){status('⚠️ '+e.message);b.disabled=false}return;
   }
   if(key('flower')){
    wrapping=$('gmWrapping')?.value||wrapping;ribbon=$('gmRibbon')?.value||ribbon;note=$('gmNote')?.value||note;
    const id=b.dataset.flower;if(chosen.includes(id))chosen=chosen.filter(x=>x!==id);
    else if(chosen.length<6&&available().some(x=>x.id===id))chosen.push(id);
    render();return;
   }
   if(b.id==='gmRetry'){
    b.disabled=true;try{await retryDelivery();render();status('💌 Delivery confirmed and inventory reconciled.')}catch(err){status('⚠️ '+err.message);b.disabled=false}return;
   }
   if(b.id==='gmSend'){
    if(local.pendingDelivery||!chosen.length)return;
    wrapping=$('gmWrapping')?.value||wrapping;ribbon=$('gmRibbon')?.value||ribbon;note=$('gmNote')?.value||note;
    const own=available();if(chosen.some(id=>!own.some(x=>x.id===id)))return status('One of the selected flowers is no longer available.');
    const glow=Boolean($('gmGlow')?.checked)&&chosen.some(id=>glowIds.has(id));
    const tx={clientTx:uid(),flowers:[...chosen],wrapping,ribbon,note,glow};local.pendingDelivery=tx;save();b.disabled=true;
    try{await retryDelivery();render();status('💌 '+(glow?'Glowing bouquet':'Bouquet')+' delivered to Mikael in Test HQ!')}
    catch(err){render();status('⚠️ Delivery confirmation uncertain. Use Retry to check safely: '+err.message)}return;
   }
   if(key('openBouquet')){
    b.disabled=true;try{const r=await api('garden_test_open',{id:b.dataset.openBouquet});shared.bouquets=shared.bouquets.map(x=>x.id===r.item.id?r.item:x);
     render();popupBouquet(r.item);status('🎁 Bouquet opened and saved in your Memory Book!')}
    catch(err){b.disabled=false;status('⚠️ '+err.message)}return;
   }
  };
 }
 function init(){if(!document.querySelector('#lizzyGardenWindow .gardenApp'))return;
  makeUI();scan();unlockSeeds();save();render();
  $('lizzyGardenIcon')?.addEventListener('click',()=>{render();refresh(true)});
  window.addEventListener('lizzyGardenUpdated',()=>{if(scan()){render();sendProgress()}});
  window.addEventListener('storage',e=>{if(e.key===GARDEN){if(scan()){render();sendProgress()}}});
  // Refresh disabled watering/harvesting controls without disturbing notes or catching animations.
  setInterval(()=>{if(document.hidden)return;const body=$('gmBody');if(!body)return;
   body.querySelectorAll('[data-water-special]').forEach(b=>{const p=local.beds.find(x=>x.id===b.dataset.waterSpecial);if(p)b.disabled=p.stage>=3||now()-(p.lastCare||0)<1200;});
   body.querySelectorAll('[data-harvest]').forEach(b=>{const p=local.beds.find(x=>x.id===b.dataset.harvest);if(p){b.disabled=p.stage<3||now()-(p.lastHarvest||0)<20000;b.textContent=b.disabled?'Resting…':'Collect a blossom';}});
  },750);
  setInterval(()=>{const open=!$('lizzyGardenWindow')?.classList.contains('hidden')&&!document.hidden;if(!open)return;
   const change=scan();if(change){unlockSeeds();render();sendProgress()}refresh(false);
   if(local.tab==='butterfly'&&encounter&&$('gmCatch')){} else if(local.tab==='butterfly'&&now()-local.lastArrival>4500&&$('gmVisit')?.disabled){$('gmVisit').disabled=false;}
  },7000);
  refresh(true);sendProgress();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

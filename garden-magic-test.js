/* GARDEN MAGIC v2.2 + Harvest & Florist — TESTR only. Works with original garden's Harvest API. */
(()=>{'use strict';
 const $=id=>document.getElementById(id);
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const OLD='lizzyGardenMagicTESTv1',KEY='lizzyGardenMagicTESTv2',GARDEN='lizzyGardenV1',URLKEY='lizzyos_test_worker_url_v1';
 const A='assets/garden-magic/';
 const catalog={"tulip":{"name":"Tulip","img":"assets/flowers/tulip.png","type":"flower","rarity":"Common"},"redRose":{"name":"Red Rose","img":"assets/flowers/redRose.png","type":"flower","rarity":"Common"},"pinkRose":{"name":"Pink Rose","img":"assets/flowers/pinkRose.png","type":"flower","rarity":"Uncommon"},"whiteRose":{"name":"White Rose","img":"assets/flowers/whiteRose.png","type":"flower","rarity":"Uncommon"},"lilyValley":{"name":"Lily of the Valley","img":"assets/flowers/lilyValley.png","type":"flower","rarity":"Rare"},"cryingLily":{"name":"Crying Lily","img":"assets/flowers/cryingLily.png","type":"flower","rarity":"Rare"},"snapdragon":{"name":"Snapdragon","img":"assets/flowers/snapdragon.png","type":"flower","rarity":"Uncommon"},"sunflower":{"name":"Sunflower","img":"assets/flowers/sunflower.png","type":"flower","rarity":"Common"},"daisy":{"name":"Daisy","img":"assets/flowers/daisy.png","type":"flower","rarity":"Common"},"lavender":{"name":"Lavender","img":"assets/flowers/lavender.png","type":"flower","rarity":"Uncommon"},"orchid":{"name":"Orchid","img":"assets/flowers/orchid.png","type":"flower","rarity":"Rare"},"peony":{"name":"Peony","img":"assets/flowers/peony.png","type":"flower","rarity":"Rare"},"hydrangea":{"name":"Hydrangea","img":"assets/flowers/hydrangea.png","type":"flower","rarity":"Uncommon"},"carnation":{"name":"Carnation","img":"assets/flowers/carnation.png","type":"flower","rarity":"Common"},"daffodil":{"name":"Daffodil","img":"assets/flowers/daffodil.png","type":"flower","rarity":"Common"},"iris":{"name":"Iris","img":"assets/flowers/iris.png","type":"flower","rarity":"Rare"},"chrysanthemum":{"name":"Chrysanthemum","img":"assets/flowers/chrysanthemum.png","type":"flower","rarity":"Uncommon"},"poppy":{"name":"Poppy","img":"assets/flowers/poppy.png","type":"flower","rarity":"Common"},"forgetMeNot":{"name":"Forget-Me-Not","img":"assets/flowers/forgetMeNot.png","type":"flower","rarity":"Rare"},"hibiscus":{"name":"Hibiscus","img":"assets/flowers/hibiscus.png","type":"flower","rarity":"Uncommon"},"mysteryBloom":{"name":"Mystery Blossom","img":"assets/flowers/mysteryBloom.png","type":"flower","rarity":"Secret"},"moonflower":{"name":"Moonflower","img":"assets/flowers/moonflower.png","type":"flower","rarity":"Legendary"},"starBloom":{"name":"Star Bloom","img":"assets/flowers/starBloom.png","type":"flower","rarity":"Legendary"},"gardenCrown":{"name":"Garden Crown","img":"assets/flowers/gardenCrown.png","type":"flower","rarity":"Legendary"},"bananaTree":{"name":"Suspicious Banana Tree","img":"assets/flowers/bananaTree.png","type":"tree","rarity":"Secret"},"jacaranda":{"name":"Jacaranda Tree","img":"assets/flowers/jacaranda.png","type":"tree","rarity":"Uncommon"},"willow":{"name":"Willow Tree","img":"assets/flowers/willow.png","type":"tree","rarity":"Rare"},"cherryTree":{"name":"Cherry Blossom Tree","img":"assets/flowers/cherryTree.png","type":"tree","rarity":"Rare"},"lemonTree":{"name":"Lemon Tree","img":"assets/flowers/lemonTree.png","type":"tree","rarity":"Uncommon"},"pinkDogwood":{"name":"Pink Dogwood Tree","img":"assets/flowers/pinkDogwood.png","type":"tree","rarity":"Uncommon"},"bottlebrush":{"name":"Bottlebrush Tree","img":"assets/flowers/bottlebrush.png","type":"tree","rarity":"Rare"},"silkTree":{"name":"Persian Silk Tree","img":"assets/flowers/silkTree.png","type":"tree","rarity":"Rare"},"japaneseMaple":{"name":"Japanese Maple","img":"assets/flowers/japaneseMaple.png","type":"tree","rarity":"Epic"},"saucerMagnolia":{"name":"Saucer Magnolia","img":"assets/flowers/saucerMagnolia.png","type":"tree","rarity":"Legendary"},"protea":{"name":"Protea","img":"assets/flowers/protea.png","type":"flower","rarity":"Rare"},"zinnia":{"name":"Zinnia","img":"assets/flowers/zinnia.png","type":"flower","rarity":"Uncommon"},"camellia":{"name":"Camellia","img":"assets/flowers/camellia.png","type":"flower","rarity":"Uncommon"},"marigold":{"name":"Marigold","img":"assets/flowers/marigold.png","type":"flower","rarity":"Common"},"babysBreath":{"name":"Baby's Breath","img":"assets/flowers/babysBreath.png","type":"flower","rarity":"Common"},"ranunculus":{"name":"Ranunculus","img":"assets/flowers/ranunculus.png","type":"flower","rarity":"Rare"},"blueRose":{"name":"Blue Rose","img":"assets/flowers/blueRose.png","type":"flower","rarity":"Legendary"},"weepingCherry":{"name":"Weeping Cherry Tree","img":"assets/flowers/weepingCherry.png","type":"tree","rarity":"Rare"},"redwood":{"name":"Redwood Tree","img":"assets/flowers/redwood.png","type":"tree","rarity":"Epic"},"baobab":{"name":"Baobab Tree","img":"assets/flowers/baobab.png","type":"tree","rarity":"Epic"},"wisteriaArch":{"name":"Wisteria Arch","img":"assets/flowers/wisteriaArch.png","type":"tree","rarity":"Legendary"},"cacaoTree":{"name":"Cacao Tree","img":"assets/flowers/cacaoTree.png","type":"tree","rarity":"Epic"}};
 // Flowering trees produce bouquet-ready cut blossoms with their OWN parent tree photograph.
 const treeFlowers=[
  ['jacarandaBlossom','Jacaranda Blossoms','jacaranda'],['cherryTreeBlossom','Cherry Blossoms','cherryTree'],
  ['pinkDogwoodBlossom','Dogwood Blossoms','pinkDogwood'],['bottlebrushBlossom','Bottlebrush Blooms','bottlebrush'],
  ['silkTreeBlossom','Silk Tree Blossoms','silkTree'],['saucerMagnoliaBlossom','Magnolia Blossoms','saucerMagnolia'],
  ['weepingCherryBlossom','Weeping Cherry Blossoms','weepingCherry'],['wisteriaBlossom','Wisteria Blossoms','wisteriaArch']
 ];
 for(const [id,name,parent] of treeFlowers)catalog[id]={name,img:catalog[parent].img,type:'flower',rarity:catalog[parent].rarity};
 const BLOOM_COOLDOWN_MS=72*60*60*1000;
 const timeLeft=(ms)=>{const h=Math.ceil(ms/3600000);return h>=24?Math.floor(h/24)+'d '+h%24+'h':Math.max(1,h)+'h'};
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
 milestones:[],lastArrival:0,lastPollinateDay:'',lastFireflyAt:0,fireflies:{},stardust:0,nectar:0,lastStarAt:0,starsCaught:0,
 wishChoice:'stardust',wishHistory:[],constellationMistakes:0,constellationLockUntil:0,constellationHint:'',
 constellationIndex:0,constellation:false,gateStep:0,hiddenUnlocked:false,lastWishDay:'',lastSync:'',pendingDelivery:null,
 light:'auto',lastGallery:'',unlockedSeeds:[],legacyMigrated:false,appliedDeliveryIds:[]});
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
 local.appliedDeliveryIds=Array.isArray(local.appliedDeliveryIds)?local.appliedDeliveryIds:[];
 local.nectar=Math.max(0,Number(local.nectar)||0);
 local.wishHistory=Array.isArray(local.wishHistory)?local.wishHistory:[];
 local.wishChoice=['stardust','seed','decor'].includes(local.wishChoice)?local.wishChoice:'stardust';
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(local))}catch(e){status('Local storage is full. Garden changes may not save.')}};
 let shared={bouquets:[],surprises:[],progress:{},deliveries:{total:0,fromMikael:0,fromLizzy:0}};
 let connected=false,lastFetched=0,isFetching=false,sendingProgress=false;
 let chosen=[],wrapping=wrapOptions[0],ribbon=ribbonOptions[0],note='',glowEnabled=true,encounter=null,fireflyEncounter=null,meteorEncounter=null,arrivalTimer=0;
 const status=t=>{const e=$('gmStatus');if(e)e.textContent=t};
 const garden=()=>read(GARDEN,{plants:[],flowers:{}});
 const worker=()=>{const v=String(localStorage.getItem(URLKEY)||window.LIZZY_TELEGRAM_WORKER_URL||'').trim();return v?v.replace(/\/+$/,'')+'/':''};
 const now=()=>Date.now(),today=()=>{const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Johannesburg',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(p=>[p.type,p.value]));return parts.year+'-'+parts.month+'-'+parts.day},uid=()=>('gm_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,11));
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
 fireflies:Object.values(local.fireflies).reduce((a,b)=>a+Number(b),0),stardust:local.stardust,walletStardust:balance('stardust'),walletNectar:balance('nectar'),lastWish:(local.wishHistory||[])[0]||null,moonFlowers:local.beds.filter(x=>x.stage>=3&&species[x.flowerId]?.zone==='moon').length,memoryTreeStage:treeStage()});
 // TEST-only game economy: Nectar is earned in the Sanctuary, Stardust in Moonlight.
 const nectarPrices={butterflyBloom:4,roseNectarFlower:12,emeraldPetalVine:25};
 const stardustPrices={lunarLavender:4,midnightTulip:7,moonlightOrchid:12,starLily:16,silverRose:27,celestialBlossom:52,secretRose:9,memoryVine:21,wishingLily:18,eternalBlossom:58};
 const decorPrices={moonLantern:12,gardenBench:18,starPlanter:16,topiary:22,miniFountain:30};
 const priceOf=id=>id in nectarPrices?{currency:'nectar',cost:nectarPrices[id]}:id in stardustPrices?{currency:'stardust',cost:stardustPrices[id]}:null;
 const currencyName=kind=>kind==='nectar'?'🍯 Nectar':'✨ Stardust';
 const balance=kind=>Math.max(0,Number(local[kind])||0);
 function spend(kind,cost){if(balance(kind)<cost)return false;local[kind]=balance(kind)-cost;return true;}
 function purchaseSeed(id){const p=species[id],price=priceOf(id);if(!p||!price||!growAllowed(p.zone))return 'That seed is not available yet.';
  if(!spend(price.currency,price.cost))return 'Not enough '+currencyName(price.currency)+'. Earn more through sanctuary or moonlit activities.';
  grantSeed(id);save();return '🌱 Bought 1 '+p.name+' seed for '+price.cost+' '+currencyName(price.currency)+'.';}
 function purchaseDecor(id){const cost=decorPrices[id];if(!hidden()||!cost)return 'That decoration is not available.';
  if(!spend('stardust',cost))return 'Not enough Stardust. Catch fireflies and shooting stars in Moonlight Garden.';
  local.decor.push({id,source:'hidden-shop',giftId:uid()});save();return '🏡 Bought '+decorations[id][0]+' for '+cost+' Stardust. It is now in your decorations.';}
 // This triangle-wave position matches the alternate CSS sweep period in the challenge card.
 function cursorPosition(start,period){const half=period/2,cycle=Math.max(0,now()-start)%period;return cycle<half?cycle/half:2-cycle/half;}
 function timingGame(width,period,label){return `<div class="gm-timing" aria-label="${esc(label)}: stop the moving marker inside the golden zone"><div class="gm-target" style="width:${Math.round(width*100)}%"></div><div class="gm-marker" style="animation-duration:${period/2}ms"></div></div>`;}
 function timingHit(start,period,width){if(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches)return true;return Math.abs(cursorPosition(start,period)-.5)<=width/2;}
 const fireflyStats={Golden:{width:.22,period:2100,hits:2,reward:3},Blue:{width:.17,period:1740,hits:2,reward:4},Violet:{width:.13,period:1480,hits:3,reward:5},Silver:{width:.11,period:1250,hits:3,reward:7}};
 const constellationPath=['Moon','Owl','Comet','Star','Butterfly','Sun'];
 const constellationNodes=[['Star','⭐'],['Cloud','☁️'],['Sun','☀️'],['Butterfly','🦋'],['Moon','🌙'],['Crown','👑'],['Comet','☄️'],['Owl','🦉']];
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
 function applyDelivery(item){
  const p=local.pendingDelivery;
  if(!p||item.clientTx!==p.clientTx)return false;
  if(local.appliedDeliveryIds.includes(item.clientTx)){local.pendingDelivery=null;chosen=[];note='';save();return true}
  // Check quantities before making either part of the inventory deduction.
  const normal=[],neededSpecial={};
  for(const id of p.flowers){if(species[id])neededSpecial[id]=(neededSpecial[id]||0)+1;else normal.push(id)}
  if(Object.entries(neededSpecial).some(([id,n])=>Number(local.harvested[id]||0)<n)){
    status('⚠️ Bouquet was delivered but a special flower balance changed. Keep this receipt and check inventory.');return false;
  }
  const neededNormal={};for(const id of normal)neededNormal[id]=(neededNormal[id]||0)+1;
  const g=garden();
  if(Object.entries(neededNormal).some(([id,n])=>Number(g.flowers?.[id]||0)<n&&!g.bouquetTx?.includes(item.clientTx))){
    status('⚠️ Bouquet was delivered but main-garden flower stock is insufficient.');return false;
  }
  // Main garden records the transaction ID in the SAME save as its deduction.
  if(normal.length&&!window.LizzyGarden?.consumeFlowers?.(normal,item.clientTx))return false;
  for(const [id,n] of Object.entries(neededSpecial))local.harvested[id]-=n;
  local.appliedDeliveryIds.push(item.clientTx);
  local.appliedDeliveryIds=local.appliedDeliveryIds.slice(-150);
  local.pendingDelivery=null;chosen=[];note='';save();return true;
 }
 function reconcileDelivery(){const p=local.pendingDelivery;if(!p)return;const item=shared.bouquets.find(b=>b.clientTx===p.clientTx&&b.from==='Lizzy');if(item&&applyDelivery(item))status('💌 Previous bouquet delivery recovered; flowers deducted once.');}
 async function retryDelivery(){const p=local.pendingDelivery;if(!p)return;
  const res=await api('garden_test_send',{from:'Lizzy',...p});
  if(!shared.bouquets.some(x=>x.id===res.item.id))shared.bouquets.push(res.item);
  shared.deliveries={...deliveries(),total:deliveries().total+(res.duplicate?0:1),fromLizzy:deliveries().fromLizzy+(res.duplicate?0:1)};
  if(!applyDelivery(res.item))throw Error('Delivery saved, but inventory must be reconciled. Use Retry / Confirm.');
  await sendProgress();return res;
 }
 async function sendProgress(){if(!worker()||sendingProgress)return;scan();unlockSeeds();const p=progress(),s=JSON.stringify(p);if(local.lastSync===s)return;
 sendingProgress=true;try{const d=await api('garden_test_progress',{progress:p});mergeShared(d);local.lastSync=s;save()}catch(e){status('⚠️ Test sync: '+e.message)}finally{sendingProgress=false}}
 async function refresh(force=false){if(isFetching||!worker()||(!force&&now()-lastFetched<38000))return;
  isFetching=true;try{const d=await api('garden_test_state');mergeShared(d);lastFetched=now();scan();unlockSeeds();status('🟢 Connected to TEST HQ');render();await sendProgress();}catch(e){connected=false;status('⚠️ '+e.message)}finally{isFetching=false}}
 const img=(s,extra='')=>`<img loading="lazy" src="${esc(s)}" alt="" ${extra}>`;
 const smallImg=id=>catalog[id]?img(catalog[id].img):'';
 const bar=(v,max)=>`<div class="gm-progress"><i style="width:${Math.min(100,Math.floor(v/max*100))}%"></i></div>`;
 const tile=(ok,label)=>`<div class="gm-tile"><b>${ok?'✅':'🔒'} ${label}</b></div>`;
 function makeUI(){if($('gmHub'))return;const a=document.querySelector('#lizzyGardenWindow .gardenApp');if(!a)return;
  const el=document.createElement('section');el.className='gm-hub';el.id='gmHub';el.innerHTML=`<div class="gm-head"><div><small>GARDEN MAGIC · TEST V2</small><h3>🦋 Lizzy's Special Gardens</h3><p class="gm-caption">Original garden, layouts, real photos and your existing game features remain untouched.</p></div><button id="gmLight">🌙 Preview Moonlight</button></div><div class="gm-tabs"><button data-tab="butterfly">🦋 Sanctuary</button><button data-tab="moon">🌙 Moonlight</button><button data-tab="hidden">🔐 Hidden Garden</button><button data-tab="studio">💐 Bouquets</button><button data-tab="storage">✂️ Flower Storage</button><button data-tab="passport">📖 Passport</button></div><div id="gmStatus" class="gm-caption">TEST Worker connection not yet verified</div><div id="gmBody" class="gm-pane"></div>`;
  const anchor=a.querySelector('#gardenMikaelComment');if(anchor)anchor.before(el);else a.append(el);
  el.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{local.tab=b.dataset.tab;save();render();refresh()}));
  $('gmLight').onclick=()=>{local.light=local.light==='auto'?'night':local.light==='night'?'day':'auto';save();scene();};
 }
 function scene(){const night=local.light==='night'||local.light==='auto'&&Math.floor(now()/90000)%2===1;document.querySelector('#lizzyGardenWindow')?.classList.toggle('gm-evening',night);if($('gmLight'))$('gmLight').textContent=night?'☀️ Preview Daylight':'🌙 Preview Moonlight'}
 function plantBeds(zone){const plants=special.filter(p=>p.zone===zone),beds=local.beds.filter(p=>species[p.flowerId]?.zone===zone);
  const isButterfly=zone==='butterfly',kind=isButterfly?'nectar':'stardust';
  const earning=isButterfly?'Catch butterflies (more Nectar for rarer species), or use the daily Pollinate action. Starter seeds and milestone seeds are free.':'Catch fireflies, successfully tap shooting stars, solve constellations, receive gifts from HQ, or make a wish at the fountain.';
  const cards=plants.map(p=>{const price=priceOf(p.id),afford=price&&balance(price.currency)>=price.cost;return `<div class="gm-seedcard">${img(p.img)}<b>${esc(p.name)}</b><small>${esc(p.rarity)} · Owned seeds: ${local.seeds[p.id]||0}</small><button data-plant-seed="${p.id}" ${(local.seeds[p.id]||0)>0?'':'disabled'}>🌱 Plant owned seed</button>${price?`<button data-buy-seed="${p.id}" ${afford?'':'disabled'}>Buy seed · ${price.cost} ${currencyName(price.currency)}</button>`:''}</div>`}).join('');
  return `<div class="gm-card"><div class="gm-shop-heading"><div><h3>🌱 ${isButterfly?'Sanctuary':zone==='moon'?'Moonlight':'Hidden Garden'} Seed Shop & Growing Beds</h3><p class="gm-caption">Seeds can be bought, earned through milestones and wishes, or gifted by Mikael through Test HQ.</p></div><strong class="gm-wallet">${currencyName(kind)}: ${balance(kind)}</strong></div><p class="gm-caption">${earning}</p><p class="gm-caption">Water a new plant three times to mature it, then manually harvest a blossom. Each mature plant can be harvested once every 72 hours. It stays in its growing bed.</p><div class="gm-seedlist">${cards}</div><h4>Growing beds · ${beds.length}/18</h4><div class="gm-grid">${beds.length?beds.map(p=>{const info=species[p.flowerId];const mature=p.stage>=3;const remaining=Math.max(0,BLOOM_COOLDOWN_MS-(now()-(p.lastHarvest||0))),ready=mature&&(!p.lastHarvest||!remaining);return `<div class="gm-tile gm-plantbed">${img(info.img)}<b>${esc(info.name)}</b><small>${mature?'🌸 Fully grown · Blooming':`🌱 Growth ${p.stage}/3`}</small>${mature?`<button data-harvest="${p.id}" ${ready?'':'disabled'}>${ready?'✂️ Harvest blossom':'🌱 '+timeLeft(remaining)+' remaining'}</button>`:`<button data-water-special="${p.id}" ${now()-(p.lastCare||0)>=1200?'':'disabled'}>💧 Water plant</button>`}<button class="gm-uproot" data-uproot="${p.id}">Remove plant · free bed</button></div>`}).join(''):'<p class="gm-caption">Your garden beds are empty. Plant a seed above.</p>'}</div></div>`;
 }
 function butterflyPage(){const n=found();const established=local.beds.filter(p=>p.stage>=3&&species[p.flowerId]?.zone==='butterfly').length;
  const ready=canButter();const items=butterflies.map(x=>{const rec=local.butterflies[x.id];return `<div class="gm-species ${rec?'gm-discovered':'gm-undiscovered'}">${img(x.img)}<b>${rec?esc(x.name):'Undiscovered'}</b><small>${rec?esc(x.rarity)+' · '+rec.sightings+' sighting(s)':'???'}</small>${rec?`<small>First seen ${new Date(rec.first).toLocaleDateString()}</small>`:''}</div>`}).join('');
  return `<h3>🦋 Butterfly Sanctuary ${ready?'· Unlocked':'· Locked'}</h3><p>Discover 20 butterfly species. Catching now requires precision and consecutive successful taps; rarer butterflies move faster and need more perfect hits.</p><div class="gm-grid">${tile(grown()>=12,`Grow 12 flowers (${grown()}/12)`)}${tile(deliveries().total>=1,`Deliver 1 bouquet (${deliveries().total}/1)`)}${tile(n>=10,`Butterfly Emblem (${n}/10)`)}</div>
  ${ready?`<div class="gm-card"><div class="gm-shop-heading"><h3>🦋 Butterfly-catching challenge</h3><strong class="gm-wallet">🍯 Nectar: ${balance('nectar')}</strong></div><div id="gmEncounter">${encounter?encounterHTML():`<p class="gm-caption">Watch the timing bar. Common butterflies need one hit; Rare need two; Epic and Legendary need three. A miss lets the butterfly escape.</p><button id="gmVisit" ${now()-local.lastArrival<4500?'disabled':''}>Search for butterflies</button>`}</div><p class="gm-caption">Discovered ${n}/20 · Mature nectar plants ${established} · Catching butterflies awards Nectar to buy more sanctuary seeds.</p><button id="gmPollinate" ${local.lastPollinateDay===today()?'disabled':''}>🌿 Daily pollination · +3 Nectar and a plant bonus</button></div>${plantBeds('butterfly')}<h3>📸 Butterfly Album</h3><div class="gm-butterfly-album">${items}</div>`:'<p class="gm-warning">Grow 12 flowers and deliver one bouquet (from either person) first.</p>'}`;
 }
 function encounterHTML(){const x=butterflyIndex[encounter.id];const hits={Common:1,Rare:2,Epic:3,Legendary:3}[x.rarity]||2;
  const widths={Common:.26,Rare:.18,Epic:.13,Legendary:.095},periods={Common:3900,Rare:3000,Epic:2300,Legendary:1850};
  return `<div class="gm-encounter">${img(x.img)}<div><b>${esc(x.name)}</b> <small>${esc(x.rarity)}</small><p class="gm-caption">Precise catches: ${encounter.hits||0}/${hits}. Hit the narrow golden zone ${hits} time(s) without missing.</p>${timingGame(widths[x.rarity],periods[x.rarity],'Butterfly catch')}<button id="gmCatch" class="gm-primary">🦋 Time your catch</button><button id="gmLeave">Let it fly</button></div></div>`;
 }
 function moonPage(){const ready=canMoon(),f=Object.values(local.fireflies).reduce((s,x)=>s+x,0);const phaseNames=['New Moon','Waxing Crescent','First Quarter','Waxing Gibbous','Full Moon','Waning Gibbous','Last Quarter','Waning Crescent'];const phase=phaseNames[Math.floor(now()/86400000)%8];
  const ff=fireflyEncounter,fc=ff&&fireflyStats[ff.color],met=meteorEncounter;
  const fireflyArea=ff?`<div class="gm-challenge"><h4>🪲 ${esc(ff.color)} Firefly</h4><p class="gm-caption">Catch ${ff.hits||0}/${fc.hits} flashes before it vanishes. Time your tap in the narrow glowing zone. One miss and it escapes.</p>${timingGame(fc.width,fc.period,'Firefly catch')}<button id="gmCatchFirefly" class="gm-primary">🪲 Catch flash</button><button id="gmCancelFirefly">Let it fly</button></div>`:`<button id="gmFirefly" ${now()-local.lastFireflyAt<8500?'disabled':''}>🪲 Search for a firefly</button>`;
  const meteorArea=met?`<div class="gm-challenge"><h4>🌠 A shooting star!</h4><p class="gm-caption">You have ${Math.ceil((met.expires-now())/1000)>0?Math.ceil((met.expires-now())/1000):0} seconds to stop the fast marker inside the tiny golden zone. Miss or run out of time and the star disappears.</p>${timingGame(.105,1420,'Shooting star catch')}<button id="gmCatchMeteor" class="gm-primary">🌠 Catch the shooting star!</button></div>`:`<button id="gmMeteor" ${now()-local.lastStarAt<12000?'disabled':''}>🌠 Watch for a shooting star</button>`;
  const puzzleButtons=constellationNodes.map(([id,emoji])=>`<button data-star="${id}" ${local.constellation||now()<Number(local.constellationLockUntil||0)?'disabled':''}>${emoji} ${id}</button>`).join('');
  const puzzleStatus=local.constellation?'✅ Constellation solved! A free Silver Rose seed and 12 Stardust earned.':`Connected ${local.constellationIndex||0}/6 · Mistakes ${(local.constellationMistakes||0)}/3 ${now()<Number(local.constellationLockUntil||0)?'· Stars realigning; try again shortly.':''}`;
  return `<h3>🌙 Moonlight Garden ${ready?'· Unlocked':'· Locked'}</h3><p>Grow unique moonlit flowers and master three skill-based challenges. You don't need to log in at night.</p><div class="gm-grid">${tile(grown()>=15,`Grow 15 flowers (${grown()}/15)`)}${tile(deliveries().fromLizzy>=3,`Lizzy sends 3 bouquets (${deliveries().fromLizzy}/3)`)}</div>
  ${ready?`<div class="gm-card gm-moon-scene"><h3>🌒 ${phase}</h3><div class="gm-statline"><span>✨ Stardust: ${balance('stardust')}</span><span>🪲 Fireflies: ${f}</span><span>🌠 Stars caught: ${local.starsCaught}</span></div><p class="gm-caption">You earn Stardust only after a successful catch. Use it to buy Moonlight and Hidden Garden seeds and decorations.</p><div class="gm-challenge-grid">${fireflyArea}${meteorArea}</div><p class="gm-caption">Firefly misses have a short retry pause. Shooting stars are fast, time-limited and less forgiving.</p></div><div class="gm-card"><h3>⭐ Constellation Puzzle — The Night's Secret</h3><p>Trace a <b>six-symbol path</b> through eight symbols; two are decoys. The clues do not reveal the answer directly. Three wrong selections make the stars realign for 15 seconds.</p><div class="gm-clue"><b>The astronomer's clue</b><p>Begin with the night's silver guardian. A watchful creature sees what others cannot. Follow the traveler with a blazing tail toward a fixed point of light. Wings carry the last message to the rising day.</p></div><div class="gm-starline">${puzzleButtons}</div><p>${puzzleStatus}</p>${local.constellationHint&&!local.constellation?`<p class="gm-hint">💡 ${esc(local.constellationHint)}</p>`:''}${!local.constellation?`<button id="gmHint" ${balance('stardust')>=2&&now()>=Number(local.constellationLockUntil||0)?'':'disabled'}>💡 Reveal next symbol · 2 Stardust</button>`:''}</div>${plantBeds('moon')}<p class="gm-caption">Moonflower bouquets glow when you include an eligible moonlit blossom. HQ can also send glowing bouquets.</p>`:'<p class="gm-warning">Grow 15 flowers and send 3 bouquets to Mikael to unlock the Moonlight Garden.</p>'}`;
 }
 function giftCard(g){const opened=!!g.openedAt,info=catalog[g.itemId],name=info?.name||decorations[g.itemId]?.[0]||(g.kind==='letter'?'Secret Letter':'Surprise');return `<div class="gm-card gm-giftcard"><b>${opened?'💝 Discovered':'🎁 A hidden surprise'}</b>${opened?`${info?img(info.img):''}<p>${esc(name)}</p><p>${esc(g.message||'A thoughtful gift from Mikael')}</p>`:`<p>Something is waiting near the ${esc(giftPlaces[g.location]||'garden')}.</p><button data-open-gift="${esc(g.id)}">Unwrap gift</button>`}</div>`}
 function hiddenPage(){const d=deliveries();const steps=[['Butterfly Sanctuary',canButter()],['Moonlight Garden',canMoon()],['Grow 20 flowers',grown()>=20],['Complete 5 bouquet deliveries',d.total>=5],['At least 1 bouquet from Mikael',d.fromMikael>=1]];
  if(!hidden())return `<h3>🔐 The Hidden Garden</h3><p>A secret place for your memories, rare plants and surprises from Mikael.</p><div class="gm-grid">${steps.map(([l,b])=>tile(b,esc(l))).join('')}</div>${canHidden()?`<div class="gm-card"><h3>🌳 You've found the secret gate!</h3><p>The butterfly and moon symbols are etched into its lock.</p><button id="gmGate">${local.gateStep===0?'🦋 Turn the Butterfly Key':'🌙 Turn the Moon Key'}</button></div>`:'<p class="gm-caption">All five conditions must be complete before Lizzy can open the secret gate.</p>'}`;
  const stage=treeStage(),gifts=(shared.surprises||[]).filter(x=>x.revealed),potted=local.potted,decor=local.decor;
  const wishes=(local.wishHistory||[]).slice(0,7);
  const recent=wishes.map(x=>`<div class="gm-wish-result"><span class="gm-wish-icon">${x.rewardKind==='seed'?smallImg(x.rewardId):x.rewardKind==='decor'?'🏡':'✨'}</span><div><b>${x.granted?'✅ Wish granted':'🌙 Wish not granted — consolation received'}</b><small>${esc(x.day)} · Asked for ${esc(x.wishName)}</small><p><strong>Received: ${esc(x.rewardLabel)}</strong></p></div></div>`).join('');
  const previousWishToday=local.lastWishDay===today()&&!wishes.some(w=>w.day===today());
  const decorCards=Object.entries(decorPrices).map(([id,cost])=>`<div class="gm-seedcard"><span class="gm-decor-icon">${decorations[id][1]}</span><b>${esc(decorations[id][0])}</b><small>${cost} Stardust · Owned ${decor.filter(x=>x.id===id).length}</small><button data-buy-decor="${id}" ${balance('stardust')>=cost?'':'disabled'}>Buy decoration · ${cost} ✨</button></div>`).join('');
  return `<h3>🌳 The Hidden Garden · Unlocked</h3><p>Make wishes, grow rare flowers, buy decorations, and find real gifts sent by Mikael from Test HQ.</p><div class="gm-memory-tree gm-card">${img(A+'tree/memoryTree'+stage+'.webp')}<div><h3>🌸 Memory Tree — Stage ${stage} of 4</h3><p>Its branches grow as bouquets and gifts are exchanged.</p><p class="gm-caption">${d.total} bouquet deliveries · ${gifts.filter(x=>x.openedAt).length} gifts discovered</p></div></div>
  <div class="gm-card"><h3>⛲ Wishing Fountain — choose your wish</h3><p>Make <b>one wish per day</b>. Choose what you hope for; the fountain may grant it or give a small consolation reward. You will always see the exact result and recent wish history.</p><label class="gm-wish-picker">I wish for… <select id="gmWishType" ${local.lastWishDay===today()?'disabled':''}><option value="stardust" ${local.wishChoice==='stardust'?'selected':''}>✨ Stardust (80% chance for 8)</option><option value="seed" ${local.wishChoice==='seed'?'selected':''}>🌱 Rare Hidden Garden seed (65% chance)</option><option value="decor" ${local.wishChoice==='decor'?'selected':''}>🏡 Garden decoration (45% chance)</option></select></label><button id="gmWish" ${local.lastWishDay===today()?'disabled':''}>${local.lastWishDay===today()?'Wish used today · return tomorrow':'⛲ Make my wish'}</button>${previousWishToday?'<p class="gm-caption">A wish was made today on the previous version; the earlier reward was not recorded. New wishes will appear below.</p>':''}<h4>My wishes & rewards</h4><div class="gm-wishes">${wishes.length?recent:'<p class="gm-caption">No recorded wishes yet. Make your first wish to see what you receive.</p>'}</div></div>
  ${plantBeds('hidden')}<div class="gm-card"><div class="gm-shop-heading"><div><h3>🏡 Hidden Garden Decoration Shop</h3><p class="gm-caption">Buy decorations with Stardust earned in Moonlight Garden, receive decorations from HQ, win them at the fountain, or discover butterfly milestone rewards.</p></div><strong class="gm-wallet">✨ Stardust: ${balance('stardust')}</strong></div><div class="gm-seedlist">${decorCards}</div></div>
  <h3>🎁 Gifts from Mikael</h3><div class="gm-gifts">${gifts.length?gifts.slice().reverse().map(giftCard).join(''):'<p>No gifts waiting yet. Mikael can prepare surprises through Test HQ.</p>'}</div><h3>🪴 Potted plants placed in your Hidden Garden</h3><div class="gm-seedlist">${potted.length?potted.map(p=>`<div class="gm-seedcard">${smallImg(p.flowerId)}<b>${esc(catalog[p.flowerId]?.name||p.flowerId)}</b><small>Gift from Mikael · ${esc(giftPlaces[p.location]||'Garden')}</small></div>`).join(''):'<p class="gm-caption">Potted plants Mikael sends appear here after unwrapping.</p>'}</div><h3>✨ My decorations (${decor.length})</h3><div class="gm-statline">${decor.length?decor.map(p=>`<span>${decorations[p.id]?.[1]||'🌷'} ${esc(decorations[p.id]?.[0]||p.id)}${p.source==='hidden-shop'?' · Bought':p.source==='milestone'?' · Earned':' · Gifted'}</span>`).join(''):'<span>No decorations yet. Purchase them above or receive gifts from Mikael.</span>'}</div>`;
 }
 function available(){const g=garden(),arr=[];for(const o of flowerOptions){const count=Number(species[o.id]?local.harvested[o.id]:g.flowers?.[o.id])||0;if(count>0)arr.push({...o,count})}return arr}
 function flowerSelection(){const valid=available();return `<div class="gm-flower-choices">${valid.length?valid.map(o=>{const n=chosen.filter(id=>id===o.id).length;return `<div class="gm-flower-qty ${n?'gm-on':''}">${img(o.img)}<b>${esc(o.name)}</b><small>Storage: ${o.count} · In bouquet: ${n}</small><div class="gm-qty-actions"><button data-remove-flower="${o.id}" ${n?'':'disabled'} title="Remove one">−</button><button data-add-flower="${o.id}" ${n<o.count&&chosen.length<6?'':'disabled'} title="Add one">+</button></div></div>`}).join(''):'<p>No cut flowers available yet. Harvest blooms in the original garden or the special gardens. Existing earned flowers remain in storage.</p>'}</div>`}
 function bouquetCard(b){const isIn=b.to==='Lizzy',glow=b.glow===true||false;return `<div class="gm-card ${glow?'gm-glowing-bouquet':''}"><b>${isIn?'🎁 From Mikael':'💌 Sent to Mikael'} ${glow?'· ✨ Glowing':''}</b><div class="gm-gift-header">${(b.flowers||[]).map(smallImg).join('')}</div><p>${esc((b.flowers||[]).map(id=>catalog[id]?.name||id).join(', '))}</p><p class="gm-caption">${esc(b.wrapping||'')} · ${esc(b.ribbon||'')} · ${b.openedAt?'Opened':'Delivered'}</p><div class="gm-message">${esc(b.note||'A bouquet with love')}</div>${isIn&&!b.openedAt?`<button data-open-bouquet="${esc(b.id)}">${glow?'✨ Open glowing bouquet':'💐 Open bouquet'}</button>`:''}</div>`}
 function studioPage(){const gl=chosen.some(id=>glowIds.has(id));const c=deliveries();return `<h3>💐 Bouquet Studio</h3><p>Arrange 1–6 cut flowers, including multiple stems of one species. Flowers are deducted only after the TEST Worker confirms delivery to Mikael. Glowing bouquets require moonlit flowers.</p><div class="gm-statline"><span>Sent: ${c.fromLizzy}</span><span>From Mikael: ${c.fromMikael}</span><span>Total deliveries: ${c.total}</span></div><div class="gm-card"><h3>🌷 Pick flowers</h3>${flowerSelection()}<p class="gm-caption">Selected: ${chosen.length}/6 · ${gl?'✨ Glowing bouquet available':'Choose a moonlit flower for glow'}</p><div class="gm-bouquet-preview ${gl&&glowEnabled?'gm-preview-glow':''}"><div class="gm-bouquet-stems">${chosen.length?chosen.map(id=>smallImg(id)).join(''):'<span>Choose flowers to see your bouquet</span>'}</div><div class="gm-bouquet-paper">🎀 ${esc(wrapping)} wrapping · ${esc(ribbon)} ribbon</div></div><div class="gm-formgrid"><label>Wrapping<select id="gmWrapping" class="gm-select">${wrapOptions.map(x=>`<option ${x===wrapping?'selected':''}>${x}</option>`).join('')}</select></label><label>Ribbon<select id="gmRibbon" class="gm-select">${ribbonOptions.map(x=>`<option ${x===ribbon?'selected':''}>${x}</option>`).join('')}</select></label></div><label>Personal note<textarea id="gmNote" maxlength="300" class="gm-textarea" placeholder="Write Mikael a note…">${esc(note)}</textarea></label><label class="gm-check"><input id="gmGlow" type="checkbox" ${gl&&glowEnabled?'checked':''} ${gl?'':'disabled'}> ✨ Glowing bouquet</label><button id="gmSend" class="gm-primary" ${chosen.length&&!local.pendingDelivery?'':'disabled'}>💌 Send to Mikael</button>${local.pendingDelivery?'<div class="gm-warning">The previous delivery may have reached HQ. Retry the same reference to finish safely.</div><button id="gmRetry">↻ Retry / confirm previous delivery</button>':''}</div><h3>📖 Bouquet & Gift Memory Book</h3><div class="gm-letters">${shared.bouquets.length?shared.bouquets.slice().reverse().map(bouquetCard).join(''):'<p class="gm-caption">Your delivered bouquets will be kept here.</p>'}</div>`}
 function storagePage(){const g=garden(),original=Object.entries(g.flowers||{}).filter(([id,n])=>catalog[id]?.type==='flower'&&Number(n)>0),specialStock=Object.entries(local.harvested||{}).filter(([id,n])=>species[id]&&Number(n)>0),produce=Object.entries(g.produce||{}).filter(([,n])=>Number(n)>0);
   const all=[...original,...specialStock],total=all.reduce((sum,[,n])=>sum+Number(n||0),0);
   const card=([id,n])=>`<div class="gm-stock-item">${img(catalog[id].img)}<b>${esc(catalog[id].name)}</b><span>×${Number(n)}</span><small>${esc(catalog[id].rarity||'Flower')} · available for bouquets</small></div>`;
   const fruitNames={bananas:'Bananas',lemons:'Lemons',cacaoPods:'Cacao Pods'};
   return `<h3>✂️ Flower Storage</h3><p>Lizzy has ${total} cut flowers ready for bouquets. Each harvested stem is saved here, whether it came from an ordinary garden flower, flowering tree or special plant. No flowers are consumed until a delivery is confirmed.</p><div class="gm-statline"><span>🌸 ${total} stems in storage</span><span>🌷 ${all.length} flower varieties</span><span>🌱 72-hour regrowth per plant</span></div><div class="gm-storage-grid">${all.length?all.map(card).join(''):'<p class="gm-caption">Your storage is empty. Grow a plant and press Harvest once it blooms.</p>'}</div>${produce.length?`<div class="gm-card"><h4>🍋 Fruit and produce</h4><p class="gm-caption">Harvested fruit is kept separately and cannot be added to a flower bouquet.</p>${produce.map(([id,n])=>`<p>${esc(fruitNames[id]||id)} ×${n}</p>`).join('')}</div>`:''}<button id="gmGoBouquets" class="gm-primary">💐 Arrange a bouquet</button>`;
 }
 function passportPage(){const c=deliveries(),photos=Object.values(local.butterflies).reduce((s,x)=>s+Number(x.photos||0),0),moon=local.beds.filter(p=>p.stage>=3&&species[p.flowerId]?.zone==='moon').length;
  return `<h3>📖 Garden Passport</h3><p>Your milestones across all four garden areas.</p><div class="gm-grid">${tile(canButter(),`Butterfly Sanctuary · 12 flowers + 1 bouquet`)}${tile(canMoon(),`Moonlight Garden · 15 flowers + 3 bouquets sent`)}${tile(hidden(),`Hidden Garden · 20 flowers + 5 deliveries, 1 from Mikael`)}</div><div class="gm-statline"><span>🌷 ${grown()} flowers grown</span><span>💌 ${c.total} deliveries</span><span>🦋 ${found()}/20 butterflies</span><span>📸 ${photos} photos</span><span>🌙 ${moon} moon plants</span><span>✨ ${balance('stardust')} Stardust</span><span>🍯 ${balance('nectar')} Nectar</span><span>⛲ ${(local.wishHistory||[]).length} wishes recorded</span></div>${bar(found(),20)}<p>Butterfly Emblem: ${found()>=10?'✅ Awarded':'🔒 10 unique species required'} · Moon Emblem: ${progress().moonEmblem?'✅ Awarded':'🔒 Three Moon flower varieties harvested and constellation solved'}</p><p class="gm-caption">Only flowers matured in the garden count. Potted HQ gift plants and trees do not increase the flower-grown total.</p>`}
 function render(){makeUI();scan();unlockSeeds();scene();const body=$('gmBody');if(!body)return;document.querySelectorAll('#gmHub [data-tab]').forEach(x=>x.classList.toggle('gm-on',x.dataset.tab===local.tab));const tabs={butterfly:butterflyPage,moon:moonPage,hidden:hiddenPage,studio:studioPage,storage:storagePage,passport:passportPage};body.innerHTML=(tabs[local.tab]||butterflyPage)();wire(body)}
 function growAllowed(zone){return zone==='butterfly'?canButter():zone==='moon'?canMoon():hidden()}
 function chooseVisitor(){const n=found(),mature=new Set(local.beds.filter(p=>p.stage>=3).map(p=>p.flowerId));
  const available=butterflies.filter(x=>x.rarity==='Common'||x.rarity==='Rare'&&(n>=3||mature.has('roseNectarFlower'))||x.rarity==='Epic'&&(n>=8||mature.has('emeraldPetalVine'))||x.rarity==='Legendary'&&n>=14);
  const weights={Common:17,Rare:9,Epic:5,Legendary:2};const bag=available.map(x=>({x,weight:weights[x.rarity]*(local.butterflies[x.id]?.sightings?0.3:3)*(x.id==='emeraldDancer'&&mature.has('emeraldPetalVine')?2:1)}));
  let r=Math.random()*bag.reduce((s,x)=>s+x.weight,0);for(const x of bag){r-=x.weight;if(r<=0)return x.x;}return bag[0]?.x;
 }
 function popupBouquet(b){$('gmOpenOverlay')?.remove();const el=document.createElement('div');el.id='gmOpenOverlay';el.className='gm-overlay';el.innerHTML=`<div class="gm-reveal ${b.glow?'gm-reveal-glow':''}"><button id="gmCloseReveal" aria-label="Close">✕</button><h2>${b.glow?'✨ A Moonlit Bouquet':'💐 A Bouquet for Lizzy'}</h2><div class="gm-reveal-flowers">${(b.flowers||[]).map(smallImg).join('')}</div><p>${esc(b.note||'With love from Mikael')}</p><small>${esc(b.wrapping||'')} · ${esc(b.ribbon||'')}</small></div>`;document.body.append(el);$('gmCloseReveal').onclick=()=>el.remove();el.addEventListener('click',e=>{if(e.target===el)el.remove()});}
 function wire(body){
  body.onchange=e=>{if(e.target.id==='gmWrapping'){wrapping=e.target.value;render()}if(e.target.id==='gmRibbon'){ribbon=e.target.value;render()}if(e.target.id==='gmGlow'){glowEnabled=e.target.checked;render()}if(e.target.id==='gmWishType'){local.wishChoice=e.target.value;save()}};
  body.oninput=e=>{if(e.target.id==='gmNote')note=e.target.value};
  body.onclick=async e=>{
   const b=e.target.closest('button');if(!b||!body.contains(b))return;
   const key=(name)=>b.dataset[name];
   if(b.id==='gmVisit'){
    if(now()-local.lastArrival<4500){status('🦋 The butterflies need a few seconds before another visit.');return}
    const v=chooseVisitor();if(!v)return;encounter={id:v.id,started:now(),hits:0};render();status('🦋 '+v.name+' is visiting. Time your catch!');return;
   }
   if(b.id==='gmLeave'){encounter=null;local.lastArrival=now();save();render();return}
   if(b.id==='gmCatch'){
    if(!encounter)return;const x=butterflyIndex[encounter.id];if(!x)return;
    const widths={Common:.26,Rare:.18,Epic:.13,Legendary:.095},periods={Common:3900,Rare:3000,Epic:2300,Legendary:1850};
    const needed={Common:1,Rare:2,Epic:3,Legendary:3}[x.rarity]||2;
    if(timingHit(encounter.started,periods[x.rarity],widths[x.rarity])){
     encounter.hits=(encounter.hits||0)+1;
     if(encounter.hits<needed){encounter.started=now();render();status('🎯 Perfect catch! '+encounter.hits+'/'+needed+' hits. Stay focused!');return;}
     let rec=local.butterflies[x.id];if(!rec)rec={first:new Date().toISOString(),sightings:0,photos:0};rec.sightings++;rec.photos++;rec.last=new Date().toISOString();local.butterflies[x.id]=rec;
     const reward={Common:3,Rare:6,Epic:10,Legendary:16}[x.rarity]||3;local.nectar=balance('nectar')+reward;
     status('📸 '+x.name+' caught and photographed! +'+reward+' Nectar · '+found()+'/20 species.');
    }else status('🦋 Missed the narrow zone — the butterfly escaped! Try again after a short rest.');
    local.lastArrival=now();encounter=null;unlockSeeds();save();render();await sendProgress();return;
   }
   if(b.id==='gmPollinate'){
    if(local.lastPollinateDay===today())return status('The butterflies have already visited your plants today.');
    local.lastPollinateDay=today();local.nectar=balance('nectar')+3;const p=local.beds.find(x=>x.stage>=3&&species[x.flowerId]?.zone==='butterfly');
    if(p){grantSeed(p.flowerId);status('🦋 +3 Nectar and a free '+species[p.flowerId].name+' seed from pollination! The plant’s 3-day harvest timer is unchanged.')}
    else{grantSeed('butterflyBloom');status('🦋 +3 Nectar and a free Butterfly Bloom seed!')}
    save();render();await sendProgress();return;
   }
   if(key('buySeed')){const msg=purchaseSeed(b.dataset.buySeed);render();status(msg);if(msg.includes('Bought'))await sendProgress();return;}
   if(key('buyDecor')){const msg=purchaseDecor(b.dataset.buyDecor);render();status(msg);if(msg.includes('Bought'))await sendProgress();return;}
   if(key('plantSeed')){
    const id=b.dataset.plantSeed,p=species[id];if(!p||!growAllowed(p.zone)||!(local.seeds[id]>0))return;
    if(local.beds.filter(x=>species[x.flowerId]?.zone===p.zone).length>=18)return status('This garden has reached its 18-bed limit.');
    local.seeds[id]--;local.beds.push({id:uid(),flowerId:id,stage:0,lastCare:0,lastHarvest:0});save();render();status('🌱 '+p.name+' planted!');return;
   }
   if(key('uproot')){
    const id=b.dataset.uproot,p=local.beds.find(x=>x.id===id);if(!p)return;
    if(typeof window.confirm==='function'&&!window.confirm('Remove '+(species[p.flowerId]?.name||'this plant')+'? You will not get the seed back, but grown-flower and harvested-blossom totals stay saved.'))return;
    local.beds=local.beds.filter(x=>x.id!==id);save();render();status('🌿 Plant removed and garden bed freed. Your previous blossoms and milestones are preserved.');return;
   }
   if(key('waterSpecial')){
    const p=local.beds.find(x=>x.id===b.dataset.waterSpecial);if(!p||p.stage>=3)return;
    if(now()-(p.lastCare||0)<1200)return status('Give this plant a moment before watering again.');
    p.stage++;p.lastCare=now();
    if(p.stage===3){p.lastHarvest=0;scan();status('🌸 '+species[p.flowerId].name+' fully grown! Tap Harvest blossom to collect your first flower.')}
    else status('💧 Growth '+p.stage+'/3. Your plant is getting stronger.');
    save();unlockSeeds();render();await sendProgress();return;
   }
   if(key('harvest')){
    const p=local.beds.find(x=>x.id===b.dataset.harvest);if(!p||p.stage<3||(p.lastHarvest&&now()-p.lastHarvest<BLOOM_COOLDOWN_MS))return;
    p.lastHarvest=now();local.harvested[p.flowerId]=(local.harvested[p.flowerId]||0)+1;save();render();status('✂️ '+species[p.flowerId].name+' blossom harvested and added to Flower Storage. Next in 3 days.');return;
   }
   if(b.id==='gmFirefly'){
    if(now()-local.lastFireflyAt<8500)return status('🌙 Fireflies are resting. Return shortly.');
    const colors=['Golden','Blue','Violet','Silver'],c=colors[Math.floor(Math.random()*colors.length)];fireflyEncounter={color:c,hits:0,started:now(),expires:now()+7000};render();status('🪲 A '+c+' firefly is flashing. Catch the flashes in the narrow zone!');return;
   }
   if(b.id==='gmCancelFirefly'){fireflyEncounter=null;local.lastFireflyAt=now();save();render();status('🪲 You let the firefly escape.');return;}
   if(b.id==='gmCatchFirefly'){
    const ff=fireflyEncounter;if(!ff)return;const rules=fireflyStats[ff.color];
    if(now()>ff.expires||!timingHit(ff.started,rules.period,rules.width)){fireflyEncounter=null;local.lastFireflyAt=now();save();render();status('🪲 The firefly darted away after a missed flash. No Stardust earned.');return;}
    ff.hits++;if(ff.hits<rules.hits){ff.started=now();ff.expires=now()+7000;render();status('✨ Flash '+ff.hits+'/'+rules.hits+' caught. Keep your timing!');return;}
    local.fireflies[ff.color]=(local.fireflies[ff.color]||0)+1;local.lastFireflyAt=now();local.stardust=balance('stardust')+rules.reward;
    fireflyEncounter=null;unlockSeeds();save();render();status('🪲 '+ff.color+' firefly caught! +'+rules.reward+' Stardust.');await sendProgress();return;
   }
   if(b.id==='gmMeteor'){
    if(now()-local.lastStarAt<12000)return status('🌠 No shooting stars are visible yet.');
    meteorEncounter={started:now(),expires:now()+3400};render();status('🌠 A shooting star! Hit the tiny golden zone before it disappears!');return;
   }
   if(b.id==='gmCatchMeteor'){
    if(!meteorEncounter)return;const met=meteorEncounter;meteorEncounter=null;
    if(now()>met.expires){local.lastStarAt=now();save();render();status('🌠 Too late — the shooting star faded. No Stardust earned.');return;}
    if(timingHit(met.started,1420,.105)){local.lastStarAt=now();local.starsCaught++;local.stardust=balance('stardust')+7;unlockSeeds();save();render();status('🌠 Perfect timing! Shooting star caught · +7 Stardust.');await sendProgress();return;}
    local.lastStarAt=now();save();render();status('🌠 Missed! The shooting star vanished. No reward.');return;
   }
   if(b.id==='gmHint'){
    if(local.constellation||now()<Number(local.constellationLockUntil||0))return;
    if(!spend('stardust',2)){status('You need 2 Stardust for a clue.');return;}
    local.constellationHint='Next symbol: '+constellationPath[local.constellationIndex||0]+'.';save();render();status('💡 Next symbol revealed for 2 Stardust.');return;
   }
   if(key('star')){
    if(local.constellation)return;if(now()<Number(local.constellationLockUntil||0))return status('⭐ The stars are still realigning.');
    if(b.dataset.star===constellationPath[local.constellationIndex||0]){
     local.constellationIndex=(local.constellationIndex||0)+1;local.constellationHint='';
     if(local.constellationIndex===constellationPath.length){local.constellation=true;local.constellationMistakes=0;local.stardust=balance('stardust')+12;status('⭐ All six symbols connected! Free Silver Rose seed awarded and +12 Stardust.');unlockSeeds();}
     else status('⭐ Correct star! '+local.constellationIndex+'/'+constellationPath.length+' connected.');
    }else{
     local.constellationIndex=0;local.constellationHint='';local.constellationMistakes=(local.constellationMistakes||0)+1;
     if(local.constellationMistakes>=3){local.constellationLockUntil=now()+15000;local.constellationMistakes=0;status('☁️ Three errors! The constellation needs 15 seconds to realign.');}
     else status('☁️ Wrong symbol. Your path reset; review the astronomer’s clue.');
    }
    save();render();await sendProgress();return;
   }
   if(b.id==='gmGate'){
    if(!canHidden())return;if(local.gateStep===0){local.gateStep=1;save();render();status('🦋 The butterfly key turned. One more symbol…');return}
    local.hiddenUnlocked=true;local.gateStep=0;save();await sendProgress();await refresh(true);render();status('🌳 The Hidden Garden has been discovered!');return;
   }
   if(b.id==='gmWish'){
    if(!hidden()||local.lastWishDay===today())return;
    const wish=['stardust','seed','decor'].includes($('gmWishType')?.value)?$('gmWishType').value:local.wishChoice;
    const names={stardust:'Stardust',seed:'a rare Hidden Garden seed',decor:'a garden decoration'};
    const chance={stardust:.8,seed:.65,decor:.45};const granted=Math.random()<chance[wish];
    let award={rewardKind:'stardust',rewardId:'',rewardLabel:'2 Stardust (consolation)'};
    if(granted&&wish==='stardust'){local.stardust=balance('stardust')+8;award={rewardKind:'stardust',rewardId:'',rewardLabel:'8 Stardust'};}
    else if(granted&&wish==='seed'){const ids=['secretRose','wishingLily','memoryVine','eternalBlossom'];const id=ids[Math.floor(Math.random()*ids.length)];grantSeed(id);award={rewardKind:'seed',rewardId:id,rewardLabel:'1 '+species[id].name+' seed'};}
    else if(granted&&wish==='decor'){const ids=Object.keys(decorPrices),id=ids[Math.floor(Math.random()*ids.length)];local.decor.push({id,source:'wish',giftId:uid()});award={rewardKind:'decor',rewardId:id,rewardLabel:'1 '+decorations[id][0]};}
    else local.stardust=balance('stardust')+2;
    const record={day:today(),wish, wishName:names[wish],granted,...award};
    local.wishChoice=wish;local.lastWishDay=today();local.wishHistory=[record,...(local.wishHistory||[])].slice(0,60);
    save();render();status(granted?'⛲ Wish GRANTED! Received: '+award.rewardLabel:'⛲ Wish not granted this time. Consolation received: '+award.rewardLabel);
    await sendProgress();return;
   }
   if(key('openGift')){
    b.disabled=true;try{const r=await api('garden_test_collect_surprise',{id:b.dataset.openGift});shared.surprises=shared.surprises.map(x=>x.id===r.item.id?r.item:x);
     const awarded=grantGift(r.item);render();status(awarded?'🎁 Gift opened and added to your Hidden Garden!':'🎁 Gift opened.');await sendProgress();
    }catch(e){status('⚠️ '+e.message);b.disabled=false}return;
   }
   if(b.id==='gmGoBouquets'){local.tab='studio';save();render();return;}
   if(key('addFlower')||key('removeFlower')){
    wrapping=$('gmWrapping')?.value||wrapping;ribbon=$('gmRibbon')?.value||ribbon;note=$('gmNote')?.value||note;
    const add=Boolean(b.dataset.addFlower),id=add?b.dataset.addFlower:b.dataset.removeFlower;
    const current=chosen.filter(x=>x===id).length,held=available().find(x=>x.id===id)?.count||0;
    if(add){if(chosen.length<6&&current<held)chosen.push(id);}
    else{const index=chosen.lastIndexOf(id);if(index>=0)chosen.splice(index,1)}
    render();return;
   }
   if(b.id==='gmRetry'){
    b.disabled=true;try{await retryDelivery();render();status('💌 Delivery confirmed and inventory reconciled.')}catch(err){status('⚠️ '+err.message);b.disabled=false}return;
   }
   if(b.id==='gmSend'){
    if(local.pendingDelivery||!chosen.length)return;
    wrapping=$('gmWrapping')?.value||wrapping;ribbon=$('gmRibbon')?.value||ribbon;note=$('gmNote')?.value||note;
    const own=available(),quantities={};for(const id of chosen)quantities[id]=(quantities[id]||0)+1;
    if(Object.entries(quantities).some(([id,n])=>n>(own.find(x=>x.id===id)?.count||0)))return status('Not enough harvested stems in Flower Storage for that bouquet.');
    const glow=Boolean($('gmGlow')?.checked)&&chosen.some(id=>glowIds.has(id));
    const tx={clientTx:uid(),flowers:[...chosen],wrapping,ribbon,note,glow};local.pendingDelivery=tx;save();b.disabled=true;
    try{const receipt=await retryDelivery();render();status('💌 '+(glow?'Glowing bouquet':'Bouquet')+' delivered to Mikael in Test HQ! '+(receipt?.item?.telegram?.status==='sent'?'📲 Telegram notification sent.':receipt?.item?.telegram?.status==='failed'?'⚠️ Telegram notification failed — check the Worker secrets.':'📲 Telegram notification status: '+(receipt?.item?.telegram?.status||'pending')))}
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
  window.addEventListener('lizzyGardenUpdated',()=>{if(scan()){render();sendProgress()}else if(local.tab==='studio'||local.tab==='storage')render()});
  window.addEventListener('lizzyGardenHarvested',()=>{if(local.tab==='studio'||local.tab==='storage')render();});
  window.addEventListener('storage',e=>{if(e.key===GARDEN){if(scan()){render();sendProgress()}}});
  // Refresh disabled watering/harvesting controls without disturbing notes or catching animations.
  setInterval(()=>{if(document.hidden)return;const body=$('gmBody');if(!body)return;
   body.querySelectorAll('[data-water-special]').forEach(b=>{const p=local.beds.find(x=>x.id===b.dataset.waterSpecial);if(p)b.disabled=p.stage>=3||now()-(p.lastCare||0)<1200;});
   body.querySelectorAll('[data-harvest]').forEach(b=>{const p=local.beds.find(x=>x.id===b.dataset.harvest);if(p){const left=Math.max(0,BLOOM_COOLDOWN_MS-(now()-(p.lastHarvest||0)));b.disabled=p.stage<3||(p.lastHarvest&&left>0);b.textContent=b.disabled?'🌱 '+timeLeft(left)+' remaining':'✂️ Harvest blossom';}});
   if($('gmVisit'))$('gmVisit').disabled=now()-local.lastArrival<4500;
   if($('gmFirefly'))$('gmFirefly').disabled=now()-local.lastFireflyAt<8500;
   if($('gmMeteor'))$('gmMeteor').disabled=now()-local.lastStarAt<12000;
   if(now()>=Number(local.constellationLockUntil||0)&&Number(local.constellationLockUntil||0)>0){local.constellationLockUntil=0;save();if(local.tab==='moon')render();}
   if(meteorEncounter&&now()>meteorEncounter.expires){meteorEncounter=null;local.lastStarAt=now();save();render();status('🌠 The shooting star disappeared before you caught it. No reward.');}
   if(fireflyEncounter&&now()>fireflyEncounter.expires){fireflyEncounter=null;local.lastFireflyAt=now();save();render();status('🪲 The firefly escaped — the catch window closed.');}
  },750);
  setInterval(()=>{const open=!$('lizzyGardenWindow')?.classList.contains('hidden')&&!document.hidden;if(!open)return;
   const change=scan();if(change){unlockSeeds();render();sendProgress()}refresh(false);
   if(local.tab==='butterfly'&&encounter&&$('gmCatch')){} else if(local.tab==='butterfly'&&now()-local.lastArrival>4500&&$('gmVisit')?.disabled){$('gmVisit').disabled=false;}
  },7000);
  refresh(true);sendProgress();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* Optional TESTR market event bridge. Does nothing until the EXISTING market
   explicitly calls recordConfirmedPurchase AFTER a successful saved purchase.
   No production URLs, no wallet mutation, no speculative scrape/DOM observers. */
(()=>{'use strict';
 const URL_KEY='lizzy:exp:test:url:v09',ACCESS='lizzy:exp:test:auth:lizzy',QUEUE='lizzy:exp:test:trade-outbox:v09';
 const getQueue=()=>{try{return JSON.parse(localStorage.getItem(QUEUE)||'[]')}catch{return []}};
 function remember(t){const q=getQueue();if(!q.some(x=>x.tradeId===t.tradeId)){q.push(t);localStorage.setItem(QUEUE,JSON.stringify(q.slice(-200)))} }
 async function flush(){const url=(localStorage.getItem(URL_KEY)||'').replace(/\/+$/,'').replace(/\/(api|health)$/,'');const key=sessionStorage.getItem(ACCESS);if(!url||!key)return {sent:0,reason:'Open the TESTR Experiences page and connect first.'};
  const q=getQueue();let count=0;for(const t of [...q]){
   try{const r=await fetch(url+'/api',{method:'POST',headers:{'content-type':'application/json','x-lizzy-key':key},body:JSON.stringify({action:'stock.record',...t,source:'testr_existing_market'})});const b=await r.json();if(!r.ok||!b.ok)break;const next=getQueue().filter(x=>x.tradeId!==t.tradeId);localStorage.setItem(QUEUE,JSON.stringify(next));count++;}catch{break;}}
  return {sent:count,remaining:getQueue().length};}
 async function recordConfirmedPurchase(t){if(!t?.tradeId||!t?.company||!Number.isInteger(Number(t.quantity))||Number(t.quantity)<=0||!Number.isFinite(Number(t.unitPrice))||Number(t.unitPrice)<=0)throw Error('A saved, confirmed market trade is required.');
  const record={tradeId:String(t.tradeId),company:String(t.company),quantity:Number(t.quantity),unitPrice:Number(t.unitPrice)};
  if(Number.isInteger(Number(t.holdingsAfter)))record.holdingsAfter=Number(t.holdingsAfter);
  if(t.portfolioHoldings&&typeof t.portfolioHoldings==='object')record.portfolioHoldings=t.portfolioHoldings;
  if(Number.isFinite(Number(t.portfolioValue)))record.portfolioValue=Number(t.portfolioValue);
  if(Number.isFinite(Number(t.walletBalance)))record.walletBalance=Number(t.walletBalance);
  remember(record);return flush();}
 window.LizzyTestShareNotificationBridge={recordConfirmedPurchase,flush};
 window.addEventListener('online',()=>flush().catch(()=>{}));
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)flush().catch(()=>{})});
})();

/* Gotham Stage 4 — TESTR Our World (coop.html) entry; no existing features removed. */
(() => {
  'use strict';
  const ID='gotham-stage4-our-world-entry';
  function addEntry() {
    if(document.getElementById(ID)) return true;
    const main=document.querySelector('main, [role="main"], #app, #root, .main-content, .content');
    if(!main) return false;
    const section=document.createElement('section');
    section.id=ID;
    section.setAttribute('aria-label','Gotham Escape Room');
    section.style.cssText='box-sizing:border-box;max-width:1000px;width:calc(100% - 24px);margin:20px auto;padding:22px;border:1px solid rgba(212,187,124,.48);border-radius:16px;background:linear-gradient(125deg,#141e2d,#252b35);color:#f4eee2;box-shadow:0 8px 22px rgba(0,0,0,.12);font-family:system-ui,-apple-system,Segoe UI,sans-serif;text-align:left';
    section.innerHTML='<div style="font-size:11px;font-weight:800;letter-spacing:.16em;color:#e2c884;margin-bottom:10px">OUR WORLD · TWO-PLAYER EXPERIENCE</div><div style="font-size:22px;font-weight:800;margin-bottom:8px">🦇 Gotham Escape Room</div><p style="font-size:14px;line-height:1.55;color:#d5dbe0;margin:0 0 16px">Become Catwoman and team up with Batman across four interactive rooms and twelve challenging puzzles. Both of you must work together to escape.</p><a href="./gotham-escape.html" style="display:inline-block;text-decoration:none;padding:11px 18px;border-radius:9px;background:#e2c884;color:#171d26;font-size:14px;font-weight:800">Enter as Catwoman</a>';
    // Keep it inside the actual Our World page. Place near the Batcomputer/Gotham item when possible.
    const candidates=[...main.querySelectorAll('article, .card, .feature-card, .world-card, .tile, section')];
    const existing=candidates.find(x => /Batcomputer|Gotham Escape|Gotham Intelligence/i.test(x.textContent||'') && (x.textContent||'').length<2200 && !x.querySelector('#'+ID));
    if(existing && existing !== main && existing.parentNode) existing.insertAdjacentElement('afterend',section);
    else main.insertAdjacentElement('afterbegin',section);
    return true;
  }
  function init(){
    addEntry();
    // Restore the card if Our World re-renders its sections after page load.
    let scheduled=false;
    const obs=new MutationObserver(()=>{
      if(document.getElementById(ID)||scheduled)return;
      scheduled=true;
      requestAnimationFrame(()=>{scheduled=false;addEntry();});
    });
    obs.observe(document.documentElement,{childList:true,subtree:true});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

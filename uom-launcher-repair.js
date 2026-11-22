/* TESTR University launcher resilience patch — 2026-11-22.
   This never changes grades, tuition, certificates, wallet, or KV records.
   It only repairs missing campus scripts on demand and explains failures clearly. */
(() => {
  'use strict';
  const prefix='20261122-restore-r1';
  let loading=null;
  function bootScript(file,ok){
    if(ok()) return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const tag=document.createElement('script');
      tag.src=file+'?v='+prefix+'&retry=1';
      tag.async=false;
      tag.onload=()=>ok()?resolve():reject(new Error(file+' loaded without its required University module.'));
      tag.onerror=()=>reject(new Error('Missing University file: '+file));
      document.head.appendChild(tag);
    });
  }
  async function ensure(){
    if(window.LizzyUniversityV3?.open)return;
    if(!loading){
      loading=(async()=>{
        await bootScript('uom-data-v3.js',()=>Boolean(window.LizzyUomCatalog?.courses?.length));
        await bootScript('uom-theory-v3.js',()=>Boolean(window.LizzyUomTheory));
        await bootScript('uom-v3.js',()=>Boolean(window.LizzyUniversityV3?.open));
      })().finally(()=>{loading=null;});
    }
    return loading;
  }
  function showProblem(e){
    let overlay=document.getElementById('uomRepairProblem');
    if(!overlay){
      overlay=document.createElement('div');overlay.id='uomRepairProblem';
      overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','University startup error');
      overlay.style.cssText='position:fixed;inset:0;z-index:2147483600;background:rgba(28,7,18,.88);display:grid;place-items:center;padding:20px';
      overlay.innerHTML='<section style="background:#fff8f4;color:#3e2032;max-width:520px;width:100%;padding:25px;border-radius:18px;border:2px solid #cfb17a;font:15px/1.5 system-ui,sans-serif"><h2 style="margin:0 0 12px">🎓 University of Mikael</h2><p id="uomRepairError" role="alert"></p><p style="font-size:13px">Your grades and certificates have not been reset. Make sure all University files from the TESTR repair ZIP were copied into the website root.</p><button id="uomRepairClose" style="cursor:pointer;padding:10px 17px;border-radius:9px;background:#702548;color:#fff;border:0">Close</button></section>';
      document.body.appendChild(overlay);
      overlay.querySelector('#uomRepairClose').onclick=()=>overlay.remove();
    }
    overlay.querySelector('#uomRepairError').textContent=String(e?.message||e||'University failed to open');
  }
  async function open(which='university'){
    const b=document.getElementById(which==='cabinet'?'uomCabinetIcon':'uomDesktopIcon');
    if(b)b.setAttribute('aria-busy','true');
    try{await ensure();window.LizzyUniversityV3.open(which);}
    catch(e){showProblem(e);console.warn('TESTR University recovery:',e);}
    finally{if(b)b.removeAttribute('aria-busy');}
  }
  window.LizzyUniversityRepair={open,ensure};
  // A permanent icon must exist even if the old University loader exited early.
  function ensureIcon(){
    const host=document.getElementById('desktopArea');
    if(!host)return;
    let b=document.getElementById('uomDesktopIcon');
    if(!b){
      b=document.createElement('button');b.id='uomDesktopIcon';b.className='desktopIcon uomDesktopIcon';b.type='button';
      b.innerHTML='<span class="desktopEmoji">🎓</span><span>University of Mikael</span>';
      host.insertBefore(b,host.firstElementChild);
    }
    if(b.dataset.uomRepairBound!=='1'){
      b.onclick=()=>open('university');b.dataset.uomRepairBound='1';
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensureIcon,{once:true});else ensureIcon();
})();

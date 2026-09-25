(()=>{
"use strict";
const KEY="lizzyos_test_worker_url_v1";
const q=new URLSearchParams(location.search).get("testWorker");
if(q){try{localStorage.setItem(KEY,q.trim())}catch{}}
let url="";try{url=(localStorage.getItem(KEY)||"").trim()}catch{}
if(url&&!url.endsWith("/"))url+="/";
window.LIZZY_TEST_MODE=true;
window.LIZZY_TELEGRAM_WORKER_URL=url;
function save(v){v=String(v||"").trim();if(v&&!v.endsWith("/"))v+="/";try{localStorage.setItem(KEY,v)}catch{};location.reload()}
window.addEventListener("DOMContentLoaded",()=>{
  const box=document.createElement("div");box.id="lizzyTestWorkerBadge";
  box.style.cssText="position:fixed;right:12px;top:12px;z-index:2147483647;font:700 11px/1.2 system-ui,sans-serif;background:#23132d;color:#fff;border:1px solid #ff84cf;border-radius:999px;padding:8px 11px;box-shadow:0 8px 24px #0005;cursor:pointer";
  box.textContent=url?"🧪 TEST SITE · Worker connected":"⚠️ TEST SITE · Set Worker";
  box.title=url?url:"Click to enter your TEST Worker URL";
  box.onclick=()=>{const v=prompt("TEST Worker URL",url||"https://your-test-worker.workers.dev/");if(v!==null)save(v)};
  document.body.appendChild(box);
  if(!url){
    const panel=document.createElement("div");panel.id="lizzyTestWorkerSetup";
    panel.style.cssText="position:fixed;inset:0;z-index:2147483646;display:grid;place-items:center;padding:20px;background:#0b0811ee;color:#fff;font-family:system-ui,sans-serif";
    panel.innerHTML='<div style="width:min(520px,92vw);background:#18101f;border:1px solid #ff84cf55;border-radius:22px;padding:24px;box-shadow:0 22px 70px #0009"><div style="font-size:12px;font-weight:900;letter-spacing:1.4px;color:#ff9bd8">🧪 LIZZYOS TEST SITE</div><h2 style="margin:8px 0">Connect the separate Test Worker</h2><p style="opacity:.72;line-height:1.5">This test build deliberately has no live Worker fallback. Enter the same Worker URL you use in MickyHQ Test Lab.</p><input id="lizzyTestWorkerInput" type="url" placeholder="https://your-test-worker.workers.dev/" style="box-sizing:border-box;width:100%;padding:12px;border-radius:12px;border:1px solid #ffffff22;background:#ffffff0d;color:#fff"><button id="lizzyTestWorkerSave" style="width:100%;margin-top:10px;padding:12px;border:0;border-radius:12px;background:#ff84cf;font-weight:900;cursor:pointer">Save Test Worker & reload</button></div>';
    document.body.appendChild(panel);
    panel.querySelector("#lizzyTestWorkerSave").onclick=()=>save(panel.querySelector("#lizzyTestWorkerInput").value);
  }
});
})();

(()=>{
"use strict";
const byId=id=>document.getElementById(id);
function send(active){
  const frame=byId("lifeGameFrame");
  try{frame?.contentWindow?.postMessage({type:"lizzy-life-active",active:!!active},location.origin)}catch{}
}
function ensureFrame(){
  const frame=byId("lifeGameFrame");
  if(!frame)return null;
  if(!frame.getAttribute("src")){
    frame.setAttribute("src",frame.dataset.src||"life-game.html");
    frame.addEventListener("load",()=>send(true),{once:true});
  }
  return frame;
}
function openLife(){
  const win=byId("lifeModeWindow");
  if(!win)return;
  win.classList.remove("hidden");
  ensureFrame();
  setTimeout(()=>send(true),120);
}
function closeLife(){
  byId("lifeModeWindow")?.classList.add("hidden");
  send(false);
}
function boot(){
  byId("lifeModeIcon")?.addEventListener("click",openLife);
  byId("lifeModeIcon")?.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openLife()}});
  byId("lifeModeClose")?.addEventListener("click",closeLife);
  document.addEventListener("visibilitychange",()=>send(document.visibilityState==="visible"&&!byId("lifeModeWindow")?.classList.contains("hidden")));
  window.addEventListener("beforeunload",()=>send(false));
  window.LizzyLifeLauncher={open:openLife,close:closeLife};
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();

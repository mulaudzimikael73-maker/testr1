(()=>{
  function bindOpen(iconId, winId, frameId){
    const icon=document.getElementById(iconId), win=document.getElementById(winId), frame=document.getElementById(frameId);
    if(!icon||!win||!frame) return;
    const open=()=>{ win.classList.remove('hidden'); if(frame.dataset.src && !frame.src) frame.src=frame.dataset.src; };
    icon.addEventListener('click',open);
    icon.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ') { e.preventDefault(); open(); }});
  }
  function bindClose(btnId, winId){ const btn=document.getElementById(btnId), win=document.getElementById(winId); if(btn&&win) btn.addEventListener('click',()=>win.classList.add('hidden')); }
  document.addEventListener('DOMContentLoaded',()=>{
    bindOpen('coopWorldIcon','bankHeistWindow','bankHeistFrame');
    bindClose('bankHeistClose','bankHeistWindow');
    bindClose('closeBankHeist','bankHeistWindow');
  });
})();

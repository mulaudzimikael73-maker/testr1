(()=>{
  document.addEventListener('DOMContentLoaded',()=>{
    const icon=document.getElementById('bankHeistIcon');
    if(!icon)return;
    const open=()=>{window.location.href='bank-heist.html?role=lizzy';};
    icon.addEventListener('click',open);
    icon.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  });
})();

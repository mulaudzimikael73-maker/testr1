(()=>{'use strict';if(document.getElementById('lz-test-lab-launcher'))return;
const b=document.createElement('a');b.id='lz-test-lab-launcher';b.href='test-lab.html';b.textContent='🧪 Test Lab';b.setAttribute('aria-label','Open TESTR Lab');
Object.assign(b.style,{position:'fixed',right:'12px',bottom:'12px',zIndex:'2147483000',borderRadius:'12px',padding:'8px 12px',background:'#151a25',color:'#fff',font:'bold 12px system-ui',border:'1px solid #ffffff66',boxShadow:'0 3px 15px #0005',textDecoration:'none'});
document.body.appendChild(b);})();
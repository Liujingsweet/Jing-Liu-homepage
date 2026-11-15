const navLinks=[...document.querySelectorAll('.top-nav a')];
navLinks.forEach(link=>link.addEventListener('click',()=>{navLinks.forEach(l=>{const active=l===link;l.classList.toggle('active',active);active?l.setAttribute('aria-current','location'):l.removeAttribute('aria-current');});}));
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(link=>{const active=link.hash===`#${entry.target.id}`;link.classList.toggle('active',active);active?link.setAttribute('aria-current','location'):link.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -75% 0px'});
 document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
}
let copyTimer;
document.querySelector('.copy-email').addEventListener('click',async()=>{
 const status=document.querySelector('.copy-status');
 try{await navigator.clipboard.writeText('lsweet@mail.sdu.edu.cn');status.textContent='Email copied';}catch{status.textContent='Select the email address to copy it.';}
 clearTimeout(copyTimer);copyTimer=setTimeout(()=>status.textContent='',4000);
});

function toggleMenu(){
  const menu = document.getElementById('menu');
  const btn = document.querySelector('.nav-toggle');
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
}
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
});

const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#mainNav');
toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 const name=new FormData(e.currentTarget).get('name');
 document.querySelector('#formMessage').textContent=`Merci ${name} ! Votre demande a bien été prise en compte. (Prototype : aucun e-mail n'est envoyé.)`;
 e.currentTarget.reset();
});
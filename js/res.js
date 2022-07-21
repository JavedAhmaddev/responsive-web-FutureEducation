burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navlist=document.querySelector('.navlist')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('vclass');
    navlist.classList.toggle('vclass');
    navbar.classList.toggle('hnav');
})
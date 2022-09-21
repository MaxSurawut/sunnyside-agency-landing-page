const mobileMenuBtn = document.querySelector('.mobile-menu');
const mobileMenuPopup = document.querySelector('.menu-popup');


mobileMenuBtn.addEventListener('click',()=>{
    mobileMenuPopup.classList.toggle('active')
})
var burger = document.querySelector('.header__burger');
var block0 = document.querySelectorAll('.footer__block');
var title0 = document.querySelectorAll('.footer__title');


function btn(){
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__list3').classList.toggle('active');
   document.querySelector('.footer__last_img').classList.toggle('active');
   block0.forEach(item =>{
      item.classList.remove('active');
   });
   title0.forEach(item =>{
      item.classList.toggle('active');
   });
}

burger.onclick = btn;

// show cart

var basket_icon = document.querySelector('.header__icon');
var close_bask = document.querySelector('.cart__close');

function showCart() {
   document.querySelector('.cart').classList.add('active');
   document.querySelector('body').classList.add('active');
}
function hideCart() {
   document.querySelector('.cart').classList.remove('active');
   document.querySelector('body').classList.remove('active');
   document.querySelector('.window').classList.remove('active');
}

basket_icon.onclick = showCart;
close_bask.onclick = hideCart;

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}


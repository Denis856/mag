var title01 = document.querySelectorAll('.footer__title');

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});
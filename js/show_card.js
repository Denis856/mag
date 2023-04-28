const gallery = document.querySelectorAll('.rooms__item'),
preview_box = document.querySelector('.preview_box'),
shadow = document.querySelector('.shadow'),
preview_img = preview_box.querySelector('.img'),
current_img = document.querySelector('.current_img'),
total_img = preview_box.querySelector('.total_img'),
preview__title = preview_box.querySelector('.preview__title'),
burger2 = document.querySelector('.burger');


for(let i = 0; i < gallery.length; i++) {
   total_img.textContent = gallery.length;
   let newIndex = i;
   let clickImgIndex;
   gallery[newIndex].querySelector('.rooms__img').onclick = ()=>{
      clickImgIndex = newIndex;
      function preview(){
         current_img.textContent = newIndex + 1;
         let selectImgUrl = gallery[newIndex].querySelector('.rooms__img').src;
         preview_img.classList.add('img012');
         preview_img.src = selectImgUrl;
         let selectTitle = gallery[newIndex].querySelector('.rooms__text').textContent;
         preview__title.classList.add('title012');
         preview__title.textContent = selectTitle;
      }

      let prev = document.querySelector('.prev');
      let next = document.querySelector('.next');
      if(newIndex == 0) {
         prev.style.display = 'none';
      }
      if(newIndex >= gallery.length - 1) {
         next.style.display = 'none';
      }

      prev.onclick = ()=> {
         newIndex--;
         if(newIndex == 0) {
            preview();
            prev.style.display = 'none';
         } else {
            preview();
            next.style.display = 'flex';
         }
      };
      next.onclick = ()=> {
         newIndex++;
         if(newIndex >= gallery.length - 1) {
            preview();
            next.style.display = 'none';
         } else {
            preview();
            prev.style.display = 'flex';
         }
      };

      preview();
      preview_box.classList.add('show');
      shadow.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('.header').style.display = 'none';
      burger2.addEventListener('click', ()=>{
         newIndex = clickImgIndex;
         preview_box.classList.remove('show');
         document.querySelector('.header').style.display = 'block';
         prev.style.display = 'flex';
         next.style.display = 'flex';
         shadow.style.display = 'none';
         document.querySelector('body').style.overflow = 'auto';
      }
   );
   };
}


var indexValue = 1;
showImg(indexValue);

function side_slide(e) {showImg(indexValue += e);}
function showImg(e) {
    var i;
    var img = document.querySelectorAll('.portfolio__img');
    if(e > img.length) {indexValue = 1;}
    if(e < 1) {indexValue = img.length;}
    for(i = 0; i < img.length; i++) {
        img[i].style.opacity = "0";
    }
    img[indexValue - 1].style.opacity = "1";
}

// next

var productContainers = document.querySelectorAll('.portfolio0__blobk_img');
var item20 = document.querySelectorAll('.image1')[0];
var nxtBtn = document.querySelectorAll('.portfolio__left');
var preBtn = document.querySelectorAll('.portfolio__right');

productContainers.forEach((item, i) => {
    let containerWidth = item20.clientWidth + 20;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
    
});

// next

const filterImage = document.querySelectorAll('.image');


window.onload = () => { // once window loaded 
   for (let index = 0; index < filterImage.length; index++) {
      filterImage[index].setAttribute('onclick', 'preview(this)'); // adding onclick attribute in all avaibale images
   }
}

const previewBox = document.querySelector('.preview_box'),
previewImg = previewBox.querySelector('img'),
categoryName = previewBox.querySelector('.title p'),
closeIcon = previewBox.querySelector('.close'),
shadow = document.querySelector('.shadow');

function preview(element) {
   // once user click on any image then remove the scrollbar of the body, so user cant scroll up or down
   document.querySelector('body').style.overflow = 'hidden';
   let selectedPrevImg = element.querySelector('img').src; // getting user clicked image source link and store in a variable 
   let selectedImageName = element.getAttribute('data-name'); // getting user clicked data-name value
   categoryName.textContent = selectedImageName; // passing the data-name value to category name variable
   previewImg.src = selectedPrevImg; // passing the user clicked image source in the preview image source
   previewBox.classList.add('show'); // show the preview box
   shadow.classList.add('show'); // show the light gey background 
   closeIcon.onclick = () => { // if user click on the close icon of the preview bow
      previewBox.classList.remove('show'); // hide the preview box
      shadow.classList.remove('show'); // hide the light gey background 
      document.querySelector('body').style.overflow = 'scroll'; // show the scroll of the body
   }
}

// next 
var animates = document.querySelectorAll('.anim_item');

if(animates.length > 0) {
   window.addEventListener('scroll', animScroll);
   function animScroll() {
      for(let index = 0; index < animates.length; index++) {
         const anim = animates[index];
         const animHeight = anim.offsetHeight;
         const animOffset = offset(anim).top;
         const animStart = 4;

         let aniItemPoint = window.innerHeight - animHeight / animStart;

         if(animHeight > window.innerHeight) {
            aniItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if((pageYOffset > animOffset - aniItemPoint) && pageYOffset < (animOffset + animHeight)) {
            anim.classList.add('active');
         } else {
            if(!anim.classList.contains('anim_no_h')) {
               anim.classList.remove('active');
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
      }
   }
   setTimeout(() => {
      animScroll();
   }, 300);
}
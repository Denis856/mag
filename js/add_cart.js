var add_btn = document.querySelectorAll('.bestsellers__btn');
var gallery2 = document.querySelector('.cart__items');
var count = document.querySelector('.header__basket span');
var total = 0;

add_btn.forEach(item => {
   item.addEventListener('click', (e)=>{
      var parent = e.target.parentNode;
      var product = document.createElement('div');
      product.classList.add('product');
      var img1 = document.createElement('img');
      img1.classList.add('product__img');
      img1.setAttribute('src',parent.querySelector('img').currentSrc);
      
      var title = document.createElement('p');
      title.innerText = parent.querySelector('.bestsellers__title2').innerText;
      
      var price = document.createElement('p');
      price.classList.add('product__price');
      price.innerText = parent.querySelector('.bestsellers__span3').innerText;
      
      var btn = document.createElement('button');
      btn.classList.add('product__btn');
      btn.textContent = 'DEL';

      product.appendChild(img1);
      product.appendChild(title);
      product.appendChild(price);
      product.appendChild(btn);
      gallery2.appendChild(product);

      
      btn.addEventListener('click', ()=> {
         gallery2.removeChild(product);
         updatetotal();
      });
      updatetotal();
   });
});

function updatetotal(){
   var cartContent = document.getElementsByClassName('cart__items')[0];
   var carboxes = cartContent.getElementsByClassName('product');
   count.classList.add('count');
   count.innerHTML = carboxes.length;
   if (carboxes.length == 0) {
      count.innerHTML = '';
      count.classList.remove('count');
   }
   var total = 0;
   for(var i = 0; i < carboxes.length; i++){
      var cartBox = carboxes[i];
      var priceElem = cartBox.getElementsByClassName('product__price')[0];
      var price = parseFloat(priceElem.innerText.replace("$", ""));
      total = total + price;
   }
      // if price has some cents
      total = Math.round(total * 100) / 100;

      document.getElementsByClassName('cart__total2')[0].innerText = '$' + total;
}
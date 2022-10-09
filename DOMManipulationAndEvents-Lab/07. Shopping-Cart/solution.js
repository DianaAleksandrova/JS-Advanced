function solve() {
  let shoppingCard = document.getElementsByClassName('shopping-cart')[0];
  let result = document.getElementsByTagName('textarea')[0];

  let productList = [];
  let totalSum = 0;

  let checkoutDone = false;

  shoppingCard.addEventListener('click', function(event) {
      if(event.target.nodeName !== 'BUTTON') {
         return;
      }

      if(checkoutDone) {
         return;
      }

      let button = event.target;

      if(Array.from(button.classList).indexOf('add-product') >= 0) {
      let product = event.target.parentElement.parentElement;

      let name = product.querySelectorAll('.product-title')[0].textContent;
      let price = product.querySelectorAll('.product-line-price')[0].textContent;

      result.textContent += `Added ${name} for ${price} to the cart.\n`

      if(productList.indexOf(name) < 0) {
         productList.push(name);
      }
      totalSum += Number(price);

   } else if(Array.from(button.classList).indexOf('checkout') >= 0) {
      let list = productList.join(', ');
       result.textContent += `You bought ${list} for ${totalSum.toFixed(2)}.`;
       checkoutDone = true;
   }
  });
}
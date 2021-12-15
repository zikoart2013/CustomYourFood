function toCheckout(){
  let  cart = [];
  let cartElements = document.getElementsByTagName('input'); 
  for(let i=0; i<cartElements.length; i++){

    if(cartElements[i].checked==true){
      let cartItem={
        name:cartElements[i].value,
        price:cartElements[i].getAttribute('price'),
      }
      cart.push(cartItem);
    }
  }
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href="checkout.html";
}

function block(){
  

}

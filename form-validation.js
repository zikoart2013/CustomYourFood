// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
        window.open("thanks.html"); //???//
        
      }, false)
      
    })
    
})()



window.onload= function(){ //Lucruri ce se intampla la incarcarea paginii//
  let cart = localStorage.getItem('cart'); //
  let cartArray = JSON.parse(cart); //Convertire la JSON//
  console.log(cartArray); //Verificam daca apar elementele selectate de la Order//
  
  let cartlist=document.getElementById('orderlist'); //checkout//
  let total=0;

  for(let i=0; i<cartArray.length; i++){
    let li=document.createElement('li');
    li.className='list-group-item d-flex justify-content-between lh-sm';

    let div=document.createElement('div');
    let h6=document.createElement('h6');
    h6.className='my-0';
    
    h6.innerText=cartArray[i].name;

    div.appendChild(h6);

    li.appendChild(div);

    let span=document.createElement('span');

    span.className='text-muted';
    span.innerText=cartArray[i].price +'$';

    li.appendChild(span);

    cartlist.appendChild(li);
    total+=parseInt(cartArray[i].price);

  }

  let totalLi=document.createElement('li');
  totalLi.className='list-group-item d-flex justify-content-between lh-sm';
  let divTotal = document.createElement('div');
  let h6Total=document.createElement('h6');
  h6Total.className='my-0 text-secondary';
  h6Total.innerText='TOTAL';
  divTotal.appendChild(h6Total);

    totalLi.appendChild(divTotal);
  let spanTotal=document.createElement('span');
  spanTotal.className='text-muted';
  spanTotal.innerText=total +'$';
  totalLi.appendChild(spanTotal);
  cartlist.appendChild(totalLi);

}


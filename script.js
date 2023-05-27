
let minusBtn = document.querySelector(".quantity-left-minus");
let plusBtn = document.querySelector(".quantity-right-plus");
let cartNum = document.getElementById("cart-num");
let quantity = document.getElementById("quantity");
let cartBody = document.querySelector(".modal-body");
let addToCart =document.getElementById("addToCart");
let quantityNumber=0;
const cart = [];
const productsArr =[
    {
        name:"Fall Limited Edition Sneakers",
        price: 125,
        imgUrl:"images/image-product-1-thumbnail.jpg"

    }
];

// function addProduct(pObject, quantity){
//     cartBody.innerHTML = ` <div class="d-flex my-3">
    
//     <div class="d-flex"><img src="${pObject.imgUrl}" alt="${pObject.name}"
//         class="img-fluid cart-img rounded">
//       <div class="d-flex flex-column  justify-content-center mx-2">

//         <span class="text-secondary-emphasis">${pObject.name}</span>
//         <span>${pObject.price} ${quantity} <span class="fw-bold">${(pObject.price)*quantity}</span></span>

//       </div>

//     </div>
//     <div role="button" class="remove border-0 bg-transparent ms-auto">
//       <img src="images/icon-delete.svg" alt="delete" class="d-icon">
//     </div>
//   </div>`
// }
function cartRefresh(){

    cartNum.innerHTML = quantityNumber;
    if(quantityNumber==0){
        cartBody.innerHTML=`    <div class="" id="isCartEmpty">Your cart is empty</div>
        `
        
    }else{
    cartBody.innerHTML = ` <div class="d-flex my-3">
    
 <div class="d-flex"><img src="${productsArr[0].imgUrl}" alt="${productsArr[0].name}"
        class="img-fluid cart-img rounded">
      <div class="d-flex flex-column  justify-content-center mx-2">

        <span class="text-secondary-emphasis">${productsArr[0].name}</span>
        <span>$${productsArr[0].price} x${quantityNumber} <span class="fw-bold">$${(productsArr[0].price)*quantityNumber}</span></span>
     </div>

    </div>
     <div role="button" class="remove border-0 bg-transparent ms-auto">
       <img src="images/icon-delete.svg" alt="delete" class="d-icon">
    </div>
   </div>`;
    }
    // addProduct(cart[0] , quantityNumber);

    
}

plusBtn.addEventListener('click',()=>{
    if(quantityNumber <=100){
    quantityNumber++;
    quantity.value=quantityNumber;
    }


});
minusBtn.addEventListener('click',()=>{
    if(quantityNumber>=0){
    quantityNumber--;
    quantity.value=quantityNumber;
    }
    
})
addToCart.addEventListener('click',()=>{
    cartRefresh();
}
)

    
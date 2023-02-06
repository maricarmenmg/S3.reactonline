

// Array with products (objects) added directly with push(). Products in this array are repeated.

let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

let cart = [];
let total = 0;


// Exercise 1

function buy(id) {

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    for (i = 0; i < products.length; i++){
        if (products[i].id == id){
            cartList.push(products[i]);
            
        }
     }
     calculateTotal() 
     //console.log("Add Products Cart", cartList);
}

// Exercise 2
function cleanCart() {
   // 1. Vaciamos el array cartList
cartList = [];
console.log("Clean Cart", cartList);

}

// Exercise 3
function calculateTotal() {
   // 1. Loop for to the array cartList to get the total price of the cart
   
   let total = 0;
   for (let i = 0; i < cartList.length; i++) {  // for itera a través del array cartList y agrega el precio de cada artículo a la variable total.
        total += cartList[i].price;
   }
   console.log("Total Cart", total);

}

// Exercise 4
function generateCart() {

    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   //  ℹ️ findIndex: Devuelve el índice del primer elemento de la matriz donde el predicado es verdadero y -1 en caso contrario.


let cart = []; // Array cart

 for(let i = 0; i < cartList.length; i++){  // Iteramos en el array cartList.
    let found = cart.findIndex(producto => producto.id == cartList[i].id); // Buscamos el producto en el array cart.
       // Si el producto no está en el array cart, lo agregamos. Si no existe, añadimos un nuevo producto al array cart / propiedad "quantity".
    if(found == -1){
        cart.push({...cartList[i], quantity: 1, subtotal: cartList[i].price});
    } else {
        cart[found].quantity++; // Si ya existe aumenta la cantidad del producto.
        cart[found].subtotal += cartList[i].price; // Agrega el precio al subtoatal.
    }

}
       console.log("Generate Cart", cart);
}





// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}



// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}




// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array


}

function open_modal(){
	console.log("Open Modal");
	printCart();
}

// Array with products (objects) added directly with push(). Products in this array are repeated.

let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
let total = 0;


// Exercise 1
function buy(id) {

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);

        }
    }
    calculateTotal()
    //console.log("Add Products Cart", cartList);
}

// Exercise 2
function cleanCart() {
    cart = [];
    //cartList = []; // 1. Vaciamos el array cartList
    printCart();
    console.log("Clean Cart", cartList);
}

// Exercise 3
function calculateTotal() {
    // 1. Loop for to the array cartList to get the total price of the cart

    let total = 0;
    for (let i = 0; i < cartList.length; i++) { // for itera a través del array cartList y agrega el precio de cada artículo a la variable total.
        total += cartList[i].price;
    }
    console.log("Total Cart", total);

}

// Exercise 4
function generateCart() {
    
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   //  ℹ️ findIndex: Devuelve el índice del primer elemento de la matriz donde el predicado es verdadero y -1 en caso contrario.

   for (let i = 0; i < cartList.length; i++) {  // Recorremos con for cartList.
    const item = cartList[i]; // Iteramos tomamos el elemento de cartlist y la guardamos en item .
    const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingIndex === -1) {  // Si el producto no está en el array cart, lo agregamos. Si no existe, añadimos un nuevo producto al array cart.
      cart.push({...item, quantity: 1, subtotal: item.price, subtotalWithDiscount: 0,});
    } else {
      cart[existingIndex].quantity++; // Si ya existe aumenta la cantidad del producto.
      cart[existingIndex].subtotal += item.price; // Agrega el precio al subtotal.
    }
  }

     printCart();
     applyPromotionsCart();
     console.log("Generated Cart", cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // Si el usuario compra 3 o más botellas de aceite, el precio del producto desciende 10 euros.
    // Cuando se compran 10 o más productos para hacer pastel, su precio se rebaja a 2/3.

for (let i = 0; i < cart.length; i++) {

    if (cart[i].id === 1 && cart[i].quantity >= 3) {
        cart[i].subtotalWithDiscount = (cart[i].subtotal - 10).toFixed(2);

        console.log("Subtotal con descuento:", cart[i].name, cart[i].subtotalWithDiscount);
        
    } else if (cart[i].id === 3 && cart[i].quantity >= 10) {
        cart[i].subtotalWithDiscount = ((cart[i].subtotal / 3) * 2).toFixed(2);

        console.log("Subtotal con descuento:", cart[i].name, cart[i].subtotalWithDiscount);

    } else {
        cart[i].subtotalWithDiscount = cart[i].subtotal
        
    }
}
    console.log("Promotions Cart",cart);

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    document.getElementById("cart_list").innerHTML = "";
   
    let totalPrice = 0;
    //let countProduct = 0;

    for (let i = 0; i < cart.length; i++) { // bucle iteramos a través de los items del carrito.

        // Agregamos contenido existente en el elemento  ID cart list
        document.getElementById("cart_list").innerHTML += `
        <tr>
            <td>${cart[i].name}</td>
            <td>${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>${cart[i].subtotalWithDiscount}</td>
        </tr>
        `
        totalPrice += cart[i].subtotalWithDiscount;
        //countProduct += cart[i].quantity;
}
       document.getElementById("total_price").innerHTML = totalPrice.toFixed(2); // Redondear el total price
       //document.getElementById("count_product").innerHTML = countProduct; // Redondear el total price

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    const countProduct = [];

    for (let i = 0; i < cart.length; i++) { // bucle iteramos a través de los items del carrito.
        countProduct.push(`${cart[i].name} - $${cart[i].price}`);
    }
    
    console.log(countProduct);


}




// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array


}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
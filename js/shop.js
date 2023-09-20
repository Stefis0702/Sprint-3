// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [{
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 4.5
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 33
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;



// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart

    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            // 2. Add found product to the cartList array
            cartList.push(products[i])

        }

    }
    console.log("New cart", cartList)
}


// Exercise 2
function cleanCart() {
    cartList.splice(0);
     tableBody=document.querySelector("tbody#cart_list");
     tableBody.innerHTML="";
     total=document.querySelector("span#total_price");
     total.innerHTML="";


        console.log("splice", cartList)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].subtotalWithDiscount != undefined) {
            total += cart[i].subtotalWithDiscount;

       } else {
        total += cart[i].subtotal;
       }
        
        
        
    }
    console.log("Total carrito", total.toFixed(2))
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,

    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // for (let i = 0; i < cartList.length; i++) {
    //   const artexist = cart.findIndex(item => item.id == cartList[i].id);
    //     if (artexist == -1) {
    //         cart.push(cartList[i]);
    //         cart[i].quantity = 1;


    //     } else {
    //         cart[artexist].quantity ++;
    //     }
    // }

    // console.log("cart", cart);
    let itemEncont;

    cartList.forEach((item) => {
        itemEncont = cart.find((product) => product.id === item.id);
        if (itemEncont == undefined) {
            item.quantity = 1;
            cart.push(item);
        } else {
            itemEncont.quantity++;
        }

    })
    console.log("nCart", cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // for(let i =0; i<cart.length; i ++){
    //     const productDis=cart[i];

    //     console.log("id producto",productDis)

    //    if(productDis.name==='cooking oil' && productDis.quantity >= 3){
    //     productDis.subtotalWithDiscount=(productDis.quantity*10)
    //    }
    // }
    // console.log("descuento",cart)


    // for(let i =0; i<cart.length; i ++){

    // if(products.offer.number>=products.quantity){
    //     precioDescuento = products.price - (products.offer.percent*products.price/100)
    // }

    cart.forEach((item) => {
        item.subtotal = item.price * item.quantity;
        if (item.offer != undefined) {
            if (item.quantity >= item.offer.number) {
                item.subtotalWithDiscount = Math.floor(
                    item.subtotal - (item.subtotal * item.offer.percent) / 100
                );
            }
        }
    });
    console.log("descuento", cart)
}

// Exercise 6
function printCart() {
    generateCart();
    applyPromotionsCart();
    calculateTotal();
    printItems()
    printTotal()
}


function printItems() {
    let finalTotal;
    // Fill the shopping cart modal manipulating the shopping cart dom
    let tableBody = document.querySelector("tbody#cart_list");
   // console.log("table",tableBody);
    let tableRow;

    tableBody.innerHTML = "";

    cart.forEach((item) => {
        tableRow = document.createElement("tr");

        if (item.subtotalWithDiscount != undefined) {
             finalTotal = item.subtotalWithDiscount

        } else {
            finalTotal = item.subtotal
        }


        tableRow.innerHTML = `
                <th scope="row">${item.name}</th>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${finalTotal}</td>
        `;

        tableBody.appendChild(tableRow);
    })

}
function printTotal() {
    document.getElementById("total_price").innerHTML = total;
}






// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();

}
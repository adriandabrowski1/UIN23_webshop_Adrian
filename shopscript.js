let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, 
    productQuantity: 1})
    document.querySelector("#cartview").classList.remove("hidden");
    
    console.log(cart)
    // Etter å ha lagt til et produkt; oppdater handlelistevisning:
    renderCart()
    //Så må vi oppdatere label med antall produkter:
    document.querySelector("#cart .label").innerHTML = cart.length;
}

function renderCart() {
    //tom variabel for å bygge HTML til produkter
    let listHTML = ""
    let totalPrice = 0
    // gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete">X</button>
</li>`)
cart.map(Price => totalPrice += Price.productPrice) 

// bruke en selector for å finne riktig <ul>, og skrive inn listHTML:
document.querySelector("#cartview ul").innerHTML = listHTML
document.querySelector('#total').innerHTML = totalPrice 

}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden");
}

let storage=JSON.parse(localStorage.getItem("cart"));

let cart={
    gpu1:{name:'ASUS RTX4090 顯示卡',
        price:62590},
    gpu2:{name:'MSI RTX4080 顯示卡',
        price:40000},
    mouse:{name:'羅技 G502X Plus 電競滑鼠',
        price:4100},
    keyBoard1:{name:'ASUS ROG 電競鍵盤',
        price:3950},
    keyboard2:{name:'Ducky One3 機械式鍵盤',
        price:3990},
    headset:{name:'HyperX Cloud III 電競耳機',
        price:3000},
    cpu:{name:'Intel i9-14900K',
        price:50000},
    monitor:{name:'Zowie by BenQ XL2566K電競螢幕',
        price:25000},
    cartNum:0,
    totalPrice:0,
}
showCart()

function save(){
    let storage=JSON.stringify(cart);
    localStorage.setItem("cart", storage);
}

function showCart(){
    document.getElementById("finalcheck").innerText=
    `目前總額:${+cart.totalPrice}
    目前數量:${+cart.cartNum}`
}

function clearCart(){
    cart.totalPrice=0;
    cart.cartNum=0;
    localStorage.removeItem("cart");
    showCart();
}


function total1(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

function total2(){
    cart.cartNum++
    cart.totalPrice+=40000;
    save();
    showCart();
}

function total3(){
    cart.cartNum++
    cart.totalPrice+=4100;
    save();
    showCart();
}

function total4(){
    cart.cartNum++
    cart.totalPrice+=3950;
    save();
    showCart();
}

function total5(){
    cart.cartNum++
    cart.totalPrice+=3990;
    save();
    showCart();
}

function total6(){
    cart.cartNum++
    cart.totalPrice+=3000;
    save();
    showCart();
}

function total7(){
    cart.cartNum++
    cart.totalPrice+=50000;
    save();
    showCart();
}

function total8(){
    cart.cartNum++
    cart.totalPrice+=25000;
    save();
    showCart();
}




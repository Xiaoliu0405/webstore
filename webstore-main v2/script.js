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
    monitor:{name:'Zowie XL2566K電競螢幕',
        price:25000},
    cartNum:0,
    totalPrice:0,
}
showCart()

document.getElementById("order").addEventListener("click", bag)
function bag() {
  let aside = document.getElementById("aside");
  if(aside.style.display == "none"){
    aside.style.display = "block";
 } else {
    aside.style.display = "none";
 }
}

function save(){
    let storage=JSON.stringify(cart);
    localStorage.setItem("cart", storage);
}

function showCart(){
    document.getElementById("finalcheck").innerText=
    `目前總額:${+cart.totalPrice}
    目前數量:${+cart.cartNum}`
}
document.getElementById("clear").addEventListener("click",clearCart)
function clearCart(){
    cart.totalPrice=0;
    cart.cartNum=0;
    localStorage.removeItem("cart");
    showCart();
}

document.getElementById("1").addEventListener("click",total1)
function total1(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("2").addEventListener("click",total2)
function total2(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("3").addEventListener("click",total3)
function total3(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("4").addEventListener("click",total4)
function total4(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("5").addEventListener("click",total5)
function total5(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("6").addEventListener("click",total6)
function total6(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("7").addEventListener("click",total7)
function total7(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}

document.getElementById("8").addEventListener("click",total8)
function total8(){
    cart.cartNum++;
    cart.totalPrice+=62590;
    save();
    showCart();
}




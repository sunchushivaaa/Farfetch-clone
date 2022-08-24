let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");

home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);

function homeFun(){
    window.location.href = "/Day 2/Html/index.html";
}

function likeFun(){
    window.location.href = "/Day 2/Html/like.html";
}

function cartFun(){
    window.location.href = "/Day 2/Html/cart.html";
}
function accountFun(){
    window.location.href = "/Day 2/Html/account.html";
}
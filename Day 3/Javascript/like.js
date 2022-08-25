let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let likewall = document.getElementById("likewall");

home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);
men.addEventListener("click", menFun);
women.addEventListener("click", womenFun);
kids.addEventListener("click", kidsFun);

let likedArr = JSON.parse(localStorage.getItem("liked-prods")) || [];

function homeFun(){
    window.location.href = "/Day 3/Html/index.html";
}

function likeFun(){
    window.location.href = "/Day 3/Html/like.html";
}

function cartFun(){
    window.location.href = "/Day 3/Html/cart.html";
}
function accountFun(){
    window.location.href = "/Day 3/Html/account.html";
}
function womenFun(){
    window.location.href = "/Day 3/Html/women.html";

}
function menFun(){
    window.location.href = "/Day 3/Html/men.html";

}
function kidsFun(){
    window.location.href = "/Day 3/Html/kids.html";

}
function displayTable(read){
    likewall.innerHTML = "";

    read.forEach(function(elem){

        let block = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image_url);

        let p1 = document.createElement("p");
        p1.innerText = elem.season;

        let p2 = document.createElement("p");
        p2.innerText = elem.brand;

        let p3 = document.createElement("p");
        p3.innerText = elem.desc;

        let p4 = document.createElement("p");
        p4.innerText = `$${elem.price}`;

        let btnRemove = document.createElement("button");
        btnRemove.innerText = "Remove";

        let btnCart = document.createElement("button");
        btnCart.innerText = "Add to cart";

        block.append(image, p1, p2, p3, p4, btnRemove, btnCart);
        likewall.append(block);
    })
}
displayTable(likedArr);
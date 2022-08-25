let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let route = document.querySelectorAll("#route");
let div = document.querySelector("#newin>div:nth-child(2)");
let div2 = document.querySelector("#discover>div:nth-child(2)");

home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);
men.addEventListener("click", menFun);
women.addEventListener("click", womenFun);
kids.addEventListener("click", kidsFun);

for(let a=0; a<route.length; a++){
    route[a].addEventListener("click", routeFun);
}

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
function routeFun(){
    window.location.href = "/Day 3/Html/route.html";
}

var newinWomenData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/91/58/58/17915858_41169203_600.jpg",
      season: "New Season",
      brand: "Amina Muaddi",
      desc: "Lupita 110mm mules",
      price: "1,234",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/03/09/21/18030921_41131827_600.jpg",
      season: "New Season",
      brand: "Tallwe Marmo",
      desc: "Mambo cold-shoulder halterneck kaftan dress",
      price: "1,566",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/03/60/34/18036034_41165465_600.jpg",
      season: "New Season",
      brand: "Alexandre Vauthier",
      desc: "houndstooth-pattern double-breasted blazer",
      price: "3,734",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/69/41/06/18694106_41155622_600.jpg",
      season: "New Season",
      brand: "Balenciaga",
      desc: "Neo Cagole XS metallic tote bag",
      price: "2,500",
    },
  ];
  
var trendingnowWomenData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/47/56/27/18475627_39862370_600.jpg",
      season: "New Season",
      brand: "Dolce & Gabbana",
      desc: "graffiti-print hooded jacket",
      price: "1,275",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/64/09/46/18640946_41092198_600.jpg",
      season: "New Season",
      brand: "Balenciaga",
      desc: "mini Neo Classic City tote",
      price: "1,730",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/89/88/83/18898883_41078997_600.jpg",
      season: "New Season",
      brand: "Coperni",
      desc: "hybrid flared trousers",
      price: "1,338",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/62/10/43/18621043_40304024_600.jpg",
      season: "New Season",
      brand: "The Attico",
      desc: "Devon glittered sandals",
      price: "2,001",
    },
  ];

let likedArr = JSON.parse(localStorage.getItem("liked-prods")) || [];

function displayTable(read){
    div.innerHTML = "";

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

        let btn = document.createElement("button");
        btn.innerHTML = "❤️";
        btn.addEventListener("click", function(){
            btn.innerHTML = `Liked ❤️`
            likedArr.push(elem);
            localStorage.setItem("liked-prods", JSON.stringify(likedArr));
        });

        block.append(image, p1, p2, p3, p4, btn);
        div.append(block);
    })
}

displayTable(newinWomenData);

function displayTable2(read){
    div2.innerHTML = "";

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

        let btn = document.createElement("button");
        btn.innerHTML = "❤️";
        btn.addEventListener("click", function(){
            btn.innerHTML = `Liked ❤️`
            likedArr.push(elem);
            localStorage.setItem("liked-prods", JSON.stringify(likedArr));
        });

        block.append(image, p1, p2, p3, p4, btn);
        div2.append(block);
    })
}
displayTable2(trendingnowWomenData);
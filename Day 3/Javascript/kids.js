let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let route = document.querySelectorAll("#route");
let div = document.querySelector("#discover>div:nth-child(2)");

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

var kidsData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/57/14/98/18571498_40261136_600.jpg",
      season: "New Season",
      brand: "Palm Angels kids",
      desc: "teddy-bear print T-shirt",
      price: "236",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/40/93/83/18409383_40363486_600.jpg",
      season: "New Season",
      brand: "Kenzo Kids",
      desc: "Tiger logo-print T-shirt",
      price: "139",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/78/46/90/18784690_40815599_600.jpg",
      season: "New Season",
      brand: "Stella McCartney Kids",
      desc: "graphic-print sustainable cotton T-shirt",
      price: "89",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/74/72/28/18747228_40596157_600.jpg",
      season: "New Season",
      brand: "Moncler Enfant",
      desc: "logo-patch short-sleeve T-shirt",
      price: "188",
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
        p4.style.cursor = "pointer";
        p4.addEventListener("click", function(){
          let rupees = Number(elem.price)*80;
          p4.innerText = "₹" + rupees;
        });

        let btn = document.createElement("button");
        btn.innerHTML = "❤️";
        btn.addEventListener("click", function(){
            btn.innerHTML = `Liked`
            btn.style.color = "red";
            btn.style.fontWeight = "bold";
            likedArr.push(elem);
            localStorage.setItem("liked-prods", JSON.stringify(likedArr));
        });

        block.append(image, p1, p2, p3, p4, btn);
        div.append(block);
    })
}

displayTable(kidsData);

let dataArr = JSON.parse(localStorage.getItem("data")) || [];

let data = document.getElementById("emailid");
let send = document.getElementById("send");

send.addEventListener("click", function(){
    let x = data.value;

    let out;
    for(let z=0; z<dataArr.length; z++){
        if(dataArr[z].email==x){
            out = true;
            break;
        }
    }
    if(out==true){
        alert("You are already our registered customer");
    }else{
        alert("Thank you for your trust. Email has been sent!");
    }

    let dataObj = {"email": x,};
    dataArr.push(dataObj);
    localStorage.setItem("data", JSON.stringify(dataArr));

    window.location.reload();
})

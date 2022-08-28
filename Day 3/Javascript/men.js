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
var newinMenData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/53/44/66/18534466_41129174_600.jpg",
      season: "New Season",
      brand: "Off-White",
      desc: "graphic-print Arrows T-shirt>",
      price: "507",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/82/32/22/18823222_41059709_600.jpg",
      season: "New Season",
      brand: "AMBUSH",
      desc: "x Nike Air Adjust Force sneakers",
      price: "461",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/87/24/47/18872447_41160721_600.jpg",
      season: "New Season",
      brand: "AMIRI",
      desc: "distressed patchwork skinny jeans",
      price: "2945",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/42/24/56/18422456_40550484_600.jpg",
      season: "New Season",
      brand: "Acne Studios",
      desc: "mini Face crossbody bag",
      price: "339",
    },
  ];

var trendingnowmenData = [
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/73/38/64/18733864_40509964_600.jpg",
      season: "New Season",
      brand: "Versace",
      desc: "contrast-sleeve leather",
      price: "4749",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/17/73/05/62/17730562_40388261_600.jpg",
      season: "New Season",
      brand: "Balenciaga",
      desc: "Car East-West medium tote",
      price: "1730",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/45/80/73/18458073_39824889_600.jpg",
      season: "New Season",
      brand: "Marni",
      desc: "logo-print T-shirt",
      price: "475",
    },
    {
      image_url:
        "https://cdn-images.farfetch-contents.com/18/53/61/89/18536189_40903664_600.jpg",
      season: "New Season",
      brand: "Off-White",
      desc: "Zip-Tie lace-up sneakers",
      price: "1248",
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
            btn.innerHTML = `Liked`;
            btn.style.color = "red";
            btn.style.fontWeight = "bold";
            likedArr.push(elem);
            localStorage.setItem("liked-prods", JSON.stringify(likedArr));
        });

        block.append(image, p1, p2, p3, p4, btn);
        div.append(block);
    })
}

displayTable(newinMenData);

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
        p4.style.cursor = "pointer";
        p4.addEventListener("click", function(){
          let rupees = Number(elem.price)*80;
          p4.innerText = "₹" + rupees;
        });

        let btn = document.createElement("button");
        btn.innerHTML = "❤️";
        btn.addEventListener("click", function(){
            btn.innerHTML = `Liked`;
            btn.style.color = "red";
            btn.style.fontWeight = "bold";
            likedArr.push(elem);
            localStorage.setItem("liked-prods", JSON.stringify(likedArr));
        });

        block.append(image, p1, p2, p3, p4, btn);
        div2.append(block);
    })
}
displayTable2(trendingnowmenData);

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
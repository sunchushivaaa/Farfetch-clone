let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let wall = document.getElementById("checkoutwall");
let total = document.getElementById("total");
let button = document.querySelector("#checkout>button");

home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);
men.addEventListener("click", menFun);
women.addEventListener("click", womenFun);
kids.addEventListener("click", kidsFun);
button.addEventListener("click", buttonFun);

let cartArr = JSON.parse(localStorage.getItem("cart-prods")) || [];

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
let count = 0;
function displayTable(read){

    read.forEach(function(elem,i){

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
        count+= Number(elem.price);
        p4.addEventListener("click", function(){
            let rupees = Number(elem.price)*80;
            p4.innerText = "₹" + rupees;
        });
        

        let btnRemove = document.createElement("button");
        btnRemove.innerText = "Remove";
        btnRemove.addEventListener("click", function(){
            event.target.parentNode.remove();
            cartArr.splice(i,1);
            localStorage.setItem("cart-prods" , JSON.stringify(cartArr));
        });

        block.append(image, p1, p2, p3, p4, btnRemove);
        wall.append(block);
    })
    total.append(count);
}
displayTable(cartArr);

total.addEventListener("click", function(){
    let x = document.querySelectorAll("#checkout>h2>span");
    let y = Number(total.innerText*80);
    for(let a=0; a<x.length; a++){
        if(a==0){
            x[a].innerText = "₹";
        } else{
            x[a].innerText = y;
        }
    }
},{once : true})


function buttonFun(){
    window.location.href = "/Day 3/Html/payment.html";
    let amount = total.innerText;
    localStorage.setItem("amount", JSON.parse(amount));
}



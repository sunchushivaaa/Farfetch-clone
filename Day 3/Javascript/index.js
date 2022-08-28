let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let shopmen = document.getElementById("menshop");
let shopwomen = document.getElementById("womenshop");
let shopkids = document.getElementById("kidshop");


home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);
men.addEventListener("click", menFun);
women.addEventListener("click", womenFun);
kids.addEventListener("click", kidsFun);
shopmen.addEventListener("click", shopmenFun);
shopwomen.addEventListener("click", shopwomenFun);
shopkids.addEventListener("click", shopkidsFun);

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
function shopmenFun(){
    window.location.href = "/Day 3/Html/men.html";
}
function shopwomenFun(){
    window.location.href = "/Day 3/Html/women.html";
}
function shopkidsFun(){
    window.location.href = "/Day 3/Html/kids.html";
}

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
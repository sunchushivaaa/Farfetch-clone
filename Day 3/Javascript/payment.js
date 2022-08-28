
let back = document.querySelector("button");
let amount = JSON.parse(localStorage.getItem("amount"));
let submit = document.querySelector("#submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let money = document.getElementById("amount");
let card = document.getElementById("card");
let date = document.getElementById("date");
let cvv = document.getElementById("cvv");

document.querySelector("#amount").value = amount;

let login = JSON.parse(localStorage.getItem("login-details"));
if(login.length != 0){
    document.querySelector("#name").value = login.name;
    document.querySelector("#email").value = login.email;
    document.querySelector("#phone").value = login.phone;
}


back.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "/Day 3/Html/cart.html";
});


submit.addEventListener("submit", function(event){
    event.preventDefault();
    name.value;
    email.value;
    phone.value;
    money.value;
    card.value;
    date.value;
    cvv.value;
    
    if(name == "" || email == "" || phone == "" || money == "" || card == "" || date == "" || cvv == "" ){

    } else{
        alert("Payment processed");
    }
});
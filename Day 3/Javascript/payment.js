
let back = document.querySelector("button");
let amount = JSON.parse(localStorage.getItem("amount"));
let submit = document.querySelector("#submit");

document.querySelector("#amount").value = amount;

back.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "/Day 3/Html/cart.html";
});


submit.addEventListener("submit", function(){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let money = document.getElementById("amount").value;
    let card = document.getElementById("card").value;
    let date = document.getElementById("date").value;
    let cvv = document.getElementById("cvv").value;
    
    if(name == "" || email == "" || phone == "" || money == "" || card == "" || date == "" || cvv == "" ){

    } else{
        alert("Payment processed");
    }
});
let home = document.querySelector("#navbar>div>h1");
let like = document.getElementById("likedpage");
let cart = document.getElementById("cartpage");
let account = document.getElementById("accountpage");
let men = document.getElementById("men");
let women = document.getElementById("women");
let kids = document.getElementById("kids");
let select = document.getElementById("select");
let body = document.querySelector("#push");
let add = document.querySelectorAll("#additions>div");

home.addEventListener("click", homeFun);
like.addEventListener("click", likeFun);
cart.addEventListener("click", cartFun);
account.addEventListener("click", accountFun);
men.addEventListener("click", menFun);
women.addEventListener("click", womenFun);
kids.addEventListener("click", kidsFun);

let signupArr = JSON.parse(localStorage.getItem("signup-details")) || [];
let loginArr = JSON.parse(localStorage.getItem("login-details")) || [];

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

select.addEventListener("change", function(){

    if(select.value == "login"){
        if(loginArr.length != 0){

            body.innerHTML = "";

            let div = document.createElement("div");
            div.setAttribute("id" ,"card");

            let h2 = document.createElement("h2");
            h2.innerHTML = "You are already Logged in";

            let btnLogin = document.createElement("button");
            btnLogin.setAttribute("id", "login");
            btnLogin.innerText = "Log out";
            btnLogin.addEventListener("click", function(){
                let temp = [];
                localStorage.setItem("login-details", JSON.stringify(temp));
                window.location.reload();
            })

            div.append(h2,btnLogin);
            body.append(div);

        } else{
            body.innerHTML = "";

            let div = document.createElement("div");
            div.setAttribute("id" ,"card");
    
            let h2 = document.createElement("h2");
            h2.innerHTML = "Enter Credentials";
    
            let signup = document.createElement("form");
            signup.setAttribute("id", "signup")
    
            let inp1 = document.createElement("input");
            inp1.setAttribute("id","email");
            inp1.type = "email";
            inp1.placeholder = "Email address";
    
            let inp2 = document.createElement("input");
            inp2.setAttribute("id","password");
            inp2.type = "password";
            inp2.placeholder = "Password";
    
            let btn = document.createElement("input");
            btn.type = "submit";
            btn.setAttribute("id","submit");
            btn.value = "Login";
            btn.addEventListener("click", function(){
                event.preventDefault();
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
    
                let getArr = JSON.parse(localStorage.getItem("signup-details"));
    
                let res;
                let set;
                for(let a=0; a<getArr.length; a++){
                    if(getArr[a].email==email && getArr[a].password==password){
                        res = true;
                        set = getArr[a];
                        break;
                    }
                }
    
                if(res==true){
                    alert("Login Successful");
                    localStorage.setItem("login-details" , JSON.stringify(set));
                    window.location.reload();
    
                } else{
                    alert("Incorrect credentials");
                }
                
            })
    
            signup.append(inp1,inp2,btn);
            div.append(h2,signup);
            body.append(div);
        }


    } else if (select.value == "signup"){
        body.innerHTML = "";

        let div = document.createElement("div");
        div.setAttribute("id" ,"card");

        let h2 = document.createElement("h2");
        h2.innerHTML = "Enter your Details";

        let signup = document.createElement("form");
        signup.setAttribute("id", "signup2");

        let inp1 = document.createElement("input");
        inp1.setAttribute("id","name");
        inp1.type = "text";
        inp1.placeholder = "Name";

        let inp2 = document.createElement("input");
        inp2.setAttribute("id","number");
        inp2.type = "number";
        inp2.placeholder = "Phone number"

        let inp3 = document.createElement("input");
        inp3.setAttribute("id","email");
        inp3.type = "email";
        inp3.placeholder = "Email address";

        let inp4 = document.createElement("input");
        inp4.setAttribute("id","password");
        inp4.type = "password";
        inp4.placeholder = "Password";

        let btn = document.createElement("input");
        btn.type = "submit";
        btn.setAttribute("id","submit2");
        btn.value = "Sign up"
        btn.addEventListener("click", function(){
            event.preventDefault();
            let name = document.getElementById("name").value;
            let phone = document.getElementById("number").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let output;
            for(let k=0; k<signupArr.length; k++){
                if(name == signupArr[k].name && phone == signupArr[k].phone && email == signupArr[k].email){
                    output = true;
                };
            }

            if(output == true){
                alert("You have Signed up already");
                window.location.reload();
            } else{
                let signupObj = {
                    name,phone,email,password
                }
    
                signupArr.push(signupObj);
                localStorage.setItem("signup-details", JSON.stringify(signupArr));
                alert("Sign up Successful");
                window.location.reload();
            }
        })

        signup.append(inp1,inp2,inp3,inp4,btn);
        div.append(h2,signup);
        apend.append(div);
        body.append(apend);

    } else{
        body.innerHTML = "";
    }
});

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
});


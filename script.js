
// Continue button - Warning to Login

function showLogin() {

    document.getElementById("warning-page").style.display = "none";

    document.getElementById("login-page").style.display = "block";

}



// Login Button

function login() {


    let username = document.getElementById("username").value.trim();

    let password = document.getElementById("password").value.trim();



    if(username === "SAROVAISHU" && password === "2307") {


        alert("Welcome My Love ❤️");


        // Hide Login

        document.getElementById("login-page").style.display = "none";


        // Show Cake Page

        document.getElementById("cake-page").style.display = "block";


    }


    else {


        alert("Wrong Username or Password 😢");


    }

}




// Cake Cut Button

function cutCake() {


    document.getElementById("message").innerHTML =
    "🎊 Yay! Cake Cut Successfully ❤️🎂";


    document.querySelector(".cake").style.animation =
    "shake 0.5s";



    // After 2 seconds show birthday page

    setTimeout(function(){


        document.getElementById("cake-page").style.display = "none";


        document.getElementById("birthday-page").style.display = "block";


    },2000);


}
    


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

function cutCake(){

    document.getElementById("message").innerHTML =
    "🎉 Happy Birthday My Love ❤️";

    // Knife move
    document.querySelector(".knife").style.left="70px";

    // Cake split after knife reaches
    setTimeout(function(){

        document.querySelector(".cake-left").style.transform =
        "translateX(-45px) rotate(-12deg)";

        document.querySelector(".cake-right").style.transform =
        "translateX(45px) rotate(12deg)";

        document.querySelector(".flame").style.display="none";

    },1200);


    // Birthday page
    setTimeout(function(){

        document.getElementById("cake-page").style.display="none";

        document.getElementById("birthday-page").style.display="block";

    },3000);

}

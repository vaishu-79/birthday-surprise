// Continue button
function showLogin() {

    document.getElementById("warning-page").style.display = "none";

    document.getElementById("login-page").style.display = "block";

}


// Login button
function login() {

    let username = document.getElementById("username").value.trim();

    let password = document.getElementById("password").value.trim();


    if(username === "SAROVAISHU" && password === "2307"){

        alert("Welcome My Love ❤️");


        document.body.innerHTML = `

        <div class="birthday-page">

            <h1>
            🎉 HAPPY BIRTHDAY SARO ❤️
            </h1>


            <img src="images/saro.jpg" class="photo">


            <p>
            You are the most special person in my life ❤️
            <br>
            Thank you for bringing happiness into my world.
            <br>
            Always stay happy and keep smiling 😊
            </p>


            <h2>
            Made with ❤️ by Vaishu
            </h2>


        </div>

        `;

    }


    else{

        alert("Wrong Username or Password 😢");

    }

}

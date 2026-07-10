// Continue button
function showLogin() {

    document.getElementById("warning-page").style.display = "none";

    document.getElementById("login-page").style.display = "block";

}


// Login button
function login() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;


    if(username === "SAROVAISHU" && password === "2379"){

        alert("Welcome My Love ❤️");

        document.body.innerHTML = `

        <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:linear-gradient(135deg,#ff9a9e,#fad0c4);
        ">

        <h1 style="
        font-size:60px;
        color:#ff0066;
        ">
        🎉 HAPPY BIRTHDAY SARO ❤️
        </h1>

        <h2 style="
        color:white;
        margin-top:20px;
        ">
        Made with ❤️ by Vaishu
        </h2>

        </div>

        `;

    }

    else{

        alert("Wrong Username or Password 😢");

    }

}

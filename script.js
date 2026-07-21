// =====================================
// ELEMENTS
// =====================================

const warningPage = document.getElementById("warningPage");
const loginPage = document.getElementById("loginPage");
const birthdayPage = document.getElementById("birthdayPage");
const countdownPage = document.getElementById("countdownPage");
const cakePage = document.getElementById("cakePage");
const galleryPage = document.getElementById("galleryPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("finalPage");

const continueBtn = document.getElementById("continueBtn");
const loginBtn = document.getElementById("loginBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const blowBtn = document.getElementById("blowBtn");
const cutBtn = document.getElementById("cutBtn");

const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const countdown = document.getElementById("countdown");

const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");
const knife = document.getElementById("knife");
const cake = document.querySelector(".cake");

const song = document.getElementById("birthdaySong");

// =====================================
// PASSWORD
// =====================================

const secretPassword = "SAROVAISHU";

// =====================================
// PAGE CHANGE
// =====================================

function changePage(page){

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}

// =====================================
// WARNING
// =====================================

continueBtn.onclick=function(){

    changePage(loginPage);

};

// =====================================
// LOGIN
// =====================================

loginBtn.onclick=function(){

    if(password.value===secretPassword){

        errorMsg.innerHTML="";

        changePage(birthdayPage);

    }

    else{

        errorMsg.innerHTML="❌ Wrong Password ❤️";

        password.value="";

    }

};

password.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        loginBtn.click();

    }

});

// =====================================
// START CELEBRATION
// =====================================

celebrateBtn.onclick=function(){

    changePage(countdownPage);

    startCountdown();

};

// =====================================
// COUNTDOWN
// =====================================

function startCountdown(){

    let number=3;

    countdown.innerHTML=number;

    let timer=setInterval(()=>{

        number--;

        if(number>0){

            countdown.innerHTML=number;

        }

        else{

            clearInterval(timer);

            countdown.innerHTML="🎉";

            setTimeout(()=>{

                changePage(cakePage);

            },1500);

        }

    },1000);

}

// =====================================
// BLOW CANDLE
// =====================================

blowBtn.onclick=function(){

    flame.style.display="none";

    smoke.classList.add("smokeShow");

    blowBtn.disabled=true;

    cutBtn.disabled=false;

    blowBtn.innerHTML="🕯️ Candle Blown ❤️";

};

// =====================================
// CUT CAKE
// =====================================

cutBtn.onclick=function(){

    knife.classList.add("knifeMove");

    setTimeout(()=>{

        cake.classList.add("cakeCut");

    },1200);

};

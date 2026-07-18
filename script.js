// ==========================================
// PASSWORD
// ==========================================

const PASSWORD = "ILOVESARO";


// ==========================================
// PAGES
// ==========================================

const warningPage = document.getElementById("warningPage");
const loginPage = document.getElementById("loginPage");
const birthdayPage = document.getElementById("birthdayPage");
const countdownPage = document.getElementById("countdownPage");
const cakePage = document.getElementById("cakePage");


// ==========================================
// BUTTONS
// ==========================================

const warningBtn = document.getElementById("warningBtn");
const loginBtn = document.getElementById("loginBtn");
const startCountdown = document.getElementById("startCountdown");
const blowBtn = document.getElementById("blowBtn");


// ==========================================
// ELEMENTS
// ==========================================

const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

const countdownNumber = document.getElementById("countdownNumber");

const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");


// ==========================================
// PAGE CHANGE FUNCTION
// ==========================================

function showPage(next){

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});

next.classList.add("active");

}


// ==========================================
// WARNING PAGE
// ==========================================

warningBtn.onclick=()=>{

showPage(loginPage);

};


// ==========================================
// LOGIN
// ==========================================

loginBtn.onclick=()=>{

if(passwordInput.value===PASSWORD){

showPage(birthdayPage);

loginError.innerHTML="";

}

else{

loginError.innerHTML="❌ Wrong Password ❤️";

passwordInput.value="";

}

};


// ==========================================
// COUNTDOWN
// ==========================================

startCountdown.onclick=()=>{

showPage(countdownPage);

let count=3;

countdownNumber.innerHTML=count;

let timer=setInterval(()=>{

count--;

if(count>0){

countdownNumber.innerHTML=count;

}

else{

clearInterval(timer);

countdownNumber.innerHTML="🎉";

setTimeout(()=>{

showPage(cakePage);

},1500);

}

},1000);

};


// ==========================================
// BLOW CANDLE
// ==========================================

blowBtn.onclick=()=>{

// Flame OFF

flame.style.display="none";


// Smoke

smoke.classList.add("smoke");

smoke.style.opacity="1";


// Disable Button

blowBtn.disabled=true;

blowBtn.innerHTML="🕯️ Candle Blown";


// Smoke disappear

setTimeout(()=>{

smoke.style.opacity="0";

smoke.classList.remove("smoke");

},2000);

};


// ==========================================
// ENTER KEY LOGIN
// ==========================================

passwordInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

loginBtn.click();

}

});

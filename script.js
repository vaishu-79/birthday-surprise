// =====================================
// ELEMENTS
// =====================================


const warningPage = document.getElementById("warningPage");

const loginPage = document.getElementById("loginPage");

const birthdayPage = document.getElementById("birthdayPage");

const countdownPage = document.getElementById("countdownPage");

const cakePage = document.getElementById("cakePage");


const continueBtn = document.getElementById("continueBtn");

const loginBtn = document.getElementById("loginBtn");

const celebrateBtn = document.getElementById("celebrateBtn");


const password = document.getElementById("password");

const errorMsg = document.getElementById("errorMsg");


const countdown = document.getElementById("countdown");


const song = document.getElementById("birthdaySong");



// =====================================
// PASSWORD
// =====================================


const secretPassword = "SARO";




// =====================================
// PAGE CHANGE FUNCTION
// =====================================


function changePage(page){


document.querySelectorAll(".page").forEach(item=>{


item.classList.remove("active");


});


page.classList.add("active");


}






// =====================================
// WARNING PAGE
// =====================================


continueBtn.onclick=function(){


changePage(loginPage);


};







// =====================================
// LOGIN
// =====================================


loginBtn.onclick=function(){



if(password.value === secretPassword){


errorMsg.innerHTML="";


changePage(birthdayPage);



}

else{


errorMsg.innerHTML="❌ Wrong Password ❤️";


password.value="";


}



};







// =====================================
// CELEBRATION START
// =====================================


celebrateBtn.onclick=function(){



// Play Song

song.play();



// Go Countdown

changePage(countdownPage);



startCountdown();



};







// =====================================
// COUNTDOWN
// =====================================


function startCountdown(){


let number = 3;



countdown.innerHTML=number;



let timer=setInterval(function(){


number--;



if(number>0){


countdown.innerHTML=number;



}


else{


clearInterval(timer);



countdown.innerHTML="🎉";


setTimeout(function(){



changePage(cakePage);



},1500);



}



},1000);



}







// =====================================
// ENTER KEY LOGIN
// =====================================


password.addEventListener("keypress",function(event){


if(event.key==="Enter"){


loginBtn.click();


}


});
// =====================================
// CAKE ELEMENTS
// =====================================


const flame = document.getElementById("flame");

const blowBtn = document.getElementById("blowBtn");

const cutBtn = document.getElementById("cutBtn");

const knife = document.getElementById("knife");

const smoke = document.getElementById("smoke");

const cake = document.querySelector(".cake");




// =====================================
// BLOW CANDLE
// =====================================


blowBtn.onclick=function(){


// Flame off

flame.style.display="none";



// Smoke effect

smoke.classList.add("smokeShow");



// Button change

blowBtn.innerHTML="🕯️ Candle Blown ❤️";



// Disable blow button

blowBtn.disabled=true;



// Enable cut button

cutBtn.disabled=false;



};






// =====================================
// CUT CAKE
// =====================================


cutBtn.onclick=function(){


// Knife animation

knife.classList.add("knifeMove");



// After knife cut

setTimeout(function(){


cake.classList.add("cakeCut");


// Button text

cutBtn.innerHTML="🎂 Cake Cut Successfully ❤️";



},1500);



};

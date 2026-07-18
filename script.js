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


const secretPassword = "SAROVAISHU";




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
// =====================================
// CELEBRATION EFFECTS
// =====================================



function startHearts(){


setInterval(()=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.animationDuration=
(3+Math.random()*3)+"s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},6000);



},300);



}





function startButterflies(){


setInterval(()=>{


let butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.bottom="0px";


document.body.appendChild(butterfly);



setTimeout(()=>{


butterfly.remove();


},8000);



},1200);



}







function createConfetti(){


for(let i=0;i<100;i++){



let confetti=document.createElement("div");


confetti.className="confetti";


confetti.style.left=Math.random()*100+"vw";


confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;



confetti.style.animationDuration=
(2+Math.random()*3)+"s";



document.body.appendChild(confetti);



setTimeout(()=>{


confetti.remove();


},5000);



}



}







function fireworks(){


for(let i=0;i<10;i++){



let fire=document.createElement("div");


fire.className="firework";


fire.style.left=
Math.random()*100+"vw";


fire.style.top=
Math.random()*60+"vh";



document.body.appendChild(fire);



setTimeout(()=>{


fire.remove();


},1000);



}


}







// =====================================
// AFTER CAKE CUT
// =====================================


cutBtn.addEventListener("click",()=>{


setTimeout(()=>{


createConfetti();


startHearts();


startButterflies();


fireworks();



},2000);
setTimeout(()=>{

changePage(galleryPage);

},4000);


});
// =====================================
// GALLERY SECTION
// =====================================


const galleryImage = document.getElementById("galleryImage");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");



// Photos list

const photos = [

"saro.jpg",

"saro1.jpg",

"saro2.jpg"

];



let currentPhoto = 0;





// Show Photo Function

function showPhoto(){


galleryImage.style.opacity = 0;



setTimeout(()=>{


galleryImage.src = photos[currentPhoto];


galleryImage.style.opacity = 1;



},500);



}






// Next Button


nextBtn.onclick=function(){


currentPhoto++;



if(currentPhoto >= photos.length){


currentPhoto = 0;


}



showPhoto();



}







// Previous Button


prevBtn.onclick=function(){



currentPhoto--;



if(currentPhoto < 0){


currentPhoto = photos.length-1;


}



showPhoto();



}






// Automatic Slide Show


setInterval(()=>{


currentPhoto++;



if(currentPhoto >= photos.length){


currentPhoto=0;


}



showPhoto();



},4000);






// =====================================
// GALLERY OPEN BUTTON
// =====================================


const letterBtn = document.getElementById("letterBtn");


letterBtn.onclick=function(){


changePage(letterPage);



};
// =====================================
// LOVE LETTER
// =====================================


const letterPage = document.getElementById("letterPage");

const letterText = document.getElementById("letterText");

const finalBtn = document.getElementById("finalBtn");





const message = `

Dear Saro ❤️

Happy Birthday My Love 🎂

You are the most beautiful
part of my life.

Thank you for bringing
so much happiness
and smiles into my world.

I wish our bond stays
forever and ever.

Always stay happy ❤️

With lots of love,

Vaishnavi ❤️

`;





let letterIndex = 0;



function typeLetter(){


if(letterIndex < message.length){


letterText.innerHTML += 
message.charAt(letterIndex);


letterIndex++;


setTimeout(typeLetter,50);



}



}






// When Love Letter page opens


letterBtn.onclick=function(){

changePage(letterPage);

letterText.innerHTML="";

letterIndex=0;

typeLetter();

};






// =====================================
// FINAL BUTTON
// =====================================


finalBtn.onclick=function(){


changePage(finalPage);



createConfetti();


startHearts();


fireworks();


};
// =====================================
// GALLERY TO LETTER AUTO FLOW
// =====================================

setTimeout(()=>{


if(galleryPage.classList.contains("active")){


changePage(letterPage);


letterText.innerHTML="";

letterIndex=0;

typeLetter();


}


},15000);
// =====================================
// FINAL SURPRISE
// =====================================


const gift = document.querySelector(".gift");





gift.onclick=function(){



// Gift animation

gift.classList.add("giftOpen");



// Celebration

createConfetti();


startHearts();


startButterflies();


fireworks();



// Change text


setTimeout(()=>{


gift.innerHTML="💖";


},1000);



};

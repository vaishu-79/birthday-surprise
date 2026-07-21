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


    setTimeout(()=>{

        createConfetti();

        startHearts();

        startButterflies();

        fireworks();

        changePage(galleryPage);


        song.volume=0.6;
        song.loop=true;

        song.play();


    },4000);

};





// =====================================
// GALLERY SECTION
// =====================================

const galleryImage = document.getElementById("galleryImage");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const letterBtn = document.getElementById("letterBtn");
const finalBtn = document.getElementById("finalBtn");


const photos = [
    "saro.jpg",
    "saro1.jpg",
    "saro2.jpg"
];


let currentPhoto = 0;



function showPhoto(){

    galleryImage.style.opacity = 0;


    setTimeout(()=>{

        galleryImage.src = photos[currentPhoto];

        galleryImage.style.opacity = 1;


    },500);

}



// Next photo

nextBtn.onclick=function(){

    currentPhoto++;


    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }


    showPhoto();

};




// Previous photo

prevBtn.onclick=function(){

    currentPhoto--;


    if(currentPhoto < 0){

        currentPhoto = photos.length-1;

    }


    showPhoto();

};




// Auto slideshow

setInterval(()=>{

    currentPhoto++;


    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }


    showPhoto();


},4000);







// =====================================
// LOVE LETTER
// =====================================


const letterText = document.getElementById("letterText");




const message = `

Dear Saro ❤️

Happy Birthday My Love 🎂

You are the most beautiful
part of my life.

Thank you for bringing
so much happiness
and smiles into my world.

Always stay happy ❤️

With lots of love,

Vaishnavi ❤️

`;



let letterIndex = 0;



function typeLetter(){


    if(letterIndex < message.length){


        letterText.innerHTML += message.charAt(letterIndex);


        letterIndex++;


        setTimeout(typeLetter,50);


    }


}




letterBtn.onclick=function(){


    changePage(letterPage);


    letterText.innerHTML="";

    letterIndex=0;


    typeLetter();


};
// =====================================
// FINAL SURPRISE
// =====================================


const gift = document.querySelector(".gift");







// Final Button

finalBtn.onclick=function(){


    changePage(finalPage);


    createConfetti();

    startHearts();

    startButterflies();

    fireworks();


};






// =====================================
// GIFT OPEN ANIMATION
// =====================================
const duduBox = document.getElementById("duduBox");


gift.onclick=function(){


    gift.classList.add("giftOpen");



    setTimeout(()=>{


        gift.innerHTML="💖";


    },1000);



    createConfetti();

    startHearts();

    startButterflies();

    fireworks();


};






// =====================================
// HEART EFFECT
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



},500);



}






// =====================================
// BUTTERFLY EFFECT
// =====================================


function startButterflies(){


setInterval(()=>{


let butterfly=document.createElement("div");


butterfly.className="butterfly";


butterfly.innerHTML="🦋";


butterfly.style.left=
Math.random()*100+"vw";



document.body.appendChild(butterfly);



setTimeout(()=>{


butterfly.remove();


},8000);



},1200);



}






// =====================================
// CONFETTI EFFECT
// =====================================


function createConfetti(){


for(let i=0;i<100;i++){


let confetti=document.createElement("div");


confetti.className="confetti";


confetti.style.left=
Math.random()*100+"vw";


confetti.style.animationDuration=
(2+Math.random()*3)+"s";



document.body.appendChild(confetti);



setTimeout(()=>{


confetti.remove();


},5000);



}


}







// =====================================
// FIREWORK EFFECT
// =====================================


function fireworks(){



for(let i=0;i<15;i++){



let fire=document.createElement("div");


fire.className="firework";


fire.style.left=
Math.random()*100+"vw";


fire.style.top=
Math.random()*70+"vh";



document.body.appendChild(fire);



setTimeout(()=>{


fire.remove();


},1500);



}



}

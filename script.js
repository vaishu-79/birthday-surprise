// ===============================
// CANDLE + BIRTHDAY MELODY
// PART 3A
// ===============================


// Select Elements

const flame = document.getElementById("flame");
const blowBtn = document.getElementById("blowBtn");


// Candle State

let candleOn = true;


// Blow Candle Function

blowBtn.addEventListener("click",()=>{

    if(candleOn){

        flame.style.display="none";

        blowBtn.innerHTML="✨ Candle Blown ❤️";

        document.getElementById("wish").innerHTML=
        "Your wish will come true ✨💖";


        playBirthdayTune();

        candleOn=false;

    }

});



// ===============================
// SIMPLE BIRTHDAY MELODY
// Using Web Audio API
// ===============================


function playBirthdayTune(){

const audioContext =
new (window.AudioContext || window.webkitAudioContext)();



let notes=[

261.63, // C
261.63, // C
293.66, // D
261.63, // C
349.23, // F
329.63, // E

261.63,
261.63,
293.66,
261.63,
392.00,
349.23,

261.63,
261.63,
523.25,
440.00,
349.23,
329.63,
293.66

];



let time=audioContext.currentTime;



notes.forEach((frequency,index)=>{


let oscillator=
audioContext.createOscillator();


let gain=
audioContext.createGain();



oscillator.type="sine";


oscillator.frequency.value=
frequency;



oscillator.connect(gain);

gain.connect(
audioContext.destination
);



let startTime=
time+(index*0.35);



oscillator.start(startTime);



gain.gain.setValueAtTime(
0.3,
startTime
);



gain.gain.exponentialRampToValueAtTime(
0.01,
startTime+0.3
);



oscillator.stop(
startTime+0.35
);



});

}
// ===============================
// CAKE CUTTING ANIMATION
// PART 3B
// ===============================


const cutBtn = document.getElementById("cutBtn");
const cake = document.querySelector(".cake");
const cutLine = document.querySelector(".cut-line");


let cakeCut = false;


cutBtn.addEventListener("click",()=>{


if(!cakeCut){


    // Show cutting line

    cutLine.style.height="200px";


    // Cake shake effect

    cake.style.animation=
    "shakeCake 0.5s";


    setTimeout(()=>{


        cake.classList.add("cut");


        document.getElementById("wish").innerHTML=
        "🎂 Cake Cut Successfully ❤️";


        cutBtn.innerHTML=
        "🍰 Enjoy The Cake 😍";


    },500);



    cakeCut=true;


}

});



// Cake Shake Animation Add

const style =
document.createElement("style");


style.innerHTML=`

@keyframes shakeCake{

0%{
transform:translateX(0);
}

25%{
transform:translateX(-10px);
}

50%{
transform:translateX(10px);
}

75%{
transform:translateX(-10px);
}

100%{
transform:translateX(0);
}

}



.cake.cut .top,
.cake.cut .middle,
.cake.cut .bottom{

transition:1.5s;

}



.cake.cut .top{

transform:translateX(-25px)
rotate(-3deg);

}



.cake.cut .middle{

transform:translateX(25px)
rotate(3deg);

}



.cake.cut .bottom{

transform:scale(1.05);

}


`;

document.head.appendChild(style);
// ===============================
// CONFETTI + SPARKLE CELEBRATION
// PART 3C
// ===============================


const confettiContainer =
document.getElementById("confetti-container");


// Create Confetti Function

function createConfetti(){


for(let i=0;i<150;i++){


let confetti =
document.createElement("div");


confetti.className="confetti";


confetti.style.left =
Math.random()*100 + "vw";


confetti.style.animationDelay =
Math.random()*3 + "s";


confetti.style.animationDuration =
(3+Math.random()*3)+"s";


confettiContainer.appendChild(confetti);



}

}



// Add Confetti Style

const confettiStyle =
document.createElement("style");


confettiStyle.innerHTML=`

.confetti{

position:absolute;

top:-20px;

width:12px;

height:18px;

background:white;

animation:fall linear infinite;

z-index:100;

}



@keyframes fall{

0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}


100%{

transform:
translateY(110vh)
rotate(720deg);

opacity:0;

}

}



.sparkle{

position:absolute;

font-size:25px;

animation:spark 1s infinite;

}



@keyframes spark{

0%{

transform:scale(0);

opacity:0;

}

50%{

transform:scale(1.5);

opacity:1;

}

100%{

transform:scale(0);

opacity:0;

}

}


`;


document.head.appendChild(confettiStyle);



// Add Celebration After Cake Cut


cutBtn.addEventListener("click",()=>{


setTimeout(()=>{


createConfetti();


createSparkles();



document.getElementById("wish").innerHTML=

"🎉 Happy Birthday SARO ❤️🎂<br>Have a Beautiful Day ✨";



},1000);



});




// Sparkle Creation


function createSparkles(){


for(let i=0;i<30;i++){


let sparkle =
document.createElement("div");


sparkle.className="sparkle";


sparkle.innerHTML="✨";


sparkle.style.left =
Math.random()*100+"vw";


sparkle.style.top =
Math.random()*100+"vh";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},3000);



}

}

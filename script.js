/* =========================================
   LOADER
========================================= */


window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },2500);

});



/* =========================================
   PAGE NAVIGATION
========================================= */


let currentPage=1;



function showPage(pageNumber){

    document.querySelectorAll(".page").forEach(page=>{

        page.classList.remove("active");

    });


    document.getElementById("page"+pageNumber)
    .classList.add("active");


    currentPage=pageNumber;

}



/* =========================================
   BUTTON CONTROLS
========================================= */


document.getElementById("startBtn")
.addEventListener("click",()=>{

    showPage(2);

});



document.getElementById("next1")
.addEventListener("click",()=>{

    showPage(3);

});



document.getElementById("next2")
.addEventListener("click",()=>{

    showPage(4);

});



document.getElementById("cakeBtn")
.addEventListener("click",()=>{

    showPage(5);

});



document.getElementById("letterBtn")
.addEventListener("click",()=>{

    showPage(7);

});



document.getElementById("finalBtn")
.addEventListener("click",()=>{

    showPage(8);

});



document.getElementById("replayBtn")
.addEventListener("click",()=>{

    showPage(1);

});



/* =========================================
   COUNTDOWN TIMER
========================================= */


let birthdayDate =
new Date("July 23, 2026 00:00:00")
.getTime();



let timer=setInterval(()=>{


    let now=new Date().getTime();


    let distance=birthdayDate-now;



    let days=Math.floor(
        distance/(1000*60*60*24)
    );


    let hours=Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );


    let minutes=Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );


    let seconds=Math.floor(
        (distance%(1000*60))
        /1000
    );



    document.getElementById("days")
    .innerHTML=days;


    document.getElementById("hours")
    .innerHTML=hours;


    document.getElementById("minutes")
    .innerHTML=minutes;


    document.getElementById("seconds")
    .innerHTML=seconds;



    if(distance<0){

        clearInterval(timer);


        document.getElementById("days")
        .innerHTML="00";

        document.getElementById("hours")
        .innerHTML="00";

        document.getElementById("minutes")
        .innerHTML="00";

        document.getElementById("seconds")
        .innerHTML="00";

    }


},1000);



/* =========================================
   CANDLE BLOW
========================================= */


const blowBtn=
document.getElementById("blowBtn");


const flame=
document.querySelector(".flame");



blowBtn.addEventListener("click",()=>{


    flame.classList.add("off");


    blowBtn.innerHTML=
    "Candle Blown ❤️";


});
/* =========================================
   CAKE CUTTING ANIMATION
========================================= */


const cutBtn =
document.getElementById("cutBtn");


const cake =
document.querySelector(".cake");



cutBtn.addEventListener("click",()=>{


    cake.classList.add("cut");


    cutBtn.innerHTML =
    "Cake Cut Successfully 🎂❤️";


    createConfetti();


});



/* =========================================
   CONFETTI CREATION
========================================= */


function createConfetti(){


    for(let i=0;i<40;i++){


        let piece =
        document.createElement("div");


        piece.className="confettiPiece";


        piece.style.left =
        Math.random()*100+"vw";


        piece.style.animationDuration =
        (Math.random()*3+2)+"s";


        piece.innerHTML =
        "✨";


        document.body.appendChild(piece);



        setTimeout(()=>{

            piece.remove();

        },5000);


    }

}



/* =========================================
   BALLOON EFFECT
========================================= */


function createBalloons(){


    let balloonBox =
    document.querySelector(".balloon-container");


    for(let i=0;i<15;i++){


        let balloon =
        document.createElement("div");


        balloon.className="balloon";


        balloon.style.left =
        Math.random()*100+"%";


        balloon.style.animationDelay =
        Math.random()*5+"s";


        balloonBox.appendChild(balloon);



    }


}



createBalloons();



/* =========================================
   MUSIC CONTROL
========================================= */


const music =
document.getElementById("birthdayMusic");



document.body.addEventListener(
"click",
()=>{


    if(music.paused){


        music.play()
        .catch(()=>{});


    }


},
{once:true}

);



/* =========================================
   GALLERY IMAGE EFFECT
========================================= */


const photos =
document.querySelectorAll(".photo");



photos.forEach(photo=>{


    photo.addEventListener("mouseenter",()=>{


        photo.style.transform =
        "scale(1.08) rotate(3deg)";


    });



    photo.addEventListener("mouseleave",()=>{


        photo.style.transform =
        "scale(1)";


    });



});



/* =========================================
   LOVE LETTER TYPING
========================================= */


const letter =
document.getElementById("letterText");



let text =
letter.innerHTML;



letter.innerHTML="";



let index=0;



function typeLetter(){


    if(index < text.length){


        letter.innerHTML +=
        text.charAt(index);


        index++;


        setTimeout(typeLetter,50);


    }


}



document
.getElementById("letterBtn")
.addEventListener("click",()=>{


    showPage(7);


    typeLetter();


});
/* =========================================
   FINAL SURPRISE EFFECT
========================================= */


const finalBtn =
document.getElementById("finalBtn");


finalBtn.addEventListener("click",()=>{


    showPage(8);


    startFireworks();


});



/* =========================================
   FIREWORKS CREATION
========================================= */


function startFireworks(){


    for(let i=0;i<25;i++){


        let fire =
        document.createElement("div");


        fire.className="fireworkParticle";


        fire.style.left =
        Math.random()*100+"vw";


        fire.style.top =
        Math.random()*80+"vh";


        fire.style.animationDelay =
        Math.random()*2+"s";


        document.body.appendChild(fire);



        setTimeout(()=>{


            fire.remove();


        },4000);


    }


}



/* =========================================
   CREATE SPARKLES
========================================= */


function createSparkles(){


    for(let i=0;i<30;i++){


        let sparkle =
        document.createElement("span");


        sparkle.className="sparkle";


        sparkle.innerHTML="✨";


        sparkle.style.left =
        Math.random()*100+"vw";


        sparkle.style.top =
        Math.random()*100+"vh";


        sparkle.style.animationDelay =
        Math.random()*3+"s";


        document.body.appendChild(sparkle);



        setTimeout(()=>{


            sparkle.remove();


        },5000);


    }

}




/* =========================================
   FINAL MESSAGE POPUP
========================================= */


function finalMessage(){


    setTimeout(()=>{


        alert(
        "Happy Birthday SARO ❤️\n\n"+
        "May your life always be filled with happiness, "+
        "success and beautiful memories ✨"
        );


    },3000);


}



finalBtn.addEventListener("click",()=>{


    createSparkles();


    finalMessage();


});





/* =========================================
   REPLAY FUNCTION
========================================= */


document
.getElementById("replayBtn")
.addEventListener("click",()=>{


    location.reload();


});





/* =========================================
   KEYBOARD EFFECT
========================================= */


document.addEventListener(
"keydown",
(event)=>{


    if(event.key==="Enter"){


        createSparkles();


    }


});





/* =========================================
   PREVENT IMAGE DRAG
========================================= */


document.querySelectorAll("img")
.forEach(img=>{


    img.addEventListener(
    "dragstart",
    (e)=>{


        e.preventDefault();


    });


});
function createBalloons(){

    const colors = [
        "#ff4d6d",
        "#ffbe0b",
        "#3a86ff",
        "#06d6a0",
        "#ff66c4",
        "#8338ec",
        "#00b4d8"
    ];

    for(let i=0;i<20;i++){

        let balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration=
        (8+Math.random()*6)+"s";

        balloon.style.animationDelay=
        Math.random()*2+"s";

        document.body.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },15000);

    }

}

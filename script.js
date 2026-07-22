// =========================
// GET ELEMENTS
// =========================

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");

const welcome = document.getElementById("welcome");
const main = document.getElementById("main");

const gallery = document.getElementById("gallery");
const wishSection = document.getElementById("wishSection");
const giftSection = document.getElementById("giftSection");
const letterSection = document.getElementById("letterSection");
const proposalSection = document.getElementById("proposalSection");
const endingSection = document.getElementById("endingSection");

const bgMusic = document.getElementById("bgMusic");


// =========================
// SHOW SECTION FUNCTION
// =========================

function showSection(section){

    section.classList.remove("hidden");
    section.classList.add("fadeIn");

    section.scrollIntoView({
        behavior:"smooth"
    });

}


// =========================
// START SURPRISE
// =========================

startBtn.onclick = function(){

    welcome.classList.add("hidden");

    main.classList.remove("hidden");

    main.classList.add("fadeIn");


    // Start music after user click
    bgMusic.volume = 0.6;

    bgMusic.play().catch(function(){

    });


    createHeart();
    createPetal();

};



// =========================
// CONTINUE BUTTON
// =========================

continueBtn.onclick = function(){

    showSection(wishSection);

};// =========================
// WISH BUTTON
// =========================

const wishBtn = document.getElementById("wishBtn");

wishBtn.onclick = function(){

    showSection(giftSection);

    createHeart();
    createPetal();

};


// =========================
// GIFT OPENING
// =========================

const openGiftBtn = document.getElementById("openGiftBtn");
const giftBox = document.querySelector(".giftBox");


openGiftBtn.onclick = function(){

    giftBox.style.transform = "scale(1.3) rotate(10deg)";


    setTimeout(function(){

        showSection(letterSection);

        startTyping();

    },1000);


    createHeart();
    createPetal();

};


// =========================
// LOVE LETTER TYPING
// =========================

const letterText = document.getElementById("letterText");


const loveLetter = `❤️ Happy Birthday, My Princess Nezuko ❤️


Today is a very special day because the most beautiful soul was born.

I just want to say thank you...

Thank you for the smiles,
the memories,
and every little moment that made life brighter.

I hope your heart is always filled with happiness,
your dreams always come true,
and your beautiful smile never fades.

No matter what happens in life,
you will always have a special place in my heart.

Happy Birthday, my Princess. 🌸❤️`;


let letterPosition = 0;


function startTyping(){

    letterText.innerHTML = "";

    letterPosition = 0;


    let typing = setInterval(function(){


        letterText.innerHTML += loveLetter.charAt(letterPosition);


        letterPosition++;


        if(letterPosition >= loveLetter.length){

            clearInterval(typing);

        }


    },40);

}// =========================
// PROPOSAL BUTTON
// =========================

const proposalBtn = document.getElementById("proposalBtn");

proposalBtn.onclick = function(){

    showSection(proposalSection);

    createHeart();
    createPetal();

};


// =========================
// YES / NO BUTTONS
// =========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const proposalResult = document.getElementById("proposalResult");


yesBtn.onclick = function(){

    proposalResult.innerHTML =
    "🥹❤️ Thank you for choosing me. I promise to always cherish this moment. ❤️";


    setTimeout(function(){

        showSection(endingSection);

        finalEffects();

    },2000);

};



noBtn.onmouseover = function(){

    noBtn.style.position = "absolute";

    noBtn.style.left =
    Math.random() * 80 + "vw";

    noBtn.style.top =
    Math.random() * 80 + "vh";

};// =========================
// CREATE HEARTS
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random() * 100 + "vw";


    heart.style.animationDuration =
    (3 + Math.random() * 3) + "s";


    effects.appendChild(heart);


    setTimeout(function(){

        heart.remove();

    },6000);

}



// =========================
// CREATE SAKURA PETALS
// =========================

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";


    petal.style.left =
    Math.random() * 100 + "vw";


    petal.style.animationDuration =
    (4 + Math.random() * 4) + "s";


    effects.appendChild(petal);


    setTimeout(function(){

        petal.remove();

    },8000);

}



// =========================
// AUTOMATIC EFFECTS
// =========================

setInterval(function(){

    createHeart();

},700);



setInterval(function(){

    createPetal();

},900);



// =========================
// FINAL CELEBRATION
// =========================

function finalEffects(){

    for(let i = 0; i < 30; i++){

        setTimeout(function(){

            createHeart();

            createPetal();

        },i * 100);

    }

}// =========================
// FINAL TOUCHES
// =========================

// Add fade effect when sections appear

const allSections = document.querySelectorAll("section");

allSections.forEach(function(section){

    section.addEventListener("click",function(){

        section.classList.add("fadeIn");

    });

});


// =========================
// PREVENT IMAGE DRAGGING
// =========================

const images = document.querySelectorAll("img");

images.forEach(function(img){

    img.ondragstart = function(){

        return false;

    };

});


// =========================
// WELCOME HEART BURST
// =========================

startBtn.addEventListener("click",function(){

    for(let i = 0; i < 15; i++){

        setTimeout(function(){

            createHeart();

        }, i * 100);

    }

});


// =========================
// END MESSAGE
// =========================

console.log(
"❤️ Birthday Wish Website Loaded Successfully ❤️"
);

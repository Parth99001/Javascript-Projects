console.log("Hello");
const slides=document.querySelectorAll(".sub");
console.log(slides);
let currentslide = 0;
slides[currentslide].style.display="flex";

function hid() {
    slides.forEach((div)=>{
        div.style.display="none";
    })
}

function past() {
    currentslide--;
    if (currentslide<0) {
        currentslide= slides.length-1;
    }
    hid();
    slides[currentslide].style.display="flex";
}

function further() {
    currentslide++;
    if (currentslide >= slides.length) {
        currentslide=0;
    }
    hid();
    slides[currentslide].style.display="flex";
}

setInterval(further,2000);
 
function nextPage() {

document.querySelector(".heart1").style.visibility="hidden";

setTimeout(() => {

document.getElementById("page1").classList.add("hidden");
document.getElementById("page2").classList.remove("hidden");

},500);

}

function showMemories(){

document.querySelector(".cake2").style.visibility="hidden";

setTimeout(() => {

document.getElementById("page2").classList.add("hidden");
document.getElementById("page3").classList.remove("hidden");

},500);

}

function showMessage(){

document.querySelector(".heart3").style.visibility="hidden";

setTimeout(() => {

document.getElementById("page3").classList.add("hidden");
document.getElementById("page4").classList.remove("hidden");

},500);

}

/* ❤️ Photo Slider */

let images = [

"1.jpeg",
"2.jpeg",
"3.jpeg",
"4.jpeg",
"5.jpeg"

];

let index = 0;

function changeImage(){

index++;

if(index >= images.length){

index = 0;

}

let slider = document.getElementById("slider");

if(slider){

slider.src = images[index];

}

}

setInterval(changeImage,3000);

/* 🕯️ Page 1 Candles Auto Blow */

setTimeout(() => {

let c1 = document.getElementById("candles1");

if(c1){

c1.style.visibility="hidden";

}

},5000);

/* 🕯️ Page 2 Candles Auto Blow */

function page2Candles(){

setTimeout(() => {

let c2 = document.getElementById("candles2");

if(c2){

c2.style.visibility="hidden";

}

},5000);

}

/* Page 2 open hone ke baad candle timer start */

const originalNextPage = nextPage;

nextPage = function(){

document.querySelector(".heart1").style.visibility="hidden";

setTimeout(() => {

document.getElementById("page1").classList.add("hidden");
document.getElementById("page2").classList.remove("hidden");

page2Candles();

},500);

};

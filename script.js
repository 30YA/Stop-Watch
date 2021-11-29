"use strict";
// filter of products project : ------------------------------------
let number = document.querySelector("span.par")
const stop = document.querySelector(".stop");
const play = document.querySelector(".play");
const save = document.querySelector(".save");
const savebox = document.getElementById("save-box")

let milsec = "00";
let sec = "00";
let min =  "00";
let setint;
let counter = 0;

play.addEventListener('click', val => {
    counter++;
    if (counter == 1) {
        setint = setInterval(timer,10);
        play.classList = "play-green";
        play.innerHTML = "<i class='fas fa-pause'></i>"
    }else{
        clearInterval(setint);
        counter = 0;
        play.classList = "play";
        play.innerHTML = '<i class="fas fa-play"></i>';
        console.log(`${min} : ${sec} : ${milsec}`);
    }
    stop.addEventListener('click', val => {
        clearInterval(setint);
        counter = 0;
        milsec = "00";
        sec = "00";
        min =  "00";
        number.textContent = `00 : 00 : 00`;
        play.classList = "play";
        play.innerHTML = '<i class="fas fa-play"></i>';
        savebox.innerHTML = "";
    })
})
save.addEventListener('click', val => {
    if (milsec > 0) {
        const saver = document.createElement("p");
        saver.classList = "save-time";
        saver.textContent = `${min} : ${sec} : ${milsec}`;
        savebox.append(saver);
    }
})

function timer() {
    milsec++;
    if (milsec < 10) {
        milsec = "0" + milsec;
    }
    if (milsec == 100) {
        milsec = 0;
            sec++;
            if (sec < 10) {
                sec = "0" + sec;
            }
        }
    if (sec == 60) {
        sec = 0;
        min++;
        if (min < 10) {
            min = "0" + min;
        }
    }
    return number.textContent = `${min} : ${sec} : ${milsec}`;
}
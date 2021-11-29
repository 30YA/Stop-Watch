"use strict";
// filter of products project : ------------------------------------
let min = "00";
let sec = "00";
let milsec = "00";
let settime;
let counter = 0;
const stop = document.querySelector(".stop");
const play = document.querySelector(".play");
const save = document.querySelector(".save");
const savebox = document.getElementById("save-box");

function putval() {
  document.querySelector(".time .milsec").innerHTML = milsec;
  document.querySelector(".time .sec").innerHTML = sec;
  document.querySelector(".time .min").innerHTML = min;
}
play.addEventListener("click", () => {
  counter++;
  if (counter == 1) {
    settime = setInterval(() => {
      milsec++;
      milsec = milsec < 10 ? "0" + milsec : milsec;
      if (milsec == 100) {
        milsec = "0" + 0;
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        if (sec == 60) {
          sec = "0" + 0;
          min++;
          min = min < 10 ? "0" + min : min;
        }
      }
      putval();
    }, 10);
    play.classList = "play-green";
    play.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    clearInterval(settime);
    counter = 0;
    play.classList = "play";
    play.innerHTML = '<i class="fas fa-play"></i>';
  }
});
stop.addEventListener("click", () => {
  clearInterval(settime);
  counter = 0;
  min = "00";
  sec = "00";
  milsec = "00";
  document.querySelector(".time .milsec").innerHTML = "0" + 0;
  document.querySelector(".time .sec").innerHTML = "0" + 0;
  document.querySelector(".time .min").innerHTML = "0" + 0;
  play.classList = "play";
  play.innerHTML = '<i class="fas fa-play"></i>';
  savebox.innerHTML = "";
});
save.addEventListener("click", () => {
  if (milsec > 0) {
    let saveEL = document.createElement("p");
    saveEL.classList = "save-time";
    saveEL.innerText = `${min} : ${sec} : ${milsec}`;
    savebox.append(saveEL);
  }
});

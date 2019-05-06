const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const output = document.querySelector('output');

const speechSynth = window.speechSynthesis;
let timeRead = false;

let now = 0;
let interval = null;

function startTimer() {
  
  let elapsedMil = Date.now() - now;
  
  let mil = (elapsedMil).toFixed(0) % 100;
  let sec = Math.floor(elapsedMil/1000) % 60;
  let min = Math.floor(elapsedMil/60000) % 60;
  
  mil = padTime(mil);
  sec = padTime(sec);
  min = padTime(min);
  
  function padTime(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }
  
  output.textContent = min + ":" + sec + ":" + mil;
}

function start() {
  now = Date.now();
  interval = window.setInterval(startTimer, 10);
}

function stop() {
  window.clearInterval(interval);
}

function reset() {
  output.textContent = "00:00:00";
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// window.onload = function () {
//     const sayThis = new SpeechSynthesisUtterance('Welcome to Depth, a professional apnea training application for freediving athletes');
//     speechSynth.speak(sayThis);
//   };
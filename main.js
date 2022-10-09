const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const clear = document.querySelector(".clear");

let intervalId;
let second = 0;

const getDate = () => {
  const time = new Date(0, 0, 0, 0, 0, second);
  second++;

  return time.toLocaleTimeString();
};

const startTimer = () => {
  clearInterval(intervalId);
  timer.classList.remove("pausedTimer");
  
  intervalId = setInterval(function () {
    timer.innerText = getDate();
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(intervalId);
  
  if (second !== 0) {
    timer.classList.add("pausedTimer");
  }
};

const clearTimer = () => {
  clearInterval(intervalId);
  second = 0;
  
  timer.classList.remove("pausedTimer");
  timer.innerText = "00:00:00";
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
clear.addEventListener("click", clearTimer);

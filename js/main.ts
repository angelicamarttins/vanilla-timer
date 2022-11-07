const timer = document.querySelector(".timer") as HTMLElement;
const start = document.querySelector(".start") as HTMLElement;
const pause = document.querySelector(".pause") as HTMLElement;
const clear = document.querySelector(".clear") as HTMLElement;

let intervalId: number;
let second = 0;

export const getDate = () => {
  const time = new Date(0, 0, 0, 0, 0, second);
  second++;

  return time.toLocaleTimeString();
};

const startTimer = () => {
  clearInterval(intervalId);
  timer?.classList.remove("pausedTimer");
  
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

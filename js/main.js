"use strict";
exports.__esModule = true;
exports.getDate = void 0;
var timer = document.querySelector(".timer");
var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
var clear = document.querySelector(".clear");
var intervalId;
var second = 0;
var getDate = function () {
    var time = new Date(0, 0, 0, 0, 0, second);
    second++;
    return time.toLocaleTimeString();
};
exports.getDate = getDate;
var startTimer = function () {
    clearInterval(intervalId);
    timer === null || timer === void 0 ? void 0 : timer.classList.remove("pausedTimer");
    intervalId = setInterval(function () {
        timer.innerText = (0, exports.getDate)();
    }, 1000);
};
var pauseTimer = function () {
    clearInterval(intervalId);
    if (second !== 0) {
        timer.classList.add("pausedTimer");
    }
};
var clearTimer = function () {
    clearInterval(intervalId);
    second = 0;
    timer.classList.remove("pausedTimer");
    timer.innerText = "00:00:00";
};
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
clear.addEventListener("click", clearTimer);

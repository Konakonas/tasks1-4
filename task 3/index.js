let pause = false;
let pTime = 0;
let prevSeconds = 0;
let Seconds = 0;
let Minutes = 0;
let Hours = 0;

function StopWatch() {
  let timer;
  let timer2;
  let stopWatchTime;
  this.startStopWatch = () => {
    pause = false;
    if (!pause) {
      pTime = new Date();
      let startTime = new Date();
      (function animateStopWatch() {
        let currentTime = new Date();
        stopWatchTime = currentTime - startTime;
        timer = setTimeout(animateStopWatch, 1);
      })();
      (function animateStopWatch2() {
        ChangeP();
        let currentTime = new Date();
        stopWatchTime = currentTime - startTime;
        timer2 = setTimeout(animateStopWatch2, 1);
      })();
    }
  };
  this.stopStopWatch = () => {
    pause = true;
    Minutes = 0;
    Hours = 0;
    Seconds = 0;
    prevSeconds = 0;
    clearTimeout(timer);
    clearTimeout(timer2);
  };
  this.pauseStopWatch = () => {
    prevSeconds = Seconds;
    pause = true;
    clearTimeout(timer);
    clearTimeout(timer2);
  };
}
let stopwatch = new StopWatch();
let startBtn = document.getElementById("startStopWatch");
startBtn.addEventListener("click", stopwatch.startStopWatch);
let stopBtn = document.getElementById("stopStopWatch");
stopBtn.addEventListener("click", stopwatch.stopStopWatch);
let pauseBtn = document.getElementById("pauseStopWatch");
pauseBtn.addEventListener("click", stopwatch.pauseStopWatch);
stopwatch.startStopWatch();

function ChangeP() {
  if (pTime === 0) return;
  if (Math.round(((new Date().getTime() - pTime) / 1000) * 10) / 10 + prevSeconds >= 60 ) {
    Minutes++;
    pTime = (pTime / 1000 + 60) * 1000;
    prevSeconds = 0;
  }
  if (Minutes == 60) {
    Hours++;
    Minutes = 0;
  }
  
  Seconds = Math.round((new Date().getTime() - pTime) / 100 / 10 + prevSeconds);
  if (
    Math.round((new Date().getTime() - pTime) / 1000) ==
    Math.round(((new Date().getTime() - pTime) / 1000) * 10) / 10
  ) {
    document.getElementById("timer").innerHTML =
      Hours +
      ":" +
      Minutes +
      ":" +
      Seconds
      ".0";
  } else {
    document.getElementById("timer").innerHTML =
      Hours +
      ":" +
      Minutes +
      ":" +
      Seconds;
  }
}

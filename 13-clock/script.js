const second = document.querySelector(".second");
const minutes = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const milisecond = document.querySelector(".milisecond");
const body = document.querySelector("body");
setInterval(() => {
  let time = new Date();
  let sec = time.getSeconds() * 6;
  let min = time.getMinutes() * 6;
  let hr = time.getHours() * 30;
  let mlsec = time.getMilliseconds();
  second.style.transform = `rotateZ(${sec}deg)`;
  minutes.style.transform = `rotateZ(${min}deg)`;
  hour.style.transform = `rotateZ(${hr}deg)`;
  //   milisecond.style.transform = `rotateZ(${mlsec}deg)`;
}, 1000);

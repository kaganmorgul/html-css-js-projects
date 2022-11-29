const box = document.querySelector(".box");
const shadowbox = document.querySelector(".shadowbox");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const topButton = document.querySelector(".top");
const bottomButton = document.querySelector(".bottom");
const stopButton = document.querySelector(".stop");
const startButton = document.querySelector(".start");

let x = 5;
let y = 0;

box.style.transform = `rotateX(${x}deg)`;

const increseY = () => {
  y += 90;
};
const degreaseY = () => {
  y -= 90;
};
const increseX = () => {
  x += 90;
};
const degreaseX = () => {
  x -= 90;
};

leftButton.addEventListener("click", () => {
  degreaseY();
  box.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  shadowbox.style.transform = `rotateY(${y}deg)`;
});
rightButton.addEventListener("click", () => {
  increseY();
  box.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  shadowbox.style.transform = `rotateY(${y}deg)`;
});
topButton.addEventListener("click", () => {
  increseX();
  box.style.transform = ` rotateX(${x}deg) rotateY(${y}deg)`;
});
bottomButton.addEventListener("click", () => {
  degreaseX();
  box.style.transform = ` rotateX(${x}deg) rotateY(${y}deg)`;
});
startButton.addEventListener("click", () => {
  box.classList.toggle("rotateactive");
  shadowbox.classList.toggle("rotateactive");
});

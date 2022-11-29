const body = document.querySelector("body");
const menu = document.querySelector(".menu");

let diffX;
let diffY;

let mouseX;
let mouseY;

let press = false;

menu.addEventListener("mousedown", (e) => {
  press = true;

  diffX = e.clientX - menu.offsetLeft;
  diffY = e.clientY - menu.offsetTop;

  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.addEventListener("mouseup", (e) => {
  press = false;
});

document.addEventListener("mousemove", (e) => {
  if (!press) return;
  e.preventDefault();

  menu.style.left = `${e.clientX - diffX}px`;
  menu.style.top = `${e.clientY - diffY}px`;
});

const mainItem = document.querySelector(".mainItem");
const menu = document.querySelector(".menu");

mainItem.addEventListener("dblclick", () => activeItems());

const activeItems = () => {
  menu.classList.toggle("active");
};

let mouseX, mouseY, diffX, diffY, mousePress;

mainItem.addEventListener("mousedown", (e) => {
  mousePress = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  diffY = mouseY - menu.offsetTop;
  diffX = mouseX - menu.offsetLeft;
});

document.addEventListener("mouseup", () => {
  mousePress = false;
});

document.addEventListener("mousemove", (e) => {
  if (!mousePress) return false;
  e.preventDefault();
  menu.style.left = `${e.clientX - diffX}px`;
  menu.style.top = `${e.clientY - diffY}px`;
});

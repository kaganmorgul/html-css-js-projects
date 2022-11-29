const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
const card = document.querySelector(".card");

let mouseX, diffX, mousePress;

container.addEventListener("mousedown", (e) => {
  mousePress = true;
  mouseX = e.clientX;
  diffX = mouseX - cards.offsetLeft;
});

container.addEventListener("mouseup", () => (mousePress = false));

container.addEventListener("mousemove", (e) => {
  if (!mousePress) return false;
  e.preventDefault();
  cards.style.left = `${e.clientX - diffX}px`;
  control();
});

const control = () => {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
};

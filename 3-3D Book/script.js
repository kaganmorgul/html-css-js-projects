const book = document.querySelector(".book");
const page = document.querySelectorAll(".page");

book.addEventListener("click", () => open());

const open = () => {
  page.forEach((p) => {
    p.classList.toggle("active");
  });
};

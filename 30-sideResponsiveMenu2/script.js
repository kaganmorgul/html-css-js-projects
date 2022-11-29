const menuIcon = document.querySelector(".icon");
const nav = document.querySelector("nav");
const header = document.querySelector(".header");
const navActive = document.querySelector("nav.active");
const menuItem = document.querySelectorAll(".menuItem");
const underline = document.querySelector(".underLine");

window.addEventListener("resize", (e) => {
  const menuItemActive = document.querySelector(".menuItem.active");
  underLineStyle(menuItemActive);
  if (e.target.innerWidth > 650) {
    clearNavStyle();
  }
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

menuIcon.addEventListener("click", () => {
  let totalHeight = 0;
  if (nav.className === "nav") {
    nav.classList.add("active");
    menuItem.forEach((i) => {
      totalHeight += i.offsetHeight;
    });
    nav.style.height += `${totalHeight}px`;
    nav.style.bottom += `-${totalHeight}px`;
  } else if (nav.classList.contains("active")) {
    totalHeight = 0;
    clearNavStyle();
  }
});

const clearNavStyle = () => {
  nav.classList.remove("active");
  nav.removeAttribute("style");
};

const underLineStyle = (e) => {
  underline.style.left = `${e.offsetLeft}px`;
  underline.style.width = `${e.offsetWidth}px`;
};

menuItem.forEach((i) => {
  i.addEventListener("click", (e) => {
    underLineStyle(e.target);
    menuItem.forEach((i) => i.classList.remove("active"));
    i.classList.add("active");
  });
});

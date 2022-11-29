const theme = document.querySelector(".themeSet");

let defauttheme = localStorage.getItem("theme");
let btn = localStorage.getItem("btn");

if (defauttheme) {
  document.documentElement.setAttribute("data-theme", defauttheme);
  theme.className = btn;
}

theme.addEventListener("click", () => {
  theme.classList.toggle("active");
  if (theme.className === "themeSet") {
    localStorage.setItem("theme", "light");
    localStorage.setItem("btn", "themeSet");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("btn", "themeSet active");
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

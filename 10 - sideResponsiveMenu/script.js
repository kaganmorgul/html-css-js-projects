const menuIcon = document.querySelector(".openIcon");
const item = document.querySelectorAll(".item");
const nav = document.querySelector(".nav");
const lies = document.querySelectorAll(".itemList li");
const itemsText = document.querySelectorAll(".itemsText");
const itemList = document.querySelectorAll(".itemList");

window.addEventListener("scroll", () => {
  nav.classList.remove("active");
  menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  closeAll();
});

// nav open func
menuIcon.addEventListener("click", () => {
  changeMenuIcon();
  nav.classList.toggle("active");
  closeAll();
});
const changeMenuIcon = () => {
  if (nav.classList.contains("active")) {
    return (menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`);
  } else {
    return (menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`);
  }
};
// nav open func

// itemsText style func
itemsText.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.classList.contains("active")) {
      i.classList.remove("active");
    } else if (i.className === "itemsText") {
      itemsText.forEach((e) => {
        e.parentElement.lastElementChild.style.height = 0;
        e.classList.remove("active");
      });

      i.classList.add("active");
    }
  });
});
// itemsText style func

// items height and item accordiong settings
itemsText.forEach((a) => {
  a.addEventListener("click", (e) => {
    let totalHeight = 0;
    a.nextElementSibling.childNodes.forEach((i) => {
      if (i.innerHTML !== undefined) {
        const getHeight = window.getComputedStyle(i);
        totalHeight += parseInt(getHeight.height);
      }
    });
    if (a.classList.contains("active")) {
      a.parentElement.lastElementChild.style.height = `${totalHeight}px`;
      nav.classList.add("active");
    } else if (a.className === "itemsText") {
      a.parentElement.lastElementChild.style.height = `${0}px`;
    }
  });
});
// items height and item accordiong settings

itemsText.forEach((a) => {
  a.addEventListener("click", () => {
    if (a.className === "itemsText") {
      a.parentElement.lastElementChild.classList.remove("active");
    } else {
      itemList.forEach((i) => i.classList.remove("active"));
      a.parentElement.lastElementChild.classList.add("active");
    }
  });
});

// close all items
const closeAll = () => {
  itemsText.forEach((a) => {
    a.classList.remove("active");
    a.parentElement.lastElementChild.style.height = 0;
  });
};
// close all items

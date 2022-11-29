const item = document.querySelectorAll(".item");

item.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.className === "item") {
      item.forEach((e) => {
        e.classList.remove("active");
        e.lastElementChild.style.height = `${0}`;
      });
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
});

item.forEach((i) => {
  i.addEventListener("click", () => {
    i.lastElementChild.childNodes.forEach((i) => {
      if (i.classList != undefined) {
        i.classList.toggle("active");
      }
    });
  });
});

item.forEach((i) => {
  i.addEventListener("click", () => {
    let elementHeight = 0;
    i.lastElementChild.childNodes.forEach((i) => {
      if (i.offsetHeight != undefined) {
        const myElementHeight = window.getComputedStyle(i);
        elementHeight += parseInt(myElementHeight.height);
      }
    });
    if (i.classList.contains("active")) {
      i.lastElementChild.style.height = `${elementHeight}px`;
    } else {
      i.lastElementChild.style.height = `${0}`;
    }
  });
});

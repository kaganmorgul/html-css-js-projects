const slide = document.querySelector(".slide");
const circleContainer = document.querySelector(".circleContainer");
const circle = document.querySelectorAll(".circle");
const container = document.querySelector(".container");
let containerWidth = window.innerWidth;

window.addEventListener(
  "resize",
  (e) => (containerWidth = console.log(reportWindowSize))
);

// photo data
const photos = [
  {
    name: "1.jpg",
  },
  {
    name: "2.jpg",
  },
  {
    name: "3.jpg",
  },
  {
    name: "4.jpg",
  },
  {
    name: "5.jpg",
  },
];
let count = 0;

// interval when app open
let interval = setInterval(() => {
  nextSlide();
  circleBg();
}, 2000);
// interval when app open

// event listeners
container.addEventListener("mouseover", () => clearInterval(interval));
container.addEventListener(
  "mouseleave",
  () =>
    (interval = setInterval(() => {
      nextSlide();
      circleBg();
    }, 2000))
);

circleContainer.addEventListener("click", (e) => {
  if (e.target.className === "circle") {
    // slideTransform
    slide.style.transform = `translateX(${e.target.id * -containerWidth}px)`;
    // set Count
    count = parseInt(e.target.id);
    // set circle className
    circleContainer.childNodes.forEach((i) => {
      if (parseInt(i.id) == count) {
        i.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    });
  }
});
// event listeners

photos.forEach((i, index) => {
  slide.innerHTML += `<img class="slideImage" src="./img/${i.name}" />`;
  circleContainer.innerHTML += `<div class="circle" id="${index}"></div>`;
});

const nextSlide = () => {
  if (count * -containerWidth < (photos.length - 1) * -containerWidth) {
    count = 0;
  }
  slide.style.transform = `translateX(${count * -containerWidth}px)`;
  count += 1;
};

const circleBg = () => {
  circleContainer.childNodes.forEach((i) => {
    if (parseInt(i.id) == count - 1) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
};

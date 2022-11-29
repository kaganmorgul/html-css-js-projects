const slider = document.querySelector(".slider");
const leftSlide = document.querySelectorAll(".leftSlide");
const rightSlide = document.querySelectorAll(".rightSlide");
const rightSideContainer = document.querySelector(".rightSideContainer");
const leftSideContainer = document.querySelector(".leftSideContainer");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const slideControl = document.querySelector(".SlideControl");
const cars = [
  {
    name: "bmw",
    img: "bmw.jpg",
    logo: "bmw_Logo.png",
    bgColor: "black",
    Text: "Aus Freude am Fahren",
  },
  {
    name: "mersedes",
    img: "mersedes.jpg",
    logo: "mercedesLogo.png",
    bgColor: "#319C28",
    Text: "The Best or Nothing,",
  },
  {
    name: "tesla",
    img: "tesla.jpg",
    logo: "teslaLogo.jpg",
    bgColor: "#E4E5E9",
    Text: "Accelerate the advent of sustainable transport and electric technology",
  },
  {
    name: "chevy",
    img: "chev.jpg",
    logo: "chevy.jpg",
    bgColor: "#4359A4",
    Text: "Putting you first keeps us first",
  },
];

slideControl.addEventListener("mouseenter", () => stop());
slideControl.addEventListener("mouseleave", () => callagain());
up.addEventListener("click", () => changeSlide("up"));
down.addEventListener("click", () => changeSlide("down"));
let interval;
const duration = 3000;
let slideCount = 0;
let carsNameReverse = [];

rightSideContainer.style.transform = `translateY(-${
  (cars.length - 1) * 100
}vh)`;

const stop = () => {
  clearInterval(interval);
};
const callagain = () => {
  changeSlideAuto(duration);
};

const changeSlide = (direction) => {
  if (direction === "up") {
    slideCount++;
    leftSideContainer.style.transform += `translateY(-${100}vh)`;
    rightSideContainer.style.transform += `translateY(${100}vh)`;
    if (slideCount > cars.length - 1) {
      slideCount = 0;
      rightSideContainer.style.transform = `translateY(-${
        (cars.length - 1) * 100
      }vh)`;
      leftSideContainer.style.transform = `translateY(${0}vh)`;
    }
  } else if (direction === "down") {
    slideCount--;
    leftSideContainer.style.transform += `translateY(${100}vh)`;
    rightSideContainer.style.transform += `translateY(-${100}vh)`;
    if (slideCount < 0) {
      leftSideContainer.style.transform = `translateY(-${
        (cars.length - 1) * 100
      }vh)`;
      rightSideContainer.style.transform = `translateY(${0}vh)`;
      slideCount = cars.length - 1;
    }
  }
};

const changeSlideAuto = (duration) => {
  interval = setInterval(() => {
    slideCount++;
    leftSideContainer.style.transform += `translateY(-${100}vh)`;
    rightSideContainer.style.transform += `translateY(${100}vh)`;
    if (slideCount > cars.length - 1) {
      slideCount = 0;
      rightSideContainer.style.transform = `translateY(-${
        (cars.length - 1) * 100
      }vh)`;
      leftSideContainer.style.transform = `translateY(${0}vh)`;
    }
  }, duration);
};

changeSlideAuto(duration);

const setCarsNameToReverse = () => {
  cars.forEach((i) => {
    carsNameReverse.push(i);
  });

  carsNameReverse.reverse();
};
setCarsNameToReverse();

leftSlide.forEach((leftSlide, index) => {
  leftSlide.style.backgroundImage = `url("./photos/${cars[index].img}")`;
});

rightSlide.forEach((rightSlide, index) => {
  rightSlide.style.backgroundColor = carsNameReverse[index].bgColor;
  rightSlide.innerHTML = `
  <img class="logo"  src="./photos/${carsNameReverse[index].logo}" />
  <p class="text"> ${carsNameReverse[index].Text}</p>
  `;
});

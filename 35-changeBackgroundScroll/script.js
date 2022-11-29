const image = document.querySelector(".image");
const body = document.querySelector("body");
const carname = document.querySelector(".car-name");
const carpower = document.querySelector(".car-power");
const carInfo = document.querySelector(".carInfo");

const data = [
  { carName: "car1", power: "400" },
  { carName: "car2", power: "500" },
  { carName: "car3", power: "600" },
  { carName: "car4", power: "700" },
  { carName: "car5", power: "800" },
];

window.addEventListener("scroll", () => {
  let hgt = document.documentElement.scrollTop;
  if (hgt == 0) {
    body.style.backgroundImage = "url('charger.jpg')";
    setCarInfo(data[0]);
  }
  if (hgt > 1000) {
    body.style.backgroundImage = "url('white1.jpg')";
    setCarInfo(data[1]);
  }
  if (hgt > 2000) {
    body.style.backgroundImage = "url('white2.jpg')";
    setCarInfo(data[2]);
  }
  if (hgt > 3000) {
    body.style.backgroundImage = "url('dodge3.jpg')";
    setCarInfo(data[3]);
  }
  if (hgt > 4000) {
    body.style.backgroundImage = "url('grey2.jpg')";
    setCarInfo(data[4]);
  }
});

const setCarInfo = (data) => {
  carname.innerHTML = `Car Name: ${data.carName}`;
  carpower.innerHTML = `Car Power: ${data.power}hp`;
};

carInfo.addEventListener("mouseenter", () => body.classList.add("show"));
carInfo.addEventListener("mouseleave", () => body.classList.remove("show"));

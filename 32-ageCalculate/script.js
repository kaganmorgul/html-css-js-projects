const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const age = document.querySelector(".age");
const calculateButton = document.querySelector(".calculateButton");

let isValid = false;
let myAge;

window.addEventListener("load", () => {
  day.focus();
});

day.addEventListener("keyup", () => {
  if (day.value.length === 2) {
    month.focus();
  }
});
month.addEventListener("keyup", () => {
  if (month.value.length === 2) {
    year.focus();
  }
});
year.addEventListener("keyup", () => {
  if (year.value.length === 4) {
    calculateButton.focus();
  }
});

calculateButton.addEventListener("click", () => {
  if (
    day.value.length > 0 &&
    month.value.length > 0 &&
    year.value.length > 0 &&
    day.value <= 31 &&
    month.value <= 12 &&
    year.value <= 2022 &&
    year.value >= 1922 &&
    day.value !== "" &&
    month.value !== "" &&
    year.value !== ""
  ) {
    isValid = true;
  } else {
    isValid = false;
  }
});

calculateButton.addEventListener("click", () => {
  if (isValid === true) {
    const d = new Date(year.value, month.value - 1, day.value);
    let diff = new Date().getTime() - d.getTime();
    myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    day.value = "";
    month.value = "";
    year.value = "";
    counter(myAge);
  } else {
    age.innerHTML = `form is not valid`;
  }
});

const counter = (val) => {
  let count = 0;
  const inte = setInterval(() => {
    if (val === count) {
      clearInterval(inte);
      age.innerHTML = `You are ${myAge}`;
    }
    age.innerHTML = `You are ${count}`;
    count++;
  }, 20);
};

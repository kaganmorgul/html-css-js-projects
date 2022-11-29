const body = document.querySelector("body");
const dayText = document.querySelector(".dayText");
const hourText = document.querySelector(".hourText");
const minuteText = document.querySelector(".minuteText");
const secondText = document.querySelector(".secondText");
const milisecondText = document.querySelector(".milisecondText");
const txt = document.querySelectorAll("h1");
const span = document.querySelectorAll("span");
const mode = document.querySelector(".mode");

const targetDate = new Date("Nov 20,2022 00:00:00").getTime();

const numberControl = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else if (num > 9) {
    return num;
  }
};

const interval = setInterval(() => {
  let now = new Date().getTime();
  let diff = targetDate - now;
  let day = numberControl(Math.floor(diff / (1000 * 60 * 60 * 24)));
  let hr = numberControl(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let min = numberControl(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  let sec = numberControl(Math.floor((diff % (1000 * 60)) / 1000));
  let milsec = numberControl(Math.floor(diff % 1000));

  dayText.innerHTML = `${day}`;
  hourText.innerHTML = `${hr}`;
  minuteText.innerHTML = `${min}`;
  secondText.innerHTML = `${sec}`;
  milisecondText.innerHTML = `${milsec}`;

  if (diff < 0) {
    clearInterval(interval);
    body.innerHTML = `
                    <h1 class="expired">EXPIRED</h1>
                    `;
  }
});

mode.addEventListener("click", () => {
  if (mode.classList.contains("light")) {
    txt.forEach((i) => {
      i.style.color = "white";
    });
    span.forEach((i) => {
      i.style.color = "white";
    });
    body.style.backgroundColor = "black";
    mode.classList.remove("light");
    mode.classList.add("dark");
    mode.innerHTML = "light";
  } else if (mode.classList.contains("dark")) {
    txt.forEach((i) => {
      i.style.color = "black";
    });
    span.forEach((i) => {
      i.style.color = "black";
    });
    body.style.backgroundColor = "white";
    mode.classList.remove("dark");
    mode.classList.add("light");
    mode.innerHTML = "dark";
  }
});

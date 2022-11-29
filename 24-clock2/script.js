const hourText = document.querySelector(".hourText");
const minuteText = document.querySelector(".minuteText");
const secondText = document.querySelector(".secondText");
const milisecondText = document.querySelector(".milisecondText");

const time = {
  date: () => {
    return new Date();
  },
  hour: () => {
    return time.date().getHours();
  },
  minute: () => {
    return time.date().getMinutes();
  },
  second: () => {
    return time.date().getSeconds();
  },
  milisecond: () => {
    return time.date().getMilliseconds();
  },
};

const numberControl = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else if (num > 9) {
    return num;
  }
};

const timeInfos = () => {
  hourText.innerHTML = `${numberControl(time.hour())}`;
  minuteText.innerHTML = `${numberControl(time.minute())}`;
  secondText.innerHTML = `${numberControl(time.second())}`;
  milisecondText.innerHTML = `${numberControl(time.milisecond())}`;
};

setInterval(() => timeInfos(), 1000);

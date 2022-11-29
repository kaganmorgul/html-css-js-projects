const numbers = document.querySelectorAll(".number");
const socialMediaName = document.querySelectorAll(".socialMediaName");
const checkIcon = document.querySelectorAll(".fa-circle-check");

const socialMediaInfo = [
  {
    name: "instagram",
    followers: "578",
  },
  {
    name: "github",
    followers: "343",
  },
  {
    name: "linkedin",
    followers: "150",
  },
];

numbers.forEach((i, index) => {
  i.setAttribute("data-target-number", socialMediaInfo[index].followers);
});

// socialMediaName.forEach((i, index) => {
//   i.innerText = socialMediaInfo[index].name;
// });

numbers.forEach((num) => {
  const counter = () => {
    const startNumber = parseInt(num.innerText);
    const endNumber = num.getAttribute("data-target-number");
    if (startNumber < endNumber) {
      num.innerText = Math.floor(startNumber + endNumber / 100);
      setTimeout(counter, 10);
    } else {
      num.innerText = startNumber.toLocaleString();
      setTimeout(() => {
        checkIcon.forEach((i) => {
          i.classList.add("active");
        });
      }, 1000);
    }
  };
  counter();
});

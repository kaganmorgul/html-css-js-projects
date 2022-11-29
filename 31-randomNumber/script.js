const button = document.querySelector(".button");
const number = document.querySelector(".number");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");

button.addEventListener("click", () => {
  if (number1.value && number2.value) {
    if (number1.value > number2.value) {
      number.innerHTML = "min maxtan büyük olamaz";
    } else {
      let num = Math.random();
      let num1 = Math.ceil(number1.value);
      let num2 = Math.ceil(number2.value) + 1;
      number.innerHTML = `${Math.floor(num * (num2 - num1) + num1)}`;
    }
  } else {
    number.innerHTML = "sayı girin";
  }
});

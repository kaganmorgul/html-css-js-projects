const data = [
  {
    id: 1,
    question: "question 1",
    answer: "answer 1",
  },
  {
    id: 2,
    question: "question 2",
    answer: "answer 2",
  },
  {
    id: 3,
    question: "question 3",
    answer: "answer 3",
  },
  {
    id: 4,
    question: "question 4",
    answer: "answer 4",
  },
  {
    id: 5,
    question: "question 5",
    answer: "answer 5",
  },
  {
    id: 6,
    question: "question 6",
    answer: "answer 6",
  },
  {
    id: 7,
    question: "question 7",
    answer: "answer 7",
  },
];

const container = document.querySelectorAll(".container");
const main = document.querySelector(".main");

main.addEventListener("click", (e) => {
  if (e.target.className === "button") {
    e.target.parentElement.parentElement.classList.toggle("active");
  }
});

const addItemsToMain = () => {
  data.forEach(
    (i) =>
      (main.innerHTML += `
        <div class="container">
            <div class="card">
                <h2>${i.question}</h2>
                <p>${i.question}</p>
                <button class="button">see answer</button>
            </div>
            <div class="cardBack">
                <p>${i.answer}</p>
                <button class="button">see question</button>
            </div>
        </div>
  `)
  );
};

addItemsToMain();

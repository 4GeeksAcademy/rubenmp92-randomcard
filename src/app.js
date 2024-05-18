/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card .number").innerText = generateRandomNumber();
  startTimer(); // Inicia el temporizador al cargar la página
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);

  return suit[indexSuit];
};

document
  .getElementById("changeCardButton")
  .addEventListener("click", function() {
    changeCard();
  });

let changeCard = () => {
  let card = document.querySelector(".card");
  card.classList.remove("diamond", "spade", "heart", "club"); // Elimina cualquier traje existente
  let newSuit = generateRandomSuit();
  card.classList.add(newSuit); // Agrega la nueva clase de traje sin el espacio en blanco
  card.querySelector(".number").innerText = generateRandomNumber();
};

let startTimer = () => {
  let timeLeft = 10; // segundos
  document.getElementById("timeLeft").innerText = timeLeft;

  setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      changeCard();
      timeLeft = 10;
    }
    document.getElementById("timeLeft").innerText = timeLeft;
  }, 1000); // 1000 milisegundos = 1 segundo
};

setInterval(() => {
  changeCard();
}, 10000);

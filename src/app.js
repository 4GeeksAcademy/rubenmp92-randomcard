/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card .number").innerText = generateRandomNumber();
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
    let card = document.querySelector(".card");
    card.classList.remove("diamond", "spade", "heart", "club"); // Elimina cualquier traje existente
    let newSuit = generateRandomSuit();
    card.classList.add(newSuit); // Agrega la nueva clase de traje sin el espacio en blanco
    card.querySelector(".number").innerText = generateRandomNumber();
  });

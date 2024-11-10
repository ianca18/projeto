

// script.js
const textElement = document.getElementById("text");
const paragraph = document.getElementById("paragraph"); // Seleciona o parágrafo
const message = "Olá, Sejam Bem-vinda(o) Meu Nome é Ianca um prazer tem você aqui no Meu Portfolio!";
let index = 0;

function typeText() {
  if (index < message.length) {
    textElement.textContent += message[index];
    index++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(() => {
    textElement.classList.add("static");
    textElement.style.display = "none";
    paragraph.style.display = "block"; // Mostra o parágrafo ao final da digitação
  },3000)}}

typeText();

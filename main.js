const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("rating-value");

// Seleciona as barras de avaliação e seus valores
const rating1 = document.getElementById("rating1");
const rating2 = document.getElementById("rating2");
const rating3 = document.getElementById("rating3");

const ratingValue1 = document.getElementById("rating-value1");
const ratingValue2 = document.getElementById("rating-value2");
const ratingValue3 = document.getElementById("rating-value3");

// Função para atualizar o valor da barra de avaliação
function updateRatingValue(rating, ratingValue) {
  ratingValue.textContent = rating.value;
}

// Adiciona eventos para atualizar o valor das barras dinamicamente
rating1.addEventListener("input", function() {
  updateRatingValue(rating1, ratingValue1);
});

rating2.addEventListener("input", function() {
  updateRatingValue(rating2, ratingValue2);
});

rating3.addEventListener("input", function() {
  updateRatingValue(rating3, ratingValue3);
});

// Função para gerar números aleatórios dentro de um intervalo
function getRandomNumber(min, max) {
  // Calcular número aleatório entre min e max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Movimentação do botão "No"
btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

// Movimento do botão "No" quando clicado
btnNo.addEventListener("click", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

// Função para exibir a segunda imagem e esconder a primeira
btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});

// Atualizando o valor da avaliação da primeira página
ratingInput.addEventListener("input", (event) => {
  ratingValue.textContent = ratingInput.value;
});

// Código relacionado à navegação entre páginas

const btnNextPage2 = document.getElementById("btn-next-page2");

btnNextPage2.addEventListener("click", function() {
  window.location.href = "page3.html"; // Vai para a página 3
});

const btnNextPage1 = document.getElementById("btn-next-page1");
const btnNextPage2 = document.getElementById("btn-next-page2");
const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const ratingInput1 = document.getElementById("rating1");
const ratingInput2 = document.getElementById("rating2");
const ratingInput3 = document.getElementById("rating3");
const ratingValue1 = document.getElementById("rating-value1");
const ratingValue2 = document.getElementById("rating-value2");
const ratingValue3 = document.getElementById("rating-value3");

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Navegação entre páginas
btnNextPage1.addEventListener("click", () => {
  window.location.href = "page2.html"; // Redireciona para a Página 2
});

btnNextPage2.addEventListener("click", () => {
  window.location.href = "page3.html"; // Redireciona para a Página 3
});

// Atualizando o valor da avaliação das 3 barras
if (ratingInput1) {
  ratingInput1.addEventListener("input", (event) => {
    ratingValue1.textContent = ratingInput1.value;
  });
}

if (ratingInput2) {
  ratingInput2.addEventListener("input", (event) => {
    ratingValue2.textContent = ratingInput2.value;
  });
}

if (ratingInput3) {
  ratingInput3.addEventListener("input", (event) => {
    ratingValue3.textContent = ratingInput3.value;
  });
}

// Funcionalidade do botão "No" (move o botão para outro lugar aleatoriamente)
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

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});

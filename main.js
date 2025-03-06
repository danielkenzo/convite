document.addEventListener("DOMContentLoaded", function () {
  const ratingSquares = document.querySelectorAll(".rating-square");

  // Função para atualizar o valor da nota
  function updateRatingValue(ratingId, ratingValue) {
    document.getElementById(`rating-value${ratingId}`).textContent = `Nota: ${ratingValue}`;
  }

  // Atribuir evento de clique a cada quadrado de avaliação
  ratingSquares.forEach(function (square) {
    square.addEventListener("click", function () {
      const ratingId = this.id.substring(0, 7); // Pega "rating1", "rating2" ou "rating3"
      const ratingValue = this.textContent;

      // Atualiza o valor do rating
      updateRatingValue(ratingId, ratingValue);

      // Destaca o quadrado clicado
      document.querySelectorAll(`#${ratingId}-0, #${ratingId}-1, #${ratingId}-2, #${ratingId}-3, #${ratingId}-4, #${ratingId}-5, #${ratingId}-6, #${ratingId}-7, #${ratingId}-8, #${ratingId}-9, #${ratingId}-10`).forEach(function (sq) {
        sq.style.backgroundColor = "#f1f5f9"; // Resetando o fundo
      });
      this.style.backgroundColor = "#d1d5db"; // Destacando o fundo do quadrado clicado
    });
  });
});

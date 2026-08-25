document.querySelectorAll(".cartao").forEach(function (cartao) {
  cartao.addEventListener("click", function () {
    cartao.classList.toggle("virado");
  });
});
 
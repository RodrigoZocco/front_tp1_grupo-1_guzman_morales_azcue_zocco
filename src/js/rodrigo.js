const ball = document.getElementById("pelota-basket");
const sonido = document.getElementById("pelotaSonido");

ball.addEventListener("click", () => {
  picarPelota();
  reproducirSonidoPelota();
});

function picarPelota() {
  ball.classList.remove("bounce");
  void ball.offsetWidth;
  ball.classList.add("bounce");
}

function reproducirSonidoPelota() {
  sonido.currentTime = 0; // Para que se reproduzca desde 0 (si ya estaba sonando)
  sonido.play();
}

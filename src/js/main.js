// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeMessage = document.getElementById("welcomeMessage");

  let clickCount = 0;

  const messages = [
    "¡Bienvenido! 🎉 Somos el grupo 1",
    "Esperamos que te gusten todas las secciones",
    "Explora nuestros perfiles para conocernos mejor.",
    "Este es el resultado de nuestro trabajo en equipo.",
    "¡Hola de nuevo! 😊 ¿Ya viste todos los perfiles del equipo?",
  ];

  // Agregar evento de clic al botón
  if (welcomeBtn && welcomeMessage) {
    welcomeBtn.addEventListener("click", function () {
      clickCount++;

      const messageIndex = (clickCount - 1) % messages.length;
      welcomeMessage.textContent = messages[messageIndex];

      // Mostrar el mensaje con animación
      welcomeMessage.classList.remove("hidden");

      // Cambiar el texto del botón después del primer clic
      if (clickCount === 1) {
        welcomeBtn.textContent = "¡Otro mensaje!";
      }

      // Agregar efecto visual al botón
      welcomeBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        welcomeBtn.style.transform = "scale(1)";
      }, 100);
    });
  }

  // Efecto hover sencillo para las tarjetas de valores del equipo
  const valueCards = document.querySelectorAll(".value-card");

  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});

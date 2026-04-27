/**
 * main.js - JavaScript para la página principal (index.html)
 *
 * Funciones implementadas:
 * 1. Mensaje de bienvenida interactivo al hacer clic en el botón
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del DOM
  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeMessage = document.getElementById("welcomeMessage");

  // Contador de clics para variar el mensaje
  let clickCount = 0;

  // Array de mensajes aleatorios
  const messages = [
    "¡Bienvenido! 🎉 Somos un equipo apasionado por el desarrollo web.",
    "¡Hola! 👋 Nos alegra que visites nuestro proyecto.",
    "¡Genial! 🚀 Explora nuestros perfiles para conocernos mejor.",
    "¡Saludos! 💻 Este es el resultado de nuestro trabajo en equipo.",
    "¡Hola de nuevo! 😊 ¿Ya viste todos los perfiles del equipo?",
  ];

  // Agregar evento de clic al botón
  if (welcomeBtn && welcomeMessage) {
    welcomeBtn.addEventListener("click", function () {
      // Incrementar contador
      clickCount++;

      // Mostrar el mensaje correspondiente
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

  // Animación de aparición suave para las tarjetas de miembros
  const memberCards = document.querySelectorAll(".member-card");

  // Agregar efecto de aparición gradual a las tarjetas
  memberCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100); // Retraso progresivo para cada tarjeta
  });

  // Efecto hover mejorado para las tarjetas de valores
  const valueCards = document.querySelectorAll(".value-card");

  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  console.log("✅ JavaScript de index.html cargado correctamente");
});

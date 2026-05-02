// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // FUNCIÓN 1: Toggle de detalles de habilidades

  const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
  const skillsDetails = document.getElementById("skillsDetails");

  if (toggleSkillsBtn && skillsDetails) {
    let isVisible = false;

    toggleSkillsBtn.addEventListener("click", function () {
      isVisible = !isVisible;

      if (isVisible) {
        // Mostrar detalles
        skillsDetails.classList.remove("hidden");
        toggleSkillsBtn.textContent = "Ocultar detalles";
        toggleSkillsBtn.style.backgroundColor = "#ec4899"; // Color accent
      } else {
        // Ocultar detalles
        skillsDetails.classList.add("hidden");
        toggleSkillsBtn.textContent = "Mostrar más detalles";
        toggleSkillsBtn.style.backgroundColor = ""; // Volver al color original
      }

      // Efecto visual de clic
      toggleSkillsBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        toggleSkillsBtn.style.transform = "scale(1)";
      }, 100);
    });
  }

  // ANIMACIÓN DE ENTRADA DE LA FOTO DE PERFIL

  const profilePhoto = document.getElementById("profilePhoto");

  if (profilePhoto) {
    profilePhoto.style.opacity = "0";
    profilePhoto.style.transform = "scale(0.8)";

    setTimeout(() => {
      profilePhoto.style.transition = "all 0.5s ease";
      profilePhoto.style.opacity = "1";
      profilePhoto.style.transform = "scale(1)";
    }, 200);

    // Efecto hover en la foto
    profilePhoto.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(2deg)";
    });

    profilePhoto.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // ANIMACIÓN DE ENTRADA DE SECCIONES

  const profileSections = document.querySelectorAll(".profile-section");

  profileSections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    setTimeout(() => {
      section.style.transition = "all 0.5s ease";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 300 + index * 100);
  });

  console.log("✅ JavaScript de página individual cargado correctamente");
});

// ANIMACIONES CSS ADICIONALES (son dinámicas)

// estilos de animación al documento
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
      from {
          transform: translateX(100%);
          opacity: 0;
      }
      to {
          transform: translateX(0);
          opacity: 1;
      }
  }
  
  @keyframes slideOut {
      from {
          transform: translateX(0);
          opacity: 1;
      }
      to {
          transform: translateX(100%);
          opacity: 0;
      }
  }
`;
document.head.appendChild(style);

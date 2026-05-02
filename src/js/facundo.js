const confettiBtn = document.getElementById('confetti')

// variables
let confettiAvailable = false
const messages = ["¿Quieres confetti?", "IUUUUPPIII"]
let i = 0

// evento para activar confetti al hacer click
confettiBtn.addEventListener('click', () => {
  if (i < messages.length) {
    confettiBtn.textContent = messages[i]

    i++

    if (i === messages.length) {
      confettiAvailable = true
    }
  }
})

// confetti (usa confettijs.org)
window.addEventListener("click", (event) => {
  if (confettiAvailable) {
    confetti({ position: { x: event.clientX, y: event.clientY } })
  }
})

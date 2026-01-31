document.addEventListener("DOMContentLoaded", () => {
  // Volteo de tarjetas
  const cards = document.querySelectorAll(".flip-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.querySelector(".flip-card-inner").classList.toggle("flipped");
    });

    card.tabIndex = 0;
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.querySelector(".flip-card-inner").classList.toggle("flipped");
      }
    });
  });

  // Música
  const audio = document.getElementById("bgMusic");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const volumeSlider = document.getElementById("volumeSlider");

  // Play/Pause
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .catch(() => console.log("Autoplay bloqueado, toca para reproducir"));
      playPauseBtn.textContent = "⏸️ Pause";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️ Play";
    }
  });

  // Volumen
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  // Opcional: intenta autoplay después de primera interacción
  document.body.addEventListener(
    "click",
    () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    },
    { once: true },
  );
});

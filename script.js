let cuposDisponibles = 60;
const cuposElement = document.getElementById('cupos');

// Simula la reducción de cupos cada 120 segundos
setInterval(() => {
  if (cuposDisponibles > 0) {
    cuposDisponibles--;
    cuposElement.textContent = cuposDisponibles;
  }
}, 5000);
// Espera que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  // Abre lightbox al hacer clic en cualquier enlace de la galería
  document.querySelectorAll(".lightbox-trigger").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const imgSrc = link.getAttribute("href");
      lightboxImg.src = imgSrc;
      lightbox.style.display = "flex";
    });
  });

  // Cierra el lightbox al hacer clic en la X
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  // Cierra el lightbox al hacer clic fuera de la imagen
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
});

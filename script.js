let cuposDisponibles = 60;
const cuposElement = document.getElementById('cupos');

// Simula la reducción de cupos cada 120 segundos
setInterval(() => {
  if (cuposDisponibles > 0) {
    cuposDisponibles--;
    cuposElement.textContent = cuposDisponibles;
  }
}, 5000);

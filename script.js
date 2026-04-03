const story = document.getElementById("story");
const garden = document.getElementById("garden");

// escribir texto tipo máquina
function typeText(text, speed = 40) {
  story.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    story.innerHTML += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

// agregar flores
function addFlowers(count, delay) {
  setTimeout(() => {
    for (let i = 0; i < count; i++) {
      const f = document.createElement("span");
      f.className = "flower";
      f.innerText = "🌷";
      garden.appendChild(f);
    }
  }, delay);
}

// secuencia emocional
function start() {

  setTimeout(() => {
    typeText("No es solo un detalle...");
  }, 1000);

  addFlowers(10, 2000);

  setTimeout(() => {
    typeText("Es una forma de decirte que me importas de verdad.");
  }, 5000);

  addFlowers(10, 6000);

  setTimeout(() => {
    typeText("Cada momento contigo vale muchísimo para mí.");
  }, 9000);

  addFlowers(10, 10000);

  setTimeout(() => {
    typeText("Hoy 14… otro mes contigo 💛");
  }, 13000);

  addFlowers(8, 14000);

  setTimeout(() => {
    typeText("Y la neta, no quiero que esto se acabe nunca 🌷");
  }, 17000);

  setTimeout(() => {
    typeText("Gracias por estar conmigo, Iris 💛");
  }, 21000);
}

// cargar seguro en iPhone
document.addEventListener("DOMContentLoaded", start);

const startScreen = document.getElementById("startScreen");
const scene = document.getElementById("scene");
const music = document.getElementById("music");

const title = document.getElementById("title");
const story = document.getElementById("story");
const garden = document.getElementById("garden");
const animals = document.getElementById("animals");

// iniciar experiencia
startScreen.addEventListener("click", () => {
  startScreen.style.display = "none";
  scene.classList.remove("hidden");
  music.play();
  startExperience();
});

// flores
function createFlower(x, y, delay) {
  setTimeout(() => {
    const f = document.createElement("div");
    f.className = "flower";
    f.innerText = "🌷";
    f.style.left = x + "px";
    f.style.top = y + "px";
    garden.appendChild(f);
  }, delay);
}

// animales
function addAnimal(e, x, y, delay) {
  setTimeout(() => {
    const a = document.createElement("div");
    a.className = "animal";
    a.innerText = e;
    a.style.left = x + "px";
    a.style.top = y + "px";
    animals.appendChild(a);
  }, delay);
}

// escribir texto
function typeText(text, speed = 40) {
  story.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    story.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// IRIS con flores
function drawName() {
  let coords = [
    [80,200],[80,230],[80,260],[80,290], // I
    [120,200],[150,200],[180,200],[150,230],[120,260],[150,260],[180,260], // R
    [220,200],[220,230],[220,260],[220,290], // I
    [260,200],[290,200],[260,230],[290,260],[260,290],[290,290] // S
  ];

  let d = 0;
  coords.forEach(c => {
    createFlower(c[0], c[1], d);
    d += 120;
  });
}

// experiencia completa
function startExperience() {

  title.innerText = "Para Iris 💛";

  drawName();

  setTimeout(() => {
    typeText("No es solo una página...");
  }, 2000);

  setTimeout(() => {
    typeText("Es una forma de decirte que lo que siento es real.");
  }, 6000);

  setTimeout(() => {
    typeText("Cada momento contigo vale más de lo que imaginas.");
  }, 10000);

  // animales
  addAnimal("🐱", 40, 400, 12000);
  addAnimal("🐶", 250, 420, 13000);
  addAnimal("🐢", 150, 450, 14000);

  // peces movimiento
  setInterval(() => {
    let fish = document.createElement("div");
    fish.innerText = "🐟";
    fish.className = "animal";
    fish.style.left = "-50px";
    fish.style.top = Math.random() * 500 + "px";
    animals.appendChild(fish);

    let pos = -50;
    let move = setInterval(() => {
      pos += 2;
      fish.style.left = pos + "px";
      if (pos > window.innerWidth) {
        clearInterval(move);
        fish.remove();
      }
    }, 20);
  }, 2000);

  setTimeout(() => {
    typeText("Y si algún día dudas de esto...");
  }, 16000);

  setTimeout(() => {
    typeText("recuerda que alguien está dispuesto a construir algo bonito contigo. 💛");
  }, 20000);
}

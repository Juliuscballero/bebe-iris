const startScreen = document.getElementById("startScreen");
const scene = document.getElementById("scene");
const title = document.getElementById("title");
const story = document.getElementById("story");
const garden = document.getElementById("garden");

// iniciar (necesario para iPhone)
startScreen.addEventListener("click", () => {
  startScreen.style.display = "none";
  scene.classList.remove("hidden");
  startExperience();
});

// crear flor
function createFlower(x, y, delay) {
  setTimeout(() => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌷";

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    garden.appendChild(flower);
  }, delay);
}

// texto animado
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

// dibujar IRIS centrado
function drawName() {
  const name = "IRIS";

  const centerX = window.innerWidth / 2;
  const startX = centerX - (name.length * 25);
  const startY = window.innerHeight / 3;

  let delay = 0;

  for (let i = 0; i < name.length; i++) {
    setTimeout(() => {

      const letter = document.createElement("div");
      letter.innerText = name[i];

      letter.style.position = "absolute";
      letter.style.left = startX + i * 50 + "px";
      letter.style.top = startY + "px";
      letter.style.fontSize = "42px";
      letter.style.fontWeight = "bold";
      letter.style.color = "#facc15";
      letter.style.textShadow = "0 0 10px #facc15";

      garden.appendChild(letter);

      // flores alrededor
      for (let j = 0; j < 5; j++) {
        createFlower(
          startX + i * 50 + (Math.random() * 40 - 20),
          startY + (Math.random() * 60 - 30),
          delay + j * 120
        );
      }

    }, delay);

    delay += 400;
  }
}

// experiencia completa
function startExperience() {

  title.innerText = "Para Iris 💛";

  drawName();

  setTimeout(() => {
    typeText("No es solo un detalle...");
  }, 2000);

  setTimeout(() => {
    typeText("Es una forma de decirte que me importas de verdad.");
  }, 6000);

  setTimeout(() => {
    typeText("Cada momento contigo vale muchísimo para mí.");
  }, 10000);

  setTimeout(() => {
    typeText("Y quiero seguir construyendo algo bonito contigo 🌷");
  }, 14000);

  setTimeout(() => {
    typeText("Feliz otro mes juntos 💛");
  }, 18000);
}

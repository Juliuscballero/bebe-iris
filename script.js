var story = document.getElementById("story");
var garden = document.getElementById("garden");

// función texto
function showText(text) {
  story.innerHTML = text;
}

// flores
function addFlowers(n) {
  for (var i = 0; i < n; i++) {
    var f = document.createElement("span");
    f.className = "flower";
    f.innerHTML = "🌷";
    garden.appendChild(f);
  }
}

// secuencia simple (SIN animaciones complejas)
setTimeout(function() {
  showText("No es solo un detalle...");
}, 1000);

setTimeout(function() {
  addFlowers(10);
}, 2000);

setTimeout(function() {
  showText("Es una forma de decirte que me importas.");
}, 4000);

setTimeout(function() {
  addFlowers(10);
}, 5000);

setTimeout(function() {
  showText("Hoy 14… otro mes contigo 💛");
}, 7000);

setTimeout(function() {
  showText("Y quiero seguir contigo 🌷");
}, 10000);

setTimeout(function() {
  showText("Gracias por estar conmigo, Iris 💛");
}, 13000);

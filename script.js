var story = document.getElementById("story");
var garden = document.getElementById("garden");

// mostrar texto directo (sin fallos)
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

// secuencia
setTimeout(function() {
  showText("Para ti, Iris 💛");
}, 1000);

setTimeout(function() {
  addFlowers(10);
}, 2000);

setTimeout(function() {
  showText("No es solo un detalle...");
}, 4000);

setTimeout(function() {
  showText("Es una forma de decirte que lo que siento por ti es real.");
}, 7000);

setTimeout(function() {
  addFlowers(10);
}, 9000);

setTimeout(function() {
  showText("Y aunque hoy no sea 14...");
}, 11000);

setTimeout(function() {
  showText("los 14 reafirmamos un mes más en el conteo de una vida juntos 💛");
}, 14000);

setTimeout(function() {
  addFlowers(10);
}, 17000);

setTimeout(function() {
  showText("Te amo, rabanito 🌷");
}, 20000);

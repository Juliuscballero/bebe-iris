var story = document.getElementById("story");
var garden = document.getElementById("garden");

// texto
function showText(text) {
  story.innerHTML = text;
}

// 💛 corazón con tulipanes (forma fija)
function drawHeart() {
  var heart = [
    "  🌷🌷   🌷🌷  ",
    " 🌷🌷🌷 🌷🌷🌷 ",
    "🌷🌷🌷🌷🌷🌷🌷",
    " 🌷🌷🌷🌷🌷🌷 ",
    "  🌷🌷🌷🌷🌷  ",
    "   🌷🌷🌷🌷   ",
    "    🌷🌷🌷    ",
    "     🌷🌷     ",
    "      🌷      "
  ];

  garden.innerHTML = "";

  for (var i = 0; i < heart.length; i++) {
    var row = document.createElement("div");
    row.style.lineHeight = "28px";
    row.innerHTML = heart[i];
    garden.appendChild(row);
  }
}

// secuencia
setTimeout(function() {
  showText("Para ti, Iris 💛");
}, 1000);

setTimeout(function() {
  drawHeart();
}, 3000);

setTimeout(function() {
  showText("No es solo un detalle...");
}, 6000);

setTimeout(function() {
  showText("Es una forma de decirte que lo que siento por ti es real.");
}, 9000);

setTimeout(function() {
  showText("Y aunque hoy no sea 14...");
}, 12000);

setTimeout(function() {
  showText("los 14 reafirmamos un mes más en el conteo de una vida juntos 💛");
}, 15000);

setTimeout(function() {
  showText("Te amo, rabanito 🌷");
}, 19000);

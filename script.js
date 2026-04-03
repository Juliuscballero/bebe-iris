function drawName() {
  const name = "IRIS";
  const startX = window.innerWidth / 2 - 100;
  const startY = 200;

  let delay = 0;

  for (let i = 0; i < name.length; i++) {
    setTimeout(() => {
      const letter = document.createElement("div");
      letter.innerText = name[i];
      letter.style.position = "absolute";
      letter.style.left = startX + i * 50 + "px";
      letter.style.top = startY + "px";
      letter.style.fontSize = "40px";
      letter.style.fontWeight = "bold";
      letter.style.opacity = "0";
      letter.style.transition = "0.5s";

      garden.appendChild(letter);

      setTimeout(() => {
        letter.style.opacity = "1";
      }, 50);

      // 🌷 tulipanes alrededor
      for (let j = 0; j < 6; j++) {
        createFlower(
          startX + i * 50 + Math.random() * 40 - 20,
          startY + Math.random() * 60 - 30,
          delay + j * 100
        );
      }

    }, delay);

    delay += 400;
  }
}

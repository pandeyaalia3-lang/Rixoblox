const player = document.getElementById("player");
const missionBox = document.getElementById("missionBox");

let speed = 5;
let x = 200;
let y = 200;
let characterSelected = false;

function selectCharacter(id) {
  characterSelected = true;

  if (id === 1) {
    speed = 7;
    player.style.background = "#ff595e";
    missionBox.innerText = "🏃 Run around and explore!";
  }

  if (id === 2) {
    speed = 4;
    player.style.background = "#8ac926";
    missionBox.innerText = "🏗 Imagine building cool things!";
  }

  if (id === 3) {
    speed = 5;
    player.style.background = "#1982c4";
    missionBox.innerText = "🧠 Explore and think creatively!";
  }
}

document.addEventListener("keydown", (e) => {
  if (!characterSelected) return;

  if (e.key === "ArrowUp" || e.key === "w") y -= speed;
  if (e.key === "ArrowDown" || e.key === "s") y += speed;
  if (e.key === "ArrowLeft" || e.key === "a") x -= speed;
  if (e.key === "ArrowRight" || e.key === "d") x += speed;

  x = Math.max(0, Math.min(window.innerWidth - 50, x));
  y = Math.max(70, Math.min(window.innerHeight - 50, y));

  player.style.left = x + "px";
  player.style.top = y + "px";
});

// script.js
let hasSpun = false;

function enterSite() {
  const username = document.getElementById('username-input').value.trim();
  if (username) {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('greeting').innerText = `Hola, ${username}. Bienvenido a AV Moda Infinity.`;
  }
}

function spinWheel() {
  if (hasSpun) {
    document.getElementById('wheel-result').innerText = "Ya has girado la ruleta.";
    return;
  }
  hasSpun = true;
  document.getElementById('coin-sound').play();

  const premios = [
    { descuento: "5%", probabilidad: 0.25 },
    { descuento: "10%", probabilidad: 0.25 },
    { descuento: "15%", probabilidad: 0.2 },
    { descuento: "20%", probabilidad: 0.15 },
    { descuento: "30%", probabilidad: 0.1 },
    { descuento: "40%", probabilidad: 0.05 }
  ];

  let random = Math.random();
  let acumulado = 0;
  let resultado = "";

  for (let i = 0; i < premios.length; i++) {
    acumulado += premios[i].probabilidad;
    if (random <= acumulado) {
      resultado = premios[i].descuento;
      break;
    }
  }

  setTimeout(() => {
    document.getElementById('wheel-result').innerText = `¡Felicidades! Ganaste un ${resultado} de descuento.`;
  }, 1000);
}

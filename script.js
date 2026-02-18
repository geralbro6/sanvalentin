const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letter = document.getElementById("letter");
const rainContainer = document.getElementById("heart-rain");
const rainContainer2 = document.getElementById("heart-rain-2");
const music = document.getElementById("music");



openLetter.addEventListener("click", () => {
  letter.classList.remove("hidden");

  music.play();

sfx.currentTime = 0;  // reinicia el sonido por si lo vuelve a presionar
sfx.play();
}, { once: true });

openLetter.addEventListener("click", () => {
  letter.classList.remove("hidden");
});

closeLetter.addEventListener("click", () => {
  letter.classList.add("hidden");
});

/* Cerrar si das click afuera */
letter.addEventListener("click", (e) => {
  if(e.target === letter){
    letter.classList.add("hidden");
  }
});

function createHeart(){
  const heart = document.createElement("span");
  heart.classList.add("heart");

  // Aquí tú decides cómo será el corazón (emoji, texto, etc.)
  heart.innerText = "💙";


  // --- Valores aleatorios ---
  const size = Math.random() * 20 + 20;       // tamaño
  const left = Math.random() * 100;           // posición horizontal
  const duration = Math.random() * 3 + 3;     // duración caída
  const opacity = Math.random() * 0.6 + 0.4;  // opacidad

  // Aplicarlos
  heart.style.fontSize = size + "px";
  heart.style.left = left + "vw";
  heart.style.opacity = opacity;
  heart.style.animationDuration = duration + "s";

  // Agregarlo a la página
  rainContainer.appendChild(heart);

  // Borrarlo al final para que no se acumulen
  setTimeout(() => {
    heart.remove();
  }, duration * 1100);

}

let rainInterval1 = null;

function startRain(){
  if(rainInterval1) return; // evita que se duplique

  rainInterval1 = setInterval(createHeart2, 1000);
}

openLetter.addEventListener("click", () => {
  letter.classList.remove("hidden");

  startRain();
});
rainInterval = setInterval(createHeart, 100);

function createHeart2(){
  const cinnamoroll = document.createElement("span");
  cinnamoroll.classList.add("heart2");

  // Aquí tú decides cómo será el corazón (emoji, texto, etc.)
  cinnamoroll.innerText = "";
  cinnamoroll.style.backgroundImage = `url("https://i.pinimg.com/originals/87/3b/70/873b70f16de4be284db075287c47c58d.png")`;


  // --- Valores aleatorios ---
  const size = Math.random() * 20 + 1;       // tamaño
  const left = Math.random() * 100;           // posición horizontal
  const duration = Math.random() * 7 + 7;     // duración caída
  const opacity = Math.random() * 1 + 0.4;  // opacidad

  // Aplicarlos
  cinnamoroll.style.fontSize = size + "px";
  cinnamoroll.style.left = left + "vw";
  cinnamoroll.style.opacity = opacity;
  cinnamoroll.style.animationDuration = duration + "s";

  // Agregarlo a la página
  rainContainer2.appendChild(cinnamoroll);

  // Borrarlo al final para que no se acumulen
  setTimeout(() => {
    cinnamoroll.remove();
  }, duration * 1010);
  
}
let rainInterval2 = null;

function startRain(){
  if(rainInterval2) return; // evita que se duplique

  rainInterval = setInterval(createHeart2, 1000);
}


openLetter.addEventListener("click", () => {
  letter.classList.remove("hidden");

  startRain();
});


function sparklesBurst(x, y){
  const sparkles = ["★", "✸",];

  for(let i = 0; i < 200; i++){
    const s = document.createElement("span");
    s.classList.add("sparkle");
    s.innerText = sparkles[Math.floor(Math.random() * sparkles.length)];

    // Posición inicial (donde explotó)
    s.style.left = x + "px";
    s.style.top = y + "px";

    // Dirección random
    const moveX = (Math.random() * 2000 - 1000) + "px";
    const moveY = (Math.random() * 2000 - 1200) + "px";

    s.style.setProperty("--x", moveX);
    s.style.setProperty("--y", moveY);

    document.body.appendChild(s);

    // Eliminar
    setTimeout(() => s.remove(), 5000);
  }
}

openLetter.addEventListener("click", (e) => {
  letter.classList.remove("hidden");

  const rect = letter.querySelector(".letter-card").getBoundingClientRect();
  sparklesBurst(rect.left + rect.width/2, rect.top + rect.height/2);
});

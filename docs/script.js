const title = "Olá mundo! Sou Marcus Vinicius Ribeiro do Nascimento";
const titleElement = document.getElementById("hero-title");

const runes = [
  "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ",
  "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ",
  "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ",
  "ᛊ", "ᛏ", "ᛒ", "ᛗ", "ᛚ"
];

let runeText = "";
let index = 0;

function getRandomRune() {
  return runes[Math.floor(Math.random() * runes.length)];
}

function typeRunes() {
  if (index >= title.length) {
    setTimeout(decipherRunes, 1000);
    return;
  }

  if (title[index] === " ") {
    runeText += " ";
  } else {
    runeText += getRandomRune();
  }

  titleElement.textContent = runeText;
  index++;

  setTimeout(typeRunes, 60);
}

function decipherRunes() {
  let decipherIndex = 0;

  const interval = setInterval(() => {
    if (decipherIndex >= title.length) {
      clearInterval(interval);
      return;
    }

    if (title[decipherIndex] !== " ") {
      runeText =
        runeText.substring(0, decipherIndex) +
        title[decipherIndex] +
        runeText.substring(decipherIndex + 1);

      titleElement.textContent = runeText;
    }

    decipherIndex++;
  }, 70);
}

typeRunes();



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
    entry.target.classList.add("visible")
  } 
  })

}, {threshold: 0.2} );

const reveals = document.querySelectorAll(".reveal");
reveals.forEach ((e) => observer.observe(e))
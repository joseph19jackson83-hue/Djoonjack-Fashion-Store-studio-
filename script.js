// Défilement fluide
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Carrousel automatique
let index = 0;
const slides = document.querySelectorAll(".carousel img");
const total = slides.length;

function showSlide(i) {
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + total) % total;
  showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Changement automatique toutes les 4 secondes
setInterval(nextSlide, 4000);

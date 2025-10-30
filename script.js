// MENU
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
});

// GALLERY IMAGES (GitHub)
const images = [
  'https://raw.githubusercontent.com/joseph19jackson83-hue/Djoonjack-Fashion-Store-studio-/main/images/femme1.jpg',
  'https://raw.githubusercontent.com/joseph19jackson83-hue/Djoonjack-Fashion-Store-studio-/main/images/femme2.jpg',
  'https://raw.githubusercontent.com/joseph19jackson83-hue/Djoonjack-Fashion-Store-studio-/main/images/homme1.jpg',
  'https://raw.githubusercontent.com/joseph19jackson83-hue/Djoonjack-Fashion-Store-studio-/main/images/homme2.jpg',
  'https://raw.githubusercontent.com/joseph19jackson83-hue/Djoonjack-Fashion-Store-studio-/main/images/enfant1.jpg'
];

const container = document.getElementById('images-container');
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.addEventListener('click', () => openModal(src));
  container.appendChild(img);
});

// CAROUSEL CONTROL
document.getElementById('prev').addEventListener('click', () => {
  container.scrollBy({ left: -200, behavior: 'smooth' });
});
document.getElementById('next').addEventListener('click', () => {
  container.scrollBy({ left: 200, behavior: 'smooth' });
});

// MODAL IMAGE
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
let rotation = 0;

function openModal(src) {
  modalImg.src = src;
  modal.classList.remove('hidden');
  rotation = 0;
}

document.getElementById('close-btn').addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.getElementById('rotate-btn').addEventListener('click', () => {
  rotation = (rotation + 90) % 360;
  modalImg.style.transform = `rotate(${rotation}deg)`;
});
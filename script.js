
const button = document.getElementById('showCyclistBtn');
const message = document.getElementById('message');
const image = document.getElementById('cyclistImage');

const imageCount = 15;

const todayKey = 'cyclist-date';
const imageKey = 'cyclist-image';

const today = new Date().toISOString().split('T')[0];
const storedDate = localStorage.getItem(todayKey);
const storedImage = localStorage.getItem(imageKey);

if (storedDate === today && storedImage) {
  showMessage("Już dzisiaj wylosowałeś kolarza – zapraszamy jutro!");
  showImage(storedImage);
  button.style.display = "none";
} else {
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    const filename = `images/${randomIndex}.jpg`;
    localStorage.setItem(todayKey, today);
    localStorage.setItem(imageKey, filename);
    showImage(filename);
    showMessage("Twój kolarz na dziś:");
    button.style.display = "none";
  });
}

function showImage(src) {
  image.src = src;
  image.style.display = "block";
}

function showMessage(text) {
  message.textContent = text;
}

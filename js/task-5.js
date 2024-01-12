function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});

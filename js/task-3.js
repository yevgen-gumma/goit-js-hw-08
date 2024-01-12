const enterName = document.getElementById('name-input');
console.log(enterName);

const resultName = document.getElementById('name-output');
console.log(resultName);

enterName.addEventListener('input', resultGreetings);

function resultGreetings() {
  const trimmedName = enterName.value.trim();
  const outputName = trimmedName === '' ? 'Anonymous' : trimmedName;
  
  resultName.textContent = outputName;
}

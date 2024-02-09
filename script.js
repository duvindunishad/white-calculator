
let currentInput = '';
let resultDisplayed = false;


function appendInput(value) {
    if (resultDisplayed) {
      clearDisplay();
      resultDisplayed = false;
    }
    currentInput += value;
    updateDisplay();
  }
  
  function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentInput;
    display.setAttribute('placeholder', currentInput === '' ? '00' : '');
  }

function clearDisplay() {
  if (currentInput !== '0') {
    currentInput = '';
  }
  updateDisplay();
}


function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    resultDisplayed = true;
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    resultDisplayed = true;
    updateDisplay();
  }
}

function toggleSign() {
  if (currentInput !== '0') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    appendInput(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendInput(key);
  } else if (key === '.' || key === ',') {
    appendInput('.');
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    clearDisplay();
  }
}

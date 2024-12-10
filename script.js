let screen = document.getElementById('screen');

// Append numbers or operators to the screen
function appendToScreen(value) {
  if (screen.innerText === '0' && value !== '.') {
    screen.innerText = value;
  } else {
    screen.innerText += value;
  }
}

// Clear the screen
function clearScreen() {
  screen.innerText = '0';
}

// Perform the calculation
function calculate() {
  try {
    screen.innerText = eval(screen.innerText);
  } catch {
    screen.innerText = 'Error';
  }
}

// Backspace function to remove last character
function backspace() {
  let currentValue = screen.innerText;
  if (currentValue.length === 1 || currentValue === 'Error') {
    screen.innerText = '0';
  } else {
    screen.innerText = currentValue.slice(0, -1);
  }
}

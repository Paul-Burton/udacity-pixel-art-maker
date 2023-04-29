// Select color,, size and pixel input
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
  });

function makeGrid(height, width) {
    // Remove any existing rows
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }

// Create new rows and cells
for (let i = 0; i < height; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < width; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
    pixelCanvas.appendChild(row);
  }

  // Add event listeners to cells
  pixelCanvas.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD') {
      event.target.style.backgroundColor = colorPicker.value;
    }
  });
}


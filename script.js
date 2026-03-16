const button = document.getElementById('colorButton');
const colorName = document.getElementById('colorName');
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];

button.addEventListener('click', () => {
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color
    document.body.style.backgroundColor = randomColor;
    
    // Update the text
    colorName.textContent = `Current Color: ${randomColor.charAt(0).toUpperCase() + randomColor.slice(1)}`;
});
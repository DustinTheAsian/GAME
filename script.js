const button = document.getElementById('colorButton');
const colorName = document.getElementById('colorName');
const title = document.getElementById('title');
const clickCounter = document.getElementById('clickCounter');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal', 'lime', 'coral'];

let clicks = 0;

button.addEventListener('click', () => {
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color
    document.body.style.backgroundColor = randomColor;
    
    // Change the h1 text color randomly (different from background)
    let textColor;
    do {
        textColor = colors[Math.floor(Math.random() * colors.length)];
    } while (textColor === randomColor); // avoid same color as background
    title.style.color = textColor;
    
    // Update the text
    colorName.textContent = `Current Color: ${randomColor.charAt(0).toUpperCase() + randomColor.slice(1)}`;
    
    // Update click counter
    clicks++;
    clickCounter.textContent = `Clicks: ${clicks}`;
});
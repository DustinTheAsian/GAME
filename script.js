const button = document.getElementById('colorButton');
const colorName = document.getElementById('colorName');
const title = document.getElementById('title');
const clickCounter = document.getElementById('clickCounter');
const clickSound = document.getElementById('clickSound');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal', 'lime', 'coral'];
let clicks = 0;

// Confetti setup
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

function createConfetti() {
    for(let i=0; i<100; i++){
        particles.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height - canvas.height,
            r: Math.random()*6+2,
            d: Math.random()*30+1,
            color: colors[Math.floor(Math.random()*colors.length)],
            tilt: Math.random()*10-10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.r);
        ctx.stroke();
        p.y += (Math.cos(p.d)+1+p.r/2)/2;
        p.tilt += 0.1;
        if(p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random()*canvas.width;
        }
    });
    requestAnimationFrame(drawConfetti);
}

drawConfetti();

button.addEventListener('click', () => {
    // Play click sound
    clickSound.play();

    // Random background color gradient
    const color1 = colors[Math.floor(Math.random()*colors.length)];
    let color2;
    do { color2 = colors[Math.floor(Math.random()*colors.length)]; } while(color2===color1);
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;

    // Change h1 color and font size
    const textColor = colors[Math.floor(Math.random()*colors.length)];
    title.style.color = textColor;
    title.style.fontSize = `${Math.floor(Math.random()*20)+30}px`;

    // Animate button rotation
    const rotation = Math.floor(Math.random()*360);
    button.style.transform = `rotate(${rotation}deg)`;

    // Update color name
    colorName.textContent = `Current Color: ${color1} & ${color2}`;

    // Update click counter
    clicks++;
    clickCounter.textContent = `Clicks: ${clicks}`;

    // Trigger confetti every 10 clicks
    if(clicks % 10 === 0){
        createConfetti();
    }
});
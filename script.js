var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

// Create and setup background music
var bgMusic = new Audio('Taylor_Swift_-_Love_Story__Karaoke_Version_(128k).m4a');
bgMusic.loop = true;
bgMusic.volume = 0.5;

// Create overlay for initial interaction
var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.cursor = 'pointer';
overlay.style.zIndex = '1000';

var text = document.createElement('div');
text.textContent = 'Click anywhere to begin';
text.style.color = 'white';
text.style.fontSize = '24px';
text.style.fontFamily = 'Arial, sans-serif';

overlay.appendChild(text);
document.body.appendChild(overlay);

// Function to start everything
function startExperience() {
    bgMusic.play();
    overlay.style.display = 'none';
    draw(); // Start the animation
}

// Handle click on overlay
overlay.addEventListener('click', function () {
    startExperience();
});

// Create and load background image
var bgImage = new Image();
bgImage.src = 'moon1.jpg'; // Replace with your actual image path

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    var lines = [];
    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    lines.forEach(function (line, index) {
        context.fillText(line, x, y + index * lineHeight);
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 25);
    var maxWidth = canvas.width * 0.8; // Keep text within 80% of canvas width
    var lineHeight = fontSize * 1.2;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    // First message
    if (frameNumber < 300) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        wrapText(context, "everyday day I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2, maxWidth, lineHeight);
        opacity += 0.01;
    } else if (frameNumber < 600) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        wrapText(context, "everyday day I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2, maxWidth, lineHeight);
        opacity -= 0.01;
    }

    // Reset opacity for next text
    if (frameNumber === 600) opacity = 0;

    // Second message
    if (frameNumber > 600 && frameNumber < 900) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        wrapText(context, "amongst trillions and trillions of stars, over billions of years", canvas.width / 2, canvas.height / 2, maxWidth, lineHeight);
        opacity += 0.01;
    } else if (frameNumber >= 900 && frameNumber < 1200) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        wrapText(context, "amongst trillions and trillions of stars, over billions of years", canvas.width / 2, canvas.height / 2, maxWidth, lineHeight);
        opacity -= 0.01;
    }

    // Additional messages...

    if (frameNumber > 3600 && frameNumber < 99999) {
        context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
        wrapText(context, "Happy Birthday to my Bestfriend in Arms, Sister who cares, Mother who loves, and Partner in Crime! I Love You ❤️!!", canvas.width / 2, canvas.height / 2 + 120, maxWidth, lineHeight);
        thirdOpacity += 0.01;
    }
}

// Draw background function
function drawBackground() {
    context.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
}

function draw() {
    if (bgImage.complete) {
        drawBackground();
    } else {
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    drawText();
    frameNumber++;

    // Condition to show button and prepare for video
    if (frameNumber >= 3900) {
        var button = document.getElementById('Button');
        var video = document.getElementById('finalVideo');

        if (button) {
            button.style.display = 'flex';
        }

        if (frameNumber >= 4000) {
            canvas.style.display = 'none';
            video.style.display = 'block';
            video.play();

            return; // Stop animation
        }
    }

    requestAnimationFrame(draw);
}

// Load background image
bgImage.onload = function () {};

// Resize canvas dynamically
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (bgImage.complete) {
        drawBackground();
    } else {
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
});

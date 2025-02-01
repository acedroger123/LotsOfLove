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
overlay.addEventListener('click', function() {
    startExperience();
});

// Create and load background image
var bgImage = new Image();
bgImage.src = 'moon1.jpg'; // Make sure to replace with your actual image path

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var fourthOpacity = 0;

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "everyday day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "everyday day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 600) {
    opacity = 0;
  }
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        ["amongst trillions and trillions of stars,", "over billions of years"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "amongst trillions and trillions of stars, over billions of years",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        ["amongst trillions and trillions of stars,", "over billions of years"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "amongst trillions and trillions of stars, over billions of years",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 1200) {
    opacity = 0;
  }
  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "to be alive, and to get to spend this life with you",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle =`rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "to be alive, and to get to spend this life with you",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1800) {
    opacity = 0;
  }
  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "is so incredibly, unfathomably unlikely",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "is so incredibly, unfathomably unlikely",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2400) {
    opacity = 0;
  }
  if (frameNumber > 2400 && frameNumber < 2700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        [
          "and yet here I am to get the impossible",
          "chance to get to know you",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and yet here I am to get the impossible chance to get to know you",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2700 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        [
          "and yet here I am to get the impossible",
          "chance to get to know you",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and yet here I am to get the impossible chance to get to know you",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 3000) {
    opacity = 0;
  }
  if (frameNumber > 3000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        [
          "I love you so much , more than",
          "all the time and space in the universe can contain",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I love you so much , more than all the time and space in the universe can contain",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 3300 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        [
          "and I can't wait to spend all the time in",
          "the world to share that love with you!",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and I can't wait to spend all the time in the world to share that love with you!",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber >= 3600 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
  
    if (window.innerWidth < 1800) {
      drawTextWithLineBreaks(
        [
          "Happy Birthday to my Bestfriend in Arms,",
          "Sister who cares, Mother who loves,",
          "and Partner in Crime!  I Love You ❤️!!"
        ],
        canvas.width / 2,
        canvas.height / 2 + 120,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "Happy Birthday to my Bestfriend in Arms, Sister who cares, Mother who loves, and Partner in Crime!  I Love You ❤️!!",
        canvas.width / 2,
        canvas.height / 2 + 120
      );
    }
  
    thirdOpacity = thirdOpacity + 0.01;
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
        var canvas = document.getElementById('starfield');
        var video = document.getElementById('finalVideo');
        
        if (button) {
            button.style.display = 'flex';
        }
        
        // Remove canvas and start video
        if (frameNumber >= 4000) {
            canvas.style.display = 'none';
            video.style.display = 'block';
            video.play();
            
            // Optional: Stop animation completely
            return;
        }
    }
    
    requestAnimationFrame(draw);
}

// Modified to wait for click instead of autoplaying
bgImage.onload = function() {
};

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
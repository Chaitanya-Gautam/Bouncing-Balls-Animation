// Get the canvas element and its 2D rendering context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store ball objects and set gravity
const balls = [];
const gravity = 0.99;

// Define a class for creating individual ball objects
class Ball {
  constructor() {
    // Initialize properties for each ball
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startRadius = this.radius;
    this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
    this.y = Math.random() * (canvas.height - this.radius);
    this.dy = Math.random() * 2;
    this.dx = (Math.random() - 0.5) * 10;
    this.vel = Math.random() / 5;
  }

  // Method to update and draw the ball
  update() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Function to generate a random color in RGBA format
function randomColor() {
  return `rgba(${Math.round(Math.random() * 250)}, ${Math.round(
    Math.random() * 250
  )}, ${Math.round(Math.random() * 250)}, ${
    Math.ceil(Math.random() * 10) / 10
  })`;
}

// Function to animate the canvas and balls
function animate() {
  // Adjust canvas size if the window size changes
  if (
    canvas.width !== window.innerWidth ||
    canvas.height !== window.innerHeight
  ) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Request the next animation frame
  requestAnimationFrame(animate);

  // Clear the canvas to erase previous frames
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Iterate through each ball in the array
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    ball.update(); // Update and draw the ball
    ball.y += ball.dy; // Update vertical position
    ball.x += ball.dx; // Update horizontal position

    // Check for collision with the bottom of the canvas
    if (ball.y + ball.radius >= canvas.height) {
      ball.dy = -ball.dy * gravity; // Bounce and apply gravity
    } else {
      ball.dy += ball.vel; // Apply velocity
    }

    // Check for collision with the canvas edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx; // Reverse horizontal direction
    }

    // Check for mouse interaction to change ball size
    if (
      mousex > ball.x - 20 &&
      mousex < ball.x + 20 &&
      mousey > ball.y - 50 &&
      mousey < ball.y + 50 &&
      ball.radius < 70
    ) {
      ball.radius += 5; // Increase ball size
    } else if (ball.radius > ball.startRadius) {
      ball.radius -= 5; // Decrease ball size if it's larger than the start size
    }
  }
}

// Initialize variables to track mouse position
let mousex = 0;
let mousey = 0;

// Event listener to update mouse position
document.addEventListener("mousemove", function (event) {
  mousex = event.clientX;
  mousey = event.clientY;
});

// Start the animation loop
animate();

// Add new balls to the array at regular intervals and remove old ones to maintain a constant number
setInterval(function () {
  balls.push(new Ball());
  if (balls.length > 50) {
    balls.shift();
  }
}, 400);
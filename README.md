# Bouncing Balls Animation 🚀 

This is a simple web animation that creates bouncing balls on a canvas using HTML, CSS, and JavaScript. The balls react to gravity, bounce off the edges of the canvas, and change size when the mouse cursor is near them.

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Customization](#customization)

## Getting Started 🌐
To run this animation locally, follow these steps:

1. Clone the repository.
2. Open the `index.html` file in a web browser.

## Technologies Used 🧑‍💻
- HTML
- CSS
- JavaScript

## How It Works 🎨
1. **HTML Structure:**
   - The HTML file (`index.html`) sets up the basic structure, including a canvas element for drawing graphics.

2. **CSS Styling:**
   - The CSS file (`style.css`) provides styling for the body, setting a background color and hiding overflow.

3. **JavaScript Animation:**
   - The JavaScript file (`script.js`) handles the animation logic.
   - It sets up the canvas, creates an array of ball objects, and defines a `Ball` class for individual balls.
   - Each ball has random properties such as color, size, position, and velocity.
   - The `animate` function updates and draws each ball, handling collisions with the canvas edges and bottom.
   - Mouse interaction is incorporated to change the size of balls when the cursor is near them.
   - The animation loop is initiated with the `animate` function, and new balls are added and old ones removed at regular intervals.

## Customization 🌟
You can customize the animation by adjusting parameters in the JavaScript file:
- Change the number of initial balls or the interval for adding new balls.
- Modify the range of random properties for the balls (e.g., size, velocity).
- Experiment with different colors and styles in the CSS file.

Feel free to explore and enhance the code to create your own unique bouncing balls animation!






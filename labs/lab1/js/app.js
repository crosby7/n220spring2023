// ALGORITHM
// I want to experiment with repeating shapes using math instead of repeating lines of code.
// For every pixel of height on my canvas, I'll create a couple shapes with variable height, width, and/or diameter.
// I akso want to use the same math to create a minor gradient of colors. 

// used for setup code
function setup() {
    // Here, I create a canvas and set a blue background for it
    createCanvas(1000, 800);
    background(83, 91, 150);
}

// used for draw code
function draw() {
    // To create a gradient effect and have some fun with repeating shapes, I created a basic while loop that draws circles and rectangles
    var i = 0;
    var maxHeight = 800;
    while(i < maxHeight) {
        fill(i, 22, 100);
        circle (i + i, i, 800 - i);
        fill(0, i, i);
        rect(i + i, 800 - i, i, i);
        

        i += 10;
    }
}
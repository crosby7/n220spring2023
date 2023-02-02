/* To complete this function, I'll create a function drawCar() that draws two circles over a rectangle - a rudimentary car graphic. Since these need to be drawn in distinct positions relative to the entire car, I'll use variables x and y in drawCar(x, y) and have the circles offset from the rect().

I'll place this function in draw() and have x and y in drawCar(x, y) be mouseX and mouseY


*/



function setup() {
    createCanvas(1000, 800);
    background(200);
}

function draw() {
    // Create a new background each frame and call drawCar at mouse position
    background(200);
    drawCar(mouseX, mouseY);

}

function drawCar(x, y) {
    // These three variables are only used in the scope of drawCar. But making variables for them is useful since these values are reused often below
    let rectWidth = 100;
    let rectHeight = 50;
    let circRadius = 25;

    fill(200, 100, 200);
    
    // This draws a rectangle centered at the given x, y --- 15 is the border radius value, found with p5's own rect() reference
    rect(x - (rectWidth / 2), y - (rectHeight / 2), rectWidth, rectHeight, 15);
    fill(0,0,0);
    // This draws the wheels at calculated offsets from the car body
    circle(x + (rectWidth / 4), y + (rectHeight / 2), circRadius);
    circle(x - (rectWidth / 4), y + (rectHeight / 2), circRadius);
}
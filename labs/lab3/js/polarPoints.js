/* In this example, I'll create a function polarPoint(r) in addition to setup() and draw(). 

I'll declare a local variable in polarPoint(r) called x. x will be defined as r * Math.sin(mouseX). 

a variable y will be defined as r * Math.cos(mouseX). Then, the function will return a new Vector(x,y). 

In draw(), I'll define a variable res as the result of polarPoint(r). Before drawing anything, I'll set a translate(100, 100) line. 

Then, draw a circle(res.x, res.y, radius = 10);


*/

function setup() {
    createCanvas(1000, 800);
    background(200);
}

function draw() {
    // Get the polar values
    let res = polarPoint(200);
    // Translate all circles away from the center
    translate(500, 400);
    fill(30, 100, 230);
    circle(res.x, res.y, 30);
}


function polarPoint(r) {
    // Find the x,y polar values
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    // Create a polar Vector x,y
    let polarVector = createVector(x, y);

    return polarVector;
}
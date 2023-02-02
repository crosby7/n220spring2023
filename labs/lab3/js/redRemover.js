/* To complete this function, I'll create a redRemover(x, y, z) function. Within this function, I'll set x to zero, and return vector x,y,z.

In draw(), I'll declare a var noRed. I'll call this function with the example color, and set noRed equal to the returned vector. After, I'll set fill to noRed. Then just draw a circle().


*/

function setup() {
    createCanvas(1000, 800);
    background(200);
}

function draw() {
    background(200);

    // Give redRemover a vector3 to remove red from 
    let noRed = redRemover(170, 200, 150);

    fill(noRed); 

    // For debugging 
    //console.log(red(noRed), green(noRed), blue(noRed));
    
    circle(mouseX, mouseY, 100);
}

function redRemover(x, y, z) {
    // Set a color variable equal to the given xyz
    let c = color(x, y, z);
    // Set red in c to zero
    c.setRed(0);

    return c;
}
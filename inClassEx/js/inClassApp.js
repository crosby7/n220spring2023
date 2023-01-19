let r = 1;


function setup() {
    createCanvas(800, 600);
    background(200);
    console.log("This is r in setup(): " + r);
}


// Draw circles at mouse location. Increase radius r on mouse click
// Don't allow radius to go above 50

// To achieve this, I'll have a nested if loop first check if r is less than 50. If so,
// then I can use another if to check if the mouse is pressed. If that is true,
// then I can increase r by 1. 
function draw() {
    console.log("This is the radius in draw: " + r);
    fill(200, 100, 100);
    circle(mouseX, mouseY, r);

    if(r < 50) {
        if(mouseIsPressed) {
            r++;
        }
    }
    
}

/*

fkjbksjdbckashdkfhaksdjfh

*/

/* For this exercise, I need to create a circle at the mouse's location.
When on the right half of the canvas, the circle should be red.
On the left, it should be blue. 

First thing I want to do with this is determine the halfway "point" (line) of the canvas. 
Halfway is width divided by 2. If the mouse is drawing a circle at more than width/2,
the circle should be red. 

In draw(), I can do all of this. I'll first create a background. This way any old circles will
be removed.
Then, I'll use an if/else statement to check if the mouse position is greater than or less
than the halfway point. If it is, the fill() will be red. If not, blue. 

Then I just draw the circle(). 

*/
let canvasX = 400;
let canvasY = 300;

function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    background('rgba(19, 19, 19, 0.1)');

    if(mouseX < (canvasX / 2))
    {
        fill(255, 0, 0);
    }
    else
    {
        fill(0, 0, 255);
    }

    circle(mouseX, mouseY, 40);
}
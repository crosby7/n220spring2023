/* I'll create two "paddle" rectangle objects, storing x, y, width, and height, where one is to the left of the screen, and one is to the right. 

In draw, both paddles will be drawn. Then, if the up key is pressed, move the first paddle up and the second down. 

Conversely, if down is pressed, the first object goes down and the second up. 



*/

const leftPaddle = {paddleX: 50, paddleY: 400, paddleWidth: 50, paddleHeight: 100};
const RightPaddle = {paddleX: 900, paddleY: 400, paddleWidth: 50, paddleHeight: 100};

function setup() {
    createCanvas(1000, 800);
    background(200);
}

function draw() {
    // Set a low alpha background
    background('rgba(50, 50, 50, 0.1)');
    fill(100, 200, 255);

    // Create both paddles
    rect(leftPaddle.paddleX, leftPaddle.paddleY, leftPaddle.paddleWidth, leftPaddle.paddleHeight);
    rect(RightPaddle.paddleX, RightPaddle.paddleY, RightPaddle.paddleWidth, RightPaddle.paddleHeight);

    // If UP is pressed, raise one paddle and lower the other
    if(keyIsDown(UP_ARROW))
    {
        leftPaddle.paddleY += 1;
        RightPaddle.paddleY -= 1;
    }

    // If DOWN is pressed, lower one paddle and raise the other
    if(keyIsDown(DOWN_ARROW))
    {
        leftPaddle.paddleY -= 1;
        RightPaddle.paddleY += 1;
    }
}
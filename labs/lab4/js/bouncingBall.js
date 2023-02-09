/* Create a circle that moves down and left 5px per update. 
Store speed as var
World bounds = canvas
When the ball reaches the edge, mult appropriate speed by -1
L/R bounds - x speed
Top/Bottom Bounds - y speed


For this assignment, I'll create an object someBall with stored values for size, color, and velocity. 

Then, I'll create a draw() function that will draw the ball, moving by its saved velocity until it reaches a boundary. On reaching a boundary, the appropriate speed will be multiplied by -1.


*/

// Create two objects, one for the stats of the ball, one for the current position
const someBall = {size: 20, speedX: -5, speedY: 5, worldBoundsX: 800, worldBoundsY: 600};
const ballPos = {posX: 0, posY: 0};

function setup() {
    createCanvas(800, 600);
    background(200);

    // Set starting values for ball position
    ballPos.posX = someBall.worldBoundsX;
    ballPos.posY = 0;
}

function draw() {
    background(200);
    fill(255, 200, 200);

    // create a ball at current location
    circle(ballPos.posX, ballPos.posY, someBall.size);

    // Move positon by speed
    ballPos.posX += someBall.speedX;
    ballPos.posY += someBall.speedY;
    //console.log(ballPos);

    // If x position reaches canvas bounds -- multiply x speed by -1
    if(ballPos.posX >= someBall.worldBoundsX || ballPos.posX <= 0)
    {
        someBall.speedX *= -1;
    }

    // If y pos reaches canvas bounds -- multiply y speed by -1
    if(ballPos.posY >= someBall.worldBoundsY || ballPos.posY <= 0)
    {
        someBall.speedY *= -1;
    }
}
/* First, I'll declare a global object someCar, storing an x, y, width, height, borderRad, and color.

Then, I'll create a function drawCar that accepts someCar as an argument. Then I'll draw a rectangle and two circles (similar to the drawingDrawer project) to the screen. 



*/

const someCar = {x: 100, y: 100, rectWidth: 100, rectHeight: 80, borderR: 15, circR: 30, colorRect: [50, 100, 200], colorWheels: [0,0,0]};

console.log(someCar);


function setup() {
    createCanvas(1000, 800);
    background(200);

    // Create a function to only draw the car once
    drawCar(someCar);
}


function drawCar(someCar)
{
    // Set fill color to car body color
    fill(someCar.colorRect);

    // Create the car body
    rect(someCar.x - (someCar.rectWidth / 2), someCar.y - (someCar.rectHeight / 2), someCar.rectWidth, someCar.rectHeight, someCar.borderR);

    // Set wheel color
    fill(someCar.colorWheels);

    // Create the wheels
    circle(someCar.x + (someCar.rectWidth / 4), someCar.y + (someCar.rectHeight / 2), someCar.circR);
    circle(someCar.x - (someCar.rectWidth / 4), someCar.y + (someCar.rectHeight / 2), someCar.circR);
}
/* In this exercise, I need to print a number to the console every draw call. This number should start at 0 and increment by one every frame. 

To do this, I will need a variable that has this number. 
To output to the console, I use console.log(). I can put the variable in here to print the value of the variable. 
After, and only after, printing the value, I can then increment the variable by 1. 

*/

var counter;

function setup() {
    createCanvas(400, 300);
    counter = 0;
}

function draw() {
    // I wanted to experiment with displaying not only in the console, but on the page
    background(200);
    textSize(50);
    fill(0, 102, 153);
    text(counter, 180, 140);

    // Here is the relevant code for the exercise
    console.log(counter);
    counter++;
}
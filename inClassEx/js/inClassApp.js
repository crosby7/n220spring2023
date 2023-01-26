// Declare a variable that stores the X and Y position of the mouse when it was last clicked
let lastClickedPos = { x: null, y: null };


// In setup, create a canvas
function setup() {
  createCanvas(400, 400);
}

function draw() {
    // Use a background to clear old lines
  background(220);
  
  // If mouse is clicked,
  if(mouseIsPressed) {
    // Store the x and y in our variable's x and y fields
    lastClickedPos.x = mouseX;
    lastClickedPos.y = mouseY;

    // For debugging, to ensure the variable was overwritten
    console.log(lastClickedPos.x, lastClickedPos.y);
  }
  
  // Call a function to find the distance between our last clicked position and the current mouse location
    let lineLength = distance( lastClickedPos, { x: mouseX, y: mouseY });

  // If the length is greater than 120 pixels, 
  if(lineLength > 120) {
    // Set the stroke color to red
    stroke('#FF0000');
}
    // Otherwise, 
  else {
    // Keep it a default black
     stroke('#000000');
   }
  
   // After finding our lastClicked position, and determining the distance(for our stroke color), draw a line from lastCLicked positon to current mouse position

   // Since the prompt asks for lines only where the mouse has ALREADY been clicked, I will add an if statement to only draw this line when lastClickedPos is not null
   if(lastClickedPos.x != null && lastClickedPos.y != null)
  {
    line(lastClickedPos.x, lastClickedPos.y, mouseX, mouseY);
  }
  
}

// This function determines the distance between two 2-dimenstional vectors (lastClicked positon and current mouse Positon)
function distance(p1, p2) {
  
    // First find the difference between the x values and the y values, respectively
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance using the square root of the squares of those differences summed. 
  return Math.sqrt(dx*dx + dy*dy);
}
// INITIALIZATION FOR PART 1
// First get a reference to the div to be clicked
let tickTokDiv = document.getElementById("tickTok");

// Store the last text that was appended - initialize to innerHTML at start
let lastClickedText = tickTokDiv.innerHTML;


// INTIALIZATION FOR PART 2
// Get a reference to button in html
let startButton = document.getElementById("startSameDiff");

// Init a count variable for the number of times the button has been clicked
let buttonClicks = 0;


// FUNCTIONS 

// PART 1: On click function to append text
function ticktok() {
    // If the last text was "tick"
    if (lastClickedText === "tick")
    {
        // Append tok and store that as the last appended
        tickTokDiv.innerHTML += " tok";
        lastClickedText = "tok";
    }
    // If the last text was "tok"
    else if (lastClickedText === "tok")
    {
        // Append tick and store that instead
        tickTokDiv.innerHTML += " tick";
        lastClickedText = "tick";
    }
}

// PART 2: onclick for button to change text
function startsameDiff() {
    // If this is the first time clicking the button
    if (buttonClicks === 0)
    {
        // Change the text to 'same' and increment the counter
        startButton.innerHTML = "same";
        buttonClicks++;
    }
    // If the button has been clicked MORE THAN 3 times
    else if (buttonClicks >= 3)
    {
        // Change the text to 'different' -- no need to increment counter anymore
        startButton.innerHTML = "different";
    }
    // if not one of the two cases, simply increment counter to keep the function working as intended
    else {
        buttonClicks++;
    }
}

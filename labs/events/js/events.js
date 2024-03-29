/* Color Changer

To complete this, I'll create 
three square divs (styled in a style tag in the head -- 200px by 200px and floated left, 5px margin, grey)
hen using one event handler, I'll listen for a click on the divs. Inside the handler, 
each element will change colors based on their data-color attribute (red, green, blue)


*/

/* Color Mixer

First, I'll create a wide div that will start with black color. Then, I'll create a div
that will have innerHTML: "current color: rgb(" + the accessed color of the div + ")".
Then, 9 buttons will be used to change the color using an onclick event handler. 
Each button will have a data-color attribute and a data-strength attribute (i.e. "red" and "1")
The event handler will use if/else if to change the color of the large div. The
innerHTML of the display div will be updated here.

*/

/* Flash Cards

I'll create three buttons in HTML that ask questions. Each will have a data-answer.
An event handler will change the innerHTML of an answerDiv to the data-answer.

*/

// Global Variables

// Color Mixer
let displayDiv = document.getElementById("colorMixerDisplay");
let textDiv = document.getElementById("colorMixerText");
let redAmount = 0;
let greenAmount = 0;
let blueAmount = 0;

// Flash Cards
let flashCardsDiv = document.getElementById("flashCards");


// Functions - Event handlers
// Color Changer
document.querySelectorAll(".squareDiv").forEach(item => {
    item.addEventListener('click', function(e) {
        item.style.backgroundColor = item.dataset.color;
    })
})

// Color Mixer
document.querySelectorAll(".colorMixerButton").forEach(item => {
    item.addEventListener('click', function(e) {
        if (item.dataset.color === "red")
        {
            redAmount += Number(item.dataset.strength);
        }
        else if (item.dataset.color === "green")
        {
            greenAmount += Number(item.dataset.strength);
        }
        else if (item.dataset.color === "blue")
        {
            blueAmount += Number(item.dataset.strength);
        }

        displayDiv.style.backgroundColor = `rgb(${redAmount}, ${greenAmount}, ${blueAmount})`;
        textDiv.innerHTML = `Current color: rgb(${redAmount}, ${greenAmount}, ${blueAmount})`
    })
})

// Flash Cards
function flashCards(event) {
    flashCardsDiv.innerHTML = event.target.dataset.answer;
}
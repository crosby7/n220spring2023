/* UI Navigation Highlighter

To make this application, I'll create 7 divs in the HTML file. The first is a holder for all the text of the 6 other clicked divs. 
#id navCollection

The other 6 can be clicked to highlight them - change background color and highlight text
When highlighted, the other previously highlighted divs are un-highlighted.

Then, the navCollection div will add the clicked div's text to its innerHTML

To do this, I'll create a function that takes an element as a parameter. This function will be
called on click in HTML by each of the 6 divs. 
The function will first set all divs of the class uiNav (the 6 divs) to basic style (no background color, no bold text)

Then the function will take the element given as a parameter and "highlight it". Finally, it will add the text
of the clicked div to the navCollection

*/

// Find and retain the div to hold clicked div text
let navCollectionDiv = document.getElementById('navCollection');


// Called in HTML in onclick
function uiNavHighlight(divToHighlight)
{
    // Get an HTMLcollection of the other divs
    uiNavDivs = document.getElementsByClassName('uiNav');

    // For each element in uiNavDivs
    for (i = 0; i < uiNavDivs.length; i++)
    {
        // Reset the styling
        let indexedElement = uiNavDivs.item(i);
        indexedElement.style.backgroundColor = "#FFFFFF";
        indexedElement.style.fontWeight = "normal";
        indexedElement.style.color = "#000000";
    }


    // After the reset, style the clicked div
    divToHighlight.style.backgroundColor = "#AA11FF";
    divToHighlight.style.fontWeight = "bold";
    divToHighlight.style.color = "#FFFFFF";

    // Add the innerHTML of clicked div to navCollectionDiv
    navCollectionDiv.innerHTML += " " + divToHighlight.innerHTML;
}



/* Rock Paper Scissors (Guard)

First, I'll create a score div. This will have "Player Score: 0" by default

Then, I'll create 4 buttons that allow the player to pick between rock, paper, scissors, and guard

When these buttons are clicked, the logic for the game is run -- I'll create an onclick function that accepts a string argument (the player's move)

In JS, a global score variable will be created, initialized to zero. 
I'll also globally identify the scoreDiv. 

In the function, a random move will be selected by the computer (rock, paper, or scissors -- 0, 1, or 2). 

If the player chose guard, I'll simply subtract 0.5 from score
and update scoreDiv's innerHTML accordingly.

If the player made an RPS move, then a series of if/elseif statements will check if the player won. 
    For example:
        If the computer chose rock, and if the player chose paper, the player wins (score++). If the player instead chose scissors, the computer wins (score--). Since ties result in no change in score, I'll simply not check for them. 

Then, after the RPS logic, I'll display to a textDiv the result of the round, and update scoreDiv. 

*/

// Find and retain scoreDiv
let scoreDiv = document.getElementById("scoreDiv");

// Initialize a score count variable
let score = 0;

// Find and retain the result text
let resultDisplay = document.getElementById("resultDisplay");

// Called in onclick for the player input buttons
function rockPaperScissorsGuard(playerChoice, playerString)
{
    // if the player chose guard
    if (playerChoice === 3)
    {
        // Lose half a point and update the text boxes
        score -= 0.5;
        scoreDiv.innerHTML = "Score: " + score;
        resultDisplay.innerHTML = "You chose: " + playerString + "! Good block!";
    }
    // If the player made an RPS move
    else
    {
        // Randomly generate the computer's move (0 = rock, 1 = paper, 2 = scissors)
        let computerChoice = Math.floor(Math.random() * 3);

        // If the computer chose rock
        if (computerChoice === 0)
        {
            // and if the player chose paper
            if (playerChoice === 1)
            {
                // Add a point and update text
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and your opponent chose rock! You Win!";
            }
            // or if the player chose scissors
            else if (playerChoice === 2)
            {
                // Lose a point and update text
                score--;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and your opponent chose rock! Better luck next time!";
            }
        }
        // or if the computer chose paper
        else if (computerChoice === 1)
        {
            // and the player chose scissors
            if (playerChoice === 2)
            {
                // Gain a point and update text
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and your opponent chose paper! You Win!";
            }
            // or if the player chose rock
            else if (playerChoice === 0)
            {
                // Lose a point and update text
                score--;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and your opponent chose paper! Better luck next time!";
            }
        }
        // or if the computer chose scissors
        else if (computerChoice === 2)
        {
            // and the player chose rock
            if (playerChoice === 0)
            {
                // Gain a point and update text
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and your opponent chose scissors! You Win!";
            }
            // or if the player chose paper
            else if (playerChoice === 1)
            {
                // Lose a point and update text
                score--;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and your opponent chose scissors! Better luck next time!";
            }
        }
    }
}
/* Solitaire Rules

52 card deck


The Tableau - 7 piles for main table
The foundation - 4 piles for ace->king of each suit
The stock - draw cards to add to play
The waste - unplayable cards from stock are laid face up here

Start of game - left to right, add one face up card to leftmost tableau, add facedown cards to each pile to the right. Do this, skipping face-up piles until all of the tableau contains a face-up

Player then adds cards to foundation or tableau (from stock/waste/tableau) until all cards have made their way into the foundation. 

*/

/* First, make the play area. There will be 6 divs aligned top right,4 for foundtion, 2 for stock and waste. Under these will be 7 evenly spaced divs for the tableau. 

*/

/* Then, make an array of 52 potential card faces. This will be used on game-startup to create the stock, which will be dealt according to the rules above.

*/

/* Then, make cards that are draggable. Onclick, set bool isDragged true. while the bool isDragged is true, the shown card has position = mouseposition. Onclick again,if the card is over a pile, it will have that position as long as the rules allow. If not, it will remain attached to the mosue. 

*/

// Array of 52 cards
let cardsArray = [{
    color: "#FF0000",
    suit: "diamonds",
    face: "ace"
},
{
    color: "#FF0000",
    suit: "diamonds",
    face: "2"
},
{
    color: "#FF0000",
    suit: "diamonds",
    face: "3"
},
{
    color: "#FF0000",
    suit: "diamonds",
    face: "4"
},
{
    color: "#FF0000",
    suit: "diamonds",
    face: "5"
},
{
    color: "#FF0000",
    suit: "diamonds",
    face: "6"
},{
    color: "#FF0000",
    suit: "diamonds",
    face: "7"
},{
    color: "#FF0000",
    suit: "diamonds",
    face: "8"
},{
    color: "#FF0000",
    suit: "diamonds",
    face: "9"
},
{
    color: "#FF0000",
    suit: "diamonds",
    face: "10"
},{
    color: "#FF0000",
    suit: "diamonds",
    face: "Jack"
},{
    color: "#FF0000",
    suit: "diamonds",
    face: "Queen"
},{
    color: "#FF0000",
    suit: "diamonds",
    face: "King"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "ace"
},
{
    color: "#FF0000",
    suit: "hearts",
    face: "2"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "3"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "4"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "5"
},
{
    color: "#FF0000",
    suit: "hearts",
    face: "6"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "7"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "8"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "9"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "10"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "Jack"
},{
    color: "#FF0000",
    suit: "hearts",
    face: "Queen"
},
{
    color: "#FF0000",
    suit: "hearts",
    face: "King"
},
{
    color: "#000",
    suit: "spades",
    face: "ace"
},
{
    color: "#000",
    suit: "spades",
    face: "2"
},
{
    color: "#000",
    suit: "spades",
    face: "3"
},{
    color: "#000",
    suit: "spades",
    face: "4"
},{
    color: "#000",
    suit: "spades",
    face: "5"
},{
    color: "#000",
    suit: "spades",
    face: "6"
},{
    color: "#000",
    suit: "spades",
    face: "7"
},{
    color: "#000",
    suit: "spades",
    face: "8"
},{
    color: "#000",
    suit: "spades",
    face: "9"
},{
    color: "#000",
    suit: "spades",
    face: "10"
},
{
    color: "#000",
    suit: "spades",
    face: "Jack"
},{
    color: "#000",
    suit: "spades",
    face: "Queen"
},{
    color: "#000",
    suit: "spades",
    face: "King"
},
{
    color: "#000",
    suit: "clubs",
    face: "ace"
},
{
    color: "#000",
    suit: "clubs",
    face: "2"
},
{
    color: "#000",
    suit: "clubs",
    face: "3"
},{
    color: "#000",
    suit: "clubs",
    face: "4"
},{
    color: "#000",
    suit: "clubs",
    face: "5"
},{
    color: "#000",
    suit: "clubs",
    face: "6"
},{
    color: "#000",
    suit: "clubs",
    face: "7"
},{
    color: "#000",
    suit: "clubs",
    face: "8"
},{
    color: "#000",
    suit: "clubs",
    face: "9"
},{
    color: "#000",
    suit: "clubs",
    face: "10"
},{
    color: "#000",
    suit: "clubs",
    face: "Jack"
},{
    color: "#000",
    suit: "clubs",
    face: "Queen"
},{
    color: "#000",
    suit: "clubs",
    face: "King"
}];

// Array that holds unused cards from startGame
let stockPile = [];

// Creates cards and puts them in the appropriate place to start game
function startGame() {
    // Creates a deep clone of the card deck for use in the game
    let cardsCopy = [...cardsArray];


    // For each tableau pile,
    document.querySelectorAll("tableau").forEach( (item) => {
        // For each number of cards the tableau pile should be initialied to
        for (i = 0; i < Number(item.dataset.init); i++)
        {
            // Create random card from deck
            // Get random index from length of cardCopys
            let randomIndex = Math.floor(Math.random() * cardsCopy.length);

            // Create a styled div that has datasets from the indexed card
            let card = document.createElement("div");
            let selectedCard = cardsCopy[randomIndex];
            card.style.backgroundColor = "salmon";
            card.style.width = 150 + "px";
            card.style.height = 250 + "px";
            card.dataset.color = selectedCard.color;
            card.dataset.suit = selectedCard.suit;
            card.dataset.face = selectedCard.face;

            // If this is the top card,
            if (i = Number(item.dataset.init) - 1)
            {
                // Show face-up
                card.style.backgroundColor = card.dataset.color;
                card.innerHTML = card.dataset.suit + " " + card.dataset.face;
            }

            // Splice the array at random index to prevent duplicate cards and append card to tableau pile
            cardsCopy.splice(randomIndex, 1);
            item.appendChild(card);
        }
    });

    // If there are still cards in the array after tableau forming (there will be under standard rules),
    if (cardsCopy.length > 0)
    {
        for (i = 0; i < cardsCopy.length; i++)
        {
            // Create the random cards again, but add them to stockPile for access by the user later.
            let randomIndex = Math.floor(Math.random() * cardsCopy.length);
            let card = document.createElement("div");
            let selectedCard = cardsCopy[randomIndex];
            cardsCopy.splice(randomIndex, 1);
            card.style.backgroundColor = "salmon";
            card.style.width = 150 + "px";
            card.style.height = 250 + "px";
            card.dataset.color = selectedCard.color;
            card.dataset.suit = selectedCard.suit;
            card.dataset.face = selectedCard.face;

            stockPile.push(card);
        }
    }
}

/* I ran out of time, but my next steps would be to get these cards showing on screen, make the stock pile show a face-up card from stockPile[] in the waste pile on click, have each card add a listener for clicks to attach it to the mouse, and have each card check if the card the player is dropping it on will meet the rules. If not, it stays attached. Then I'd add a click listener to the foundations that would run a win check to see if the suits have been ascended completely in all four foundations. If not, game continues. Checking for losses would be rather difficult, but a similar function for checking the rules for individual card combos would have to check each pile when the stock pile is flipped. If the new card is not playable, and there are no other moves in the tableaus, game over. Using a single page document (like I used for the memory game), I can display a game over screen to the player with the option to replay without reloading the page. 



*/
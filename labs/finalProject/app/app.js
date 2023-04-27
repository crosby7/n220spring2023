// Controller - manipulates data

// On page load, load home page - then create hash listener
changePage();
window.addEventListener("hashchange", changePage);

// Onclick in home page to set difficulty of game
function setDifficulty(difficulty)
{
    // All if hash == #home are for the homeTextDiv. Future use of this function will not use this div
    if (window.location.hash === "#home")
    {
        homeTextDiv = document.getElementById("homeText");
    }
    gameDifficulty = difficulty;

    if (difficulty === 2)
    {
        if (window.location.hash === "#home")
        {
            homeTextDiv.innerHTML = "You selected: Easy";
        }
        // Deep clone of blueprint array of images
        selectedImages = [...easyImages];
        // console.log(selectedImages);
        // console.log("Easy: " + easyImages);
    }
    else if (difficulty === 4)
    {
        if (window.location.hash === "#home")
        {
            homeTextDiv.innerHTML = "You selected: Normal";
        }
        // Deep clone of blueprint array of images
        selectedImages = [...normalImages];
        // console.log(selectedImages);
    }
    else
    {
        if (window.location.hash === "#home")
        {
            homeTextDiv.innerHTML = "You selected: Hard";
        }
        // Deep clone of blueprint array of images
        selectedImages = [...hardImages];
        // console.log(selectedImages);
    }

    // Preload images for cards
    preloadImages(selectedImages);
}

// Function to preload images for cards
function preloadImages(selectedImages)
{
    selectedImages.forEach( (item) => {
        let image = new Image();
        image.src = `images/${item}`;
    })
}

// Onclick for start game button on home page
function startGame()
{
    // If the gameDifficulty has been selected
    if (gameDifficulty != null)
    {
        // Change hash which will cause new injection
        window.location.hash = "#game";

        // After a reasonable pause - set game board up
        setTimeout(setGameBoard, 1000);
    }
}

// Function to setup gameboard and cards
function setGameBoard()
{
    // Get reference to the gameboard
    gameBoard = document.getElementById("gameBoard");

    // Create x rows -- x == gameDifficulty
    for (i = 0; i < gameDifficulty; i++)
    {
        // Rows are styled divs that use a flex box
        let newRow = document.createElement("div");
        newRow.style.width = 160 * gameDifficulty + "px";
        newRow.style.height = 140 * (1 + 1 / gameDifficulty) + "px";
        newRow.style.display = "flex";
        newRow.style.alignItems = "center";
        newRow.style.justifyContent = "space-between";
        newRow.style.margin = "10px auto";
        newRow.style.backgroundColor = "#3377FF";
        gameBoard.appendChild(newRow);

        // Within each row, create just as many cards
        for (j = gameDifficulty; j > 0; j--)
        {
            // Use random index to select an image from the selectedImages
            let randomIndex = Math.floor(Math.random() * selectedImages.length);
            console.log(randomIndex);

            // Create a styled div "card" with dataTags for selected images
            let newCard = document.createElement("div");
            newCard.className = "clickable";
            newCard.style.width = 140 + "px";
            newCard.style.height = "100%";
            //console.log(selectedImages[randomIndex]);
            newCard.dataset.imgTag = selectedImages[randomIndex];
            newCard.style.backgroundPosition = "center";
            newCard.style.backgroundSize = "cover";
            newCard.style.backgroundRepeat = "no-repeat";
            newCard.style.backgroundColor = "#e94f37";
            //console.log("easy before splice: " + easyImages);
            selectedImages.splice(randomIndex, 1);

            // Each card listens for clicks to flip
            newCard.addEventListener("click", flipCards);

            newRow.appendChild(newCard);
        }
    }
    console.log("Still easy: " + easyImages);
}


// When card is clicked, flip it
function flipCards(event) {

    // If a card has not been clicked before, 
    if (firstClicked === null)
    {
        // Remember this clicked card
        firstClicked = event.currentTarget;
        firstClicked = event.currentTarget;

        // Change card from cardback to image and remove eventListener -- player cannot click same card again
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.backgroundImage = `url(images/${event.currentTarget.dataset.imgTag})`;
        event.currentTarget.removeEventListener("click", flipCards);
    }
    // If this is the second card clicked,
    else
    {
        // Remember and flip second card
        secondClicked = event.currentTarget;
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.backgroundImage = `url(images/${event.currentTarget.dataset.imgTag})`;
    }

    // If both have been clicked, remove all listeners on cards and check for a match after a delay
    if (firstClicked != null && secondClicked != null)
    {
        document.querySelectorAll(".clickable").forEach((item) => {
            item.removeEventListener("click", flipCards);
        });
        setTimeout(checkMatches, 2000);
    }
}

function checkMatches() {

    //console.log("checking matches");
    
    // If the cards' image tags are the same, 
    if (firstClicked.dataset.imgTag === secondClicked.dataset.imgTag)
    {
        // remove the cards from play, increase score
        firstClicked.style.backgroundImage = null;
        secondClicked.style.backgroundImage = null;
        firstClicked.style.backgroundColor = "#3377FF";
        secondClicked.style.backgroundColor = "#3377FF";
        firstClicked = null;
        secondClicked = null;
        score += 1;
    }
    // If it isn't a match, 
    else
    {
        // Flip the cards back over, no score increase
        firstClicked.style.backgroundImage = null;
        firstClicked.style.backgroundColor = "#e94f37";
        secondClicked.style.backgroundImage = null;
        secondClicked.style.backgroundColor = "#e94f37";
        firstClicked = null;
        secondClicked = null;
    }

    // If all matches are made, 
    if (score === Math.pow(gameDifficulty, 2) / 2)
    {
        // Move to winscreen
        window.location.hash = "#winScreen";
    }

    // If game goes on, make the cards clickable again
    document.querySelectorAll(".clickable").forEach((item) => {
        item.addEventListener("click", flipCards);
    })
}

// Function in winscreen to play again
function playAgain() {
    // Reset score, use setDifficulty to reset selectedImages array, startGame after a necessary delay to get images
    score = 0;
    setDifficulty(gameDifficulty);
    setTimeout(startGame, 500);
}

// Function to return to menu
function quitGame() {
    // Remove gameDifficulty, reset score, change hash back to home
    gameDifficulty = null;
    score = 0;
    window.location.hash = "#home";
}
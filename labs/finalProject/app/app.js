// Controller - manipulates data

// On page load, load home page - then create hash listener
changePage();
window.addEventListener("hashchange", changePage);

// Onclick in home page to set difficulty of game
function setDifficulty(difficulty)
{
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
        selectedImages = [...normalImages];
        // console.log(selectedImages);
    }
    else
    {
        if (window.location.hash === "#home")
        {
            homeTextDiv.innerHTML = "You selected: Hard";
        }
        selectedImages = [...hardImages];
        // console.log(selectedImages);
    }


    preloadImages(selectedImages);
}

function preloadImages(selectedImages)
{
    selectedImages.forEach( (item) => {
        let image = new Image();
        image.src = `images/${item}`;
    })
}

function startGame()
{
    if (gameDifficulty != null)
    {
        window.location.hash = "#game";

        setTimeout(setGameBoard, 1000);
    }
}

function setGameBoard()
{
    gameBoard = document.getElementById("gameBoard");
    console.log(gameBoard);

    for (i = 0; i < gameDifficulty; i++)
    {
        let newRow = document.createElement("div");
        newRow.style.width = 120 * gameDifficulty + "px";
        newRow.style.height = 100 * (1 + 1 / gameDifficulty) + "px";
        newRow.style.display = "flex";
        newRow.style.alignItems = "center";
        newRow.style.justifyContent = "space-between";
        newRow.style.margin = "10px auto";
        newRow.style.backgroundColor = "#3377FF";
        gameBoard.appendChild(newRow);

        for (j = gameDifficulty; j > 0; j--)
        {
            let randomIndex = Math.floor(Math.random() * selectedImages.length);
            console.log(randomIndex);
            let newCard = document.createElement("div");
            newCard.className = "clickable";
            newCard.style.width = 100 + "px";
            newCard.style.height = "100%";
            //console.log(selectedImages[randomIndex]);
            newCard.dataset.imgTag = selectedImages[randomIndex];
            newCard.style.backgroundPosition = "center";
            newCard.style.backgroundSize = "cover";
            newCard.style.backgroundRepeat = "no-repeat";
            newCard.style.backgroundColor = "#e94f37";
            //console.log("easy before splice: " + easyImages);
            selectedImages.splice(randomIndex, 1);

            newCard.addEventListener("click", flipCards);

            newRow.appendChild(newCard);
        }
    }
    console.log("Still easy: " + easyImages);
}

function flipCards(event) {
    if (firstClicked === null)
    {
        firstClicked = event.currentTarget;
        firstClicked = event.currentTarget;
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.backgroundImage = `url(images/${event.currentTarget.dataset.imgTag})`;
        event.currentTarget.removeEventListener("click", flipCards);
    }
    else
    {
        secondClicked = event.currentTarget;
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.backgroundImage = `url(images/${event.currentTarget.dataset.imgTag})`;
    }

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
    
    if (firstClicked.dataset.imgTag === secondClicked.dataset.imgTag)
    {
        //console.log("A match!!!");
        firstClicked.style.backgroundImage = null;
        secondClicked.style.backgroundImage = null;
        firstClicked.style.backgroundColor = "#3377FF";
        secondClicked.style.backgroundColor = "#3377FF";
        firstClicked = null;
        secondClicked = null;
        score += 1;
    }
    else
    {
        //console.log("not a match");
        firstClicked.style.backgroundImage = null;
        firstClicked.style.backgroundColor = "#e94f37";
        secondClicked.style.backgroundImage = null;
        secondClicked.style.backgroundColor = "#e94f37";
        firstClicked = null;
        secondClicked = null;
    }

    if (score === Math.pow(gameDifficulty, 2) / 2)
    {
        //console.log("you win!!");
        window.location.hash = "#winScreen";
    }

    document.querySelectorAll(".clickable").forEach((item) => {
        item.addEventListener("click", flipCards);
    })
}

function playAgain() {
    score = 0;
    //selectedImages = null;
    //console.log("This is gameDiff: " + gameDifficulty);
    setDifficulty(gameDifficulty);
    //console.log("playing again with: " + selectedImages);
    //console.log("These are easy: " + easyImages);
    setTimeout(startGame, 500);
}

function quitGame() {
    gameDifficulty = null;
    score = 0;
    window.location.hash = "#home";
}
// Controller - manipulates data

// On page load, load home page - then create hash listener
changePage();
window.addEventListener("hashchange", changePage);

// Onclick in home page to set difficulty of game
function setDifficulty(difficulty)
{
    homeTextDiv = document.getElementById("homeText");
    gameDifficulty = difficulty;

    if (difficulty === 2)
    {
        homeTextDiv.innerHTML = "You selected: Easy";
        selectedImages = easyImages;
        console.log(selectedImages);
    }
    else if (difficulty === 4)
    {
        homeTextDiv.innerHTML = "You selected: Normal";
        selectedImages = normalImages;
        console.log(selectedImages);
    }
    else
    {
        homeTextDiv.innerHTML = "You selected: Hard";
        selectedImages = hardImages;
        console.log(selectedImages);
    }
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
            selectedImages.splice(randomIndex, 1);

            newCard.addEventListener("click", flipCards);

            newRow.appendChild(newCard);
        }
    }
}

function flipCards(event) {
    if (firstClicked === null)
    {
        firstClicked = event.currentTarget;
        console.log("firstcloicked: " + firstClicked);
        console.log(event.currentTarget);
        firstClicked = event.currentTarget;
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.backgroundImage = `url(images/${event.currentTarget.dataset.imgTag})`;
    }
    else
    {
        secondClicked = event.currentTarget;
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.backgroundImage = `url(images/${event.currentTarget.dataset.imgTag})`;
    }

    if (firstClicked != null && secondClicked != null)
    {
        checkMatches();
    }
}

function checkMatches() {
    document.querySelectorAll(".clickable").forEach((item) => {
        item.removeEventListener("click", flipCards);
    });
    console.log("checking matches");
    
    if (firstClicked.dataset.imgTag === secondClicked.dataset.imgTag)
    {
        firstClicked.style.display = "none";
        secondClicked.style.display = "none";
        firstClicked = null;
        secondClicked = null;
        score += 1;
        console.log("Score: " + score);
    }
    else
    {
        console.log("not a match");
        firstClicked.style.backgroundImage = null;
        firstClicked.style.backgroundColor = "#e94f37";
        secondClicked.style.backgroundImage = null;
        secondClicked.style.backgroundColor = "#e94f37";
        firstClicked = null;
        secondClicked = null;
    }

    if (score === Math.pow(gameDifficulty, 2) / 2)
    {
        console.log("you win!!");
        window.location.hash = "#winScreen";
    }

    document.querySelectorAll(".clickable").forEach((item) => {
        item.addEventListener("click", flipCards);
    })
}
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
        newRow.style.height = 200 * (1 + 1 / gameDifficulty) + "px";
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
            newCard.style.width = 100 + "px";
            newCard.style.height = "100%";
            console.log(selectedImages[randomIndex]);
            newCard.dataset.name = selectedImages[randomIndex];
            newCard.style.backgroundPosition = "center";
            newCard.style.backgroundSize = "cover";
            newCard.style.backgroundRepeat = "no-repeat";
            newCard.style.backgroundColor = "#e94f37";
            newCard.dataset.img = selectedImages[randomIndex];
            selectedImages.splice(randomIndex, 1);

            newCard.addEventListener("click", function (e) {
                if (firstClicked === null)
                {
                    console.log(e.currentTarget);
                    firstClicked = e.currentTarget;
                    //e.currentTarget.style.backgroundColor = null;
                    e.currentTarget.backgroundImage = `url(images/${e.currentTarget.dataset.img})`;
                    console.log(e.currentTarget.dataset.img);

                }
                else
                {
                    secondClicked = e.currentTarget;
                    e.currentTarget.style.backgroundColor = null;
                    e.currentTarget.backgroundImage = `url(images/${e.currentTarget.dataset.img})`;

                    //setTimeout(checkMatches, 2000);
                }
            })

            newRow.appendChild(newCard);
        }
    }
}


function checkMatches() {
    console.log("checking matches");
}
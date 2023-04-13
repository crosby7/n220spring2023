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
    }
    else if (difficulty === 4)
    {
        homeTextDiv.innerHTML = "You selected: Normal";
    }
    else
    {
        homeTextDiv.innerHTML = "You selected: Hard";
    }
}

function startGame()
{
    if (gameDifficulty != null)
    {
        window.location.hash = "#game";
        
        let gameBoard = document.getElementById("gameBoard");
        console.log(gameBoard);
    }
}



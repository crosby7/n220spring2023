// References for the page itself, used for single page document
let injectorDiv = document.getElementById("injector");

// Individual HTML pages to be loaded later
let homePage = `<div class="page">
<h1 class="title">Memory (Concentration)</h1>
<h3>Select a difficulty:</h3>
<div class="alignBottom"><div class="homeButtons">
<button onclick="setDifficulty(2)">Easy</button>
<button onclick="setDifficulty(4)">Normal</button>
<button onclick="setDifficulty(6)">Hard</button>
</div>
<div id="homeText"></div>
<button class="startGame" onclick="startGame()">Start Game</button></div>
</div>`;
let gamePage = `<div class="page"><h1 class="title">Click to flip a card:</h1>
<div id="gameBoard"></div>`;
let winPage = `<div class="page"><h1 class="title">Congratulations! You Win!</h1>
<h3>Play Again?</h3>
<div class="winScreenButtons">
  <button onclick="playAgain()">Play Again</button>
  <button onclick="quitGame()">Back to Menu</button>
</div></div>`;

// Game-relevant global variables
let gameDifficulty = null;
let score = 0;

// HOME PAGE VARS
let homeTextDiv;

// GAME VARS
const easyImages = [
    "aurora.jpg",
    "beach.jpg",
    "aurora.jpg",
    "beach.jpg"
];
const normalImages = [
    "aurora.jpg",
    "beach.jpg",
    "caves.jpg",
    "closeFronds.jpg",
    "closeupFlower.jpg",
    "clouds.jpg",
    "coastalResort.jpg",
    "creek.jpg",
    "aurora.jpg",
    "beach.jpg",
    "caves.jpg",
    "closeFronds.jpg",
    "closeupFlower.jpg",
    "clouds.jpg",
    "coastalResort.jpg",
    "creek.jpg"
];
const hardImages = [
    "aurora.jpg",
    "beach.jpg",
    "caves.jpg",
    "closeFronds.jpg",
    "closeupFlower.jpg",
    "clouds.jpg",
    "coastalResort.jpg",
    "creek.jpg",
    "aurora.jpg",
    "beach.jpg",
    "caves.jpg",
    "closeFronds.jpg",
    "closeupFlower.jpg",
    "clouds.jpg",
    "coastalResort.jpg",
    "creek.jpg",
    "desert.jpg",
    "desertSky.jpg",
    "distantWaterfall.jpg",
    "icelandicRainbow.jpg",
    "jellyfish.jpg",
    "lakesideMountains.jpg",
    "lightHouse.jpg",
    "lightThruTrees.jpg",
    "midsommar.jpg",
    "mountainCabin.jpg",
    "desert.jpg",
    "desertSky.jpg",
    "distantWaterfall.jpg",
    "icelandicRainbow.jpg",
    "jellyfish.jpg",
    "lakesideMountains.jpg",
    "lightHouse.jpg",
    "lightThruTrees.jpg",
    "midsommar.jpg",
    "mountainCabin.jpg"
];

let selectedImages;
let gameBoard;
let firstClicked = null;
let secondClicked = null;


// Function for changing pages
function changePage() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID === "home")
    {
        
        injectorDiv.innerHTML = homePage;
    }
    else if (pageID === "game")
    {
        injectorDiv.innerHTML = gamePage;
    }
    else if (pageID === "winScreen")
    {
        injectorDiv.innerHTML = winPage;
    }
    else
    {
        injectorDiv.innerHTML = homePage;
    }
}
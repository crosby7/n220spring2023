// References for the page itself, used for single page document
let injectorDiv = document.getElementById("injector");

// Individual HTML pages to be loaded later
let homePage = `<div class="homePage">
<h1 class="title">Memory (Concentration)</h1>
<h3>Select a difficulty:</h3>
<div class="homeButtons">
  <button onclick="setDifficulty(2)">Easy</button>
  <button onclick="setDifficulty(4)">Normal</button>
  <button onclick="setDifficulty(6)">Hard</button>
</div>
<div id="homeText"></div>
<button class="startGame" onclick="startGame()">Start Game</button>
</div>`;
let gamePage = `<h1 class="title">Click to flip a card:</h1>
<table id="gameBoard"></table>`;
let winPage = `<h1>Congratulations! You Win!</h1>
<h3>Play Again?</h3>
<div class="winScreenButtons">
  <button>Play Again</button>
  <button>Back to Menu</button>
</div>`;

// Game-relevant global variables
let gameDifficulty = null;
let score = 0;

// HOME PAGE VARS
let homeTextDiv;

// GAME VARS
let easyImages = [
    "aurora.jpg",
    "beach.jpg",
    "aurora.jpg",
    "beach.jpg"
];
let normalImages = [
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
let hardImages = [
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
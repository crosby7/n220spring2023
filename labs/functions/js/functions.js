/* Is Divisible by Seven

I'll start with an input, button, and div in HTML. 
I'll get a reference to the input and div in JS, and create an onclick function checkNumber() for the button
In this function, it will set a local variable givenNumber equal to the value in the input converted to Number (and reset the input to an empty string).
Then, it will call another function isDivisibleBySeven(givenNumber) which will take the given number as an argument.
This second function will check if the givenNumber is divisible by seven and return true or false. 
Back in the checkNumber function, I'll create an if/else that will update the div if the given number is or is not divisible. 

*/

/* Make Random

I'll again start with a button and a div in HTML. 
Then, I'll get a reference to the div in JS. 
The button will onclick call a function startRandomizing() that will call function randomGenerator().
randomGenerator() will create a random whole number between 0 and 10 using Math.floor, and return that number.
Back in startRandomizing(), the div's innerHTML will be updated to show the randomNumber returned.

*/

/* Show Info

I'll start with three buttons in HTML, labelled "home", "about", and "projects", and a div to show results. 
Each of these buttons will have an onclick function showInfo(index) that will take a number as an argument (0, 1, and 2 respectively)
In JS, I'll create an array of strings of the same name ["home", "about", "projects"], and I'll get a reference to the div.
Then, the function showInfo(index) will update the div with the string indexed by the given numeric parameter.

*/

// REFERENCES TO HTML
// =--= 
// IS DIVISIBLE: Get references
let divisibleInput = document.getElementById("divisibleInput");
let divisibleDiv = document.getElementById("divisibleDiv");

// MAKE RANDOM: Get reference
let randomDiv = document.getElementById("randomDiv");

// SHOW INFO: Define string array and get reference
let strings = ["Home", "About", "Projects"];
let infoDiv = document.getElementById("infoDiv");
// For fun -- made innerHTML preset, on first click, placeholder will be removed and from then on, info is appended, not replaced
let infoHasBeenAdded = false;
infoDiv.innerHTML = "Empty -- Press a button to add info";

// FUNCTIONS
// =--=
// IS DIVISIBLE: onclick function
function checkNumber() {
    let givenNumber = Number(divisibleInput.value);
    divisibleInput.value = "";

    if (isDivisible(givenNumber))
    {
        divisibleDiv.innerHTML = `${givenNumber} is divisible by seven!!`;
    }
    else
    {
        divisibleDiv.innerHTML = `${givenNumber} is NOT divisible :(`;
    }
}

// IS DIVISIBLE: Return function the checks the given number is actually divisible
function isDivisible(givenNumber) {
    if (givenNumber % 7 === 0)
    {
        return true;
    }
    else {
        return false;
    }
}

// MAKE RANDOM: Onclick function
function startRandomizing() {
    let randomNumber = randomGenerator();
    randomDiv.innerHTML = randomNumber;
}

// MAKE RANDOM: function to create random number
function randomGenerator() {
    let randomNumber = Math.floor(Math.random() * 10);

    return randomNumber;
}

// SHOW INFO: onclick function - parameter given in onclick
function showInfo(index) {
    if (infoHasBeenAdded)
    {
        infoDiv.innerHTML += strings[index];
    }
    else
    {
        infoDiv.innerHTML = strings[index];
        infoHasBeenAdded = true;
    }
}
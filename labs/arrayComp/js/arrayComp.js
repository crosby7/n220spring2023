/* Its Just Average

I'll start with a TEXT input and a button to submit. The submit button will call an onclick function inputAverage()
inputAverage() will take the given input value and split it on commas -- "1,2,3" will become [1, 2, 3].
Then, I'll create a LOCAL variable IJAsum = 0. In another function getSum(), I'll loop through the new array and add the indexed value to sum. 
After the loop is completed, I'll return IJAsum to inputAverage(). In this function, I'll then calculate the average by dividing the sum
by the length of the array.

Once all this is done, I'll display in a div the average and the sum, and clear the input. 

*/

/* Make Divs

Given an array of style-objects (color, height, and width), for each of them, I'll use document.createElement("div") to
create a div. I'll style each div with the indexed style-objects styles, and then I'll append the new div to the body. 

*/

/* Check Win

I'll start with a text input and a submit button. The submit button will call an onclick function checkWin()
checkWin() will first split the string on commas, creating an array of given values from the user. 
Then, checkWin() will call another function isThereAWinner(). This function will take the array and loop through it,
checking if the indexed value is 1. If it is, a global variable onesInARow will increment. If the value is not one, the variable 
will be reset to zero. If onesInARow reaches 3, the function will immediately return true. If, at the end of the loop, 
onesInARow is not 3, then the function will return false. 

If, in checkWin(), isThereAWinner() returns true, a div in HTML will display "YOU WIN!!!!". If not, 
the div will display "You are a not-winner!!!"

*/

// =---=
// GET REFERENCES

// IJA
let ijaInput = document.getElementById("itsJustAverageInput");
let ijaDiv = document.getElementById("averageDiv");

// Make Divs
let mdDiv = document.getElementById("makeDivsDiv");

// Check Win
let cwInput = document.getElementById("checkWinInput");
let cwDiv = document.getElementById("checkWinDiv");
// CAN BE DONE IN LOCAL SCOPE -- let onesInARow = 0;

// =---=
// FUNCTIONS

// IJA
// onclick
function inputAverage() {
    let str = ijaInput.value;
    let ijaArray = str.split(",");

    let sum = getSum(ijaArray);

    let ijaAverage = sum / ijaArray.length;

    ijaDiv.innerHTML = `Average: ${ijaAverage}  Sum: ${sum}`;
    ijaInput.value = "";
}

function getSum(givenArray) {
    let ijaSum = 0;
    for (let i = 0; i < givenArray.length; i++)
    {
        ijaSum += Number(givenArray[i]);
    }

    return ijaSum;
}

// Make Divs - Init array and loop through -- no function needed
let stylesArray = [
    {color: "#FF0000", height: 100, width: 300},
    {color: "#FFFF00", height: 200, width: 200},
    {color: "#ff0000", height: 300, width: 100}
];

stylesArray.forEach(function (style) {
    let styledDiv = document.createElement("div");
    styledDiv.style.backgroundColor = style.color;
    styledDiv.style.height = style.height + "px";
    styledDiv.style.width = style.width + "px";
    styledDiv.style.display = 'block';
    mdDiv.appendChild(styledDiv);
});

// Check Win
function checkWin() {
    let str = cwInput.value;
    let cwArray = str.split(",");

    if (isThereAWinner(cwArray))
    {
        cwDiv.innerHTML = "YOU WIN!!!!!";
    }
    else
    {
        cwDiv.innerHTML = "You are a not-winner!";
    }

    cwInput.value = "";
}

function isThereAWinner(givenArray)
{
    let onesInARow = 0;
    for (let i = 0; i < givenArray.length; i++)
    {
        console.log(givenArray[i]);
        if (Number(givenArray[i]) === 1)
        {
            onesInARow++;
            console.log("1s: " + onesInARow);
            if (onesInARow === 3)
            {
                return true;
            }
        }
        else
        {
            onesInARow = 0;
        }
    }

    return false;
}

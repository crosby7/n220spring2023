/* Loop but big
For this, I'll create a for loop, looping between i = 0 and i < 5. Then, I'll use createElement('div') to display (i + 1) * 1000 to the div


*/

let loopDiv = document.getElementById("loopButBig");

for(i = 0; i < 5; i++)
{
    loopDiv.innerHTML += (i + 1) * 1000 + " ";
}


/* Beep Bop

I'll start with another for loop, iterating between i = 0 and i < 25. 
Then, I'll create a series of if/elseif statements. If (i % 3 == 0 && i % 5 == 0), I'll display "beepbop" to a created div. Start with this one because it will be skipped if the other two tests are true instead. 

Then, if (i % 3 == 0), I'll display "beep"

If (i % 5 == 0 ), then I'll display "bop"

If none of them return true, just display the iterand i. 

*/

let beepBopHeader = document.createElement("h1");
beepBopHeader.innerHTML = "Beep Bop";
document.body.appendChild(beepBopHeader);

for(i = 0; i < 25; i++)
{
    let beepBopDiv = document.createElement("div");
    document.body.appendChild(beepBopDiv);
    if(i % 3 == 0 && i % 5 == 0)
    {
        beepBopDiv.innerHTML = "beepbop";
    }
    else if(i % 3 == 0)
    {
        beepBopDiv.innerHTML = "beep";
    }
    else if(i % 5 == 0)
    {
        beepBopDiv.innerHTML = "bop";
    }
    else
    {
        beepBopDiv.innerHTML = i;
    }
}


/* Runner Up

I'll start by declaring and defining an array of 3 runners' best times, in order from lowest to highest.


Then, a short for loop, i = 0 to i < 3, will display the indexed times to a created div each iteration. 

*/

let runnerHeader = document.createElement("h1");
runnerHeader.innerHTML = "Runner Up";
document.body.appendChild(runnerHeader);

let runnerTimes = [6.2, 7.4, 9.5];

for(i = 0; i < runnerTimes.length; i++)
{
    if(i != 0)
    {
        let runnerDiv = document.createElement("div");
        runnerDiv.innerHTML = runnerTimes[i];
        document.body.appendChild(runnerDiv);
    }
    
}

/* Favorray

I'll start by making a string array of 5 of my favorite things. Then, I'll loop through the array, creating a div that displays the indexed string followed by a predefined string " is one of my favorite things"

*/

let favHeader = document.createElement("h1");
favHeader.innerHTML = "Favorray";
document.body.appendChild(favHeader);

let myFavorray = ["Money", "Gaming", "Food", "Pizza", "Family"];

for(i = 0; i < myFavorray.length; i++)
{
    let favDiv = document.createElement("div");
    favDiv.innerHTML = myFavorray[i] + " is one of my favorite things!";
    document.body.appendChild(favDiv);
}

function randomColorPicker() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
}

let allDivs = document.getElementsByTagName("div");

for(i = 0; i < allDivs.length; i++)
{
    let randomColor = randomColorPicker();
    allDivs[i].style.backgroundColor = "#" + randomColor;
}
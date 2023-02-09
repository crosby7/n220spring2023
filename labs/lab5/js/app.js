let peakPixels = document.getElementById("peakPixels");
/* Using css properties, set a height/width variable equal to 100px. 

in the html, onClick will make this div call a peakPixels() function that will take the div and increase the height/width var by 10%. 

*/
// Set width/height var
let peakPixelsLength = 100;
// Style the peakPixels div - 100px and a color (for testing)
peakPixels.style.width = peakPixelsLength + "px";
peakPixels.style.height = peakPixelsLength + "px";
peakPixels.style.backgroundColor = "#FFAAFF";

let mcDivns = document.getElementById("mcDivns");
/* in the html, the div will have an onClick to call a mcDivns() function that will use .innerHTML to append "mc" to the text. 

After 3 clicks, the innerHTML will be replaced by "divdivdiv"

*/
// Set a mcDivns count var to track the number of clicks
let mcDivnsCount = 0;
// Give some basic styling
mcDivns.style.width = 100 + "px";
mcDivns.style.height = 100 + "px";
mcDivns.style.backgroundColor = "#AAEE00";
mcDivns.style.textAlign = "center";


let overNout = document.getElementById("overNout");
/* First, set the css properties for the element (100px x 100px), blue background. 

onMouseOver (on the div), change the background color to black.

onMouseOut, change the color back to blue
*/
// Set basic styling and set bGcolor
overNout.style.width = 100 + "px";
overNout.style.height = 100 + "px";
overNout.style.backgroundColor = "#00AAFF";


function peakPixelsClick() {
    peakPixelsLength += (peakPixelsLength * .1);
    peakPixels.style.width = peakPixelsLength + "px";
    peakPixels.style.height = peakPixelsLength + "px";
}

function mcDivnsClick() {
    mcDivns.innerHTML += "mc";
    mcDivnsCount++;

    if(mcDivnsCount >= 3)
    {
        mcDivns.innerHTML = "divdivdiv";
    }
}

function overNoutEffect(value) {
    if(value === "over")
    {
        overNout.style.backgroundColor = "#000000";
    }
    else
    {
        overNout.style.backgroundColor = "#00AAFF";
    }
}
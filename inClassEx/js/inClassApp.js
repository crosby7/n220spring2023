
//application vars
let dvWheel = document.getElementById("wheel");
let colors = [ "#f9ff40", "#ffcc40", "#ff821c", "#ff591c", "#d11b1b", "#940f5a",  "#611069", "#4d0e9e", "#1430e3", "#14d9e3", "#05a80a", "#b4fa3c" ];

let harmonyDisplay = document.querySelector(".harmonyDisplay");

//setup
colors.forEach( function(color, i) {
  let rot = (i / colors.length) * 360;
  
  let newSelection = document.createElement("div");
  newSelection.style.backgroundColor = color;
  newSelection.style.transform = `rotate(${rot}deg) translate(8em)`;
  newSelection.dataset.color = color;
  newSelection.dataset.index = i;
  //newSelection.innerHTML = color;
  newSelection.classList.add("option");
  wheel.appendChild(newSelection);
  
  //add event listener to newSelection
  newSelection.addEventListener("click", function (e) {
    let index = Number(e.currentTarget.dataset.index);
    console.log("first index: " + index);
    console.log("colorLength: " + colors.length);

    let halfDist = colors.length / 2;
    console.log("half distance: " + halfDist);
    let newIndex = halfDist + index;
    console.log("newIndex: " + newIndex);

    if (newIndex > colors.length)
    {
      let diffToMax = colors.length - index;
      console.log("diff to max: " + diffToMax);
      let distRemaining = halfDist - diffToMax;
      console.log("dist remainign: " + distRemaining);
      newIndex = distRemaining;

      console.log("newIndex (fixed): " + newIndex);
    }

    harmonyDisplay.style.backgroundColor = colors[newIndex];
    harmonyDisplay.innerHTML = "This is the color harmony for the clicked color";
  })
})

//functions

//make handler for clicking on new selection

//
//Use the 'index' property of the dataset to get color position in the array

//for analogous - two away from current
//for complementary - half away from current
//for split - half away from current, then +/- 2
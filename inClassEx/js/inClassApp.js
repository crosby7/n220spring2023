// Declare object bike
const bicycle = {age: 0, wear: 0, isDestroyed: 0};

function bicycleAging(bicycle) {
  // Increment age of bike
  bicycle.age++;
  // If age reaches 5 (or more)
  if(bicycle.age >= 5)
  {
    // Set wear to 100, set isDestroyed to 1 (true), display to console
    bicycle.wear = 100;
    bicycle.isDestroyed = 1;
    console.log(bicycle);
  }
}


bicycleAging(bicycle);
bicycleAging(bicycle);
bicycleAging(bicycle);
bicycleAging(bicycle);
bicycleAging(bicycle);

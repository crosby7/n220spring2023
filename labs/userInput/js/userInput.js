/* Greeter

To complete this, I will create a text input and a button in HTML. Then, I'll get a reference to the input so I can track its value. 
Then, in an onclick function call on the button, I'll print "Hello " followed by the value of the input to the console.
 
*/
/* Tip Calc

To do this, I'll first make a numeric input and a button in HTML. 
Then I'll get a reference to the input in JS. 
An onclick function call on the button will take the value of the input as a bill total,
then calculate a 20% tip and store that as a separate local variable. 
Then, a print to console will display "Tip: " and the tip amount, "Total: " and the bill + tip.

*/
/* Password Protected

I'll make two text inputs and one submit button.

Onclick (on the button), a function will be called that will check the two fields. 
If the first field says "username" AND the second says "password", then a div on the page
will be updated to say "Success". If the fields are incorrect, the div will say "Wrong information"

*/

let greeterInput = document.getElementById("greeterInput");
let tipCalcInput = document.getElementById("tipCalcInput");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

let userDiv = document.getElementById("userCheck");

function greeterFunction() {
    console.log("Hello " + greeterInput.value + "!");
    greeterInput.value = "";
}

function tipCalc() {
    let billSubtotal = Number(tipCalcInput.value);
    tipCalcInput.value = "";

    let billTip = Math.round(100 *(billSubtotal * .20)) / 100;

    console.log("Tip: $" + billTip + " -- Bill Total: $" + (billSubtotal + billTip));
}


function userCheck() {
    if(usernameInput.value === "Username" && passwordInput.value === "Password")
    {
        userDiv.innerHTML = "Success!";
    }
    else if(usernameInput.value === "Username")
    {
        userDiv.innerHTML = "Forgot your password?";
        passwordInput.value = "";
    }
    else
    {
        userDiv.innerHTML = "User not found";
        usernameInput.value = "";
        passwordInput.value = "";
    }
}
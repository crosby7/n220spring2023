let textInput = document.getElementById("identifyVowel");
let responseDiv = document.getElementById("response");

function identifyVowel() {
  let givenText = textInput.value;

  if (isVowel(givenText))
  {
    responseDiv.innerHTML = "This is a vowel!";
  }
  else
  {
    responseDiv.innerHTML = "This is not a vowel";
  }
}

function isVowel(givenText)
{
  givenText = givenText.toUpperCase();
  for (let i = 0; i < givenText.length; i++)
  {
    if (givenText[i].includes("A"))
    {
      return true;
    }
  }
}
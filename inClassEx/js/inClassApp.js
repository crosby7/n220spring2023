// This function is called by buttons in the document
function checkResponse(time)
{
  // Find the "response" h1 tag
  let answerText = document.getElementById("response");
  // If the pressed button says Afternoon
  if(time === 'Afternoon')
  {
    // Display proper text to h1
    answerText.innerHTML = "That is correct!!!";
  }
  else
  {
    // if not right, display guess again to h1
    answerText.innerHTML = "Guess Again...";
  }
}
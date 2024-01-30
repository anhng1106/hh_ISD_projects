function showStudyGrant() {
  // Read values from the input fields
  var age = Number(document.getElementById("age").value);
  var parents = document.getElementById("withParents").value;
  var text;
  // if student is living with parents and his/her age is greater than 20 or equal
  if (age >= 20 && parents == "n") {
    //assign text "The study grant is 335.20 euros." to a variable
    text = "The study grant is 335.20 euros.";
  }
  //otherwise if ....
  else if (age >= 20 && parents == "y") {
    text = "The study grant is 136.70 euros.";
  } else {
    text = "Ask Kela.";
  }

  // Write the answer on the page, to the answer div, as content of the div
  document.getElementById("answer").innerHTML = text;
}

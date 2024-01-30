function checkAge() {
  // assign the age input field value into a variable
  var age = Number(document.getElementById("age").value);
  //if age smaller than 18
  if (age < 18) {
    // assign text "Adolescents are not allowed to play." to a variable
    var result;
    result = "Adolescents are not allowed to play.";
  }

  // otherwise
  else {
    // assign text "Old enough to play." to a variable
    result = "Old enough to play.";
  }

  // Write the answer to the web page DOM, in the answer div, as the content
  document.getElementById("answer").innerHTML = result;
}

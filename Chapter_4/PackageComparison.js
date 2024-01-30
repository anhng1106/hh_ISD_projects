function comparePackages() {
  // assign input field values into a variables
  var text = Number(document.getElementById("textMessages").value);
  var call = Number(document.getElementById("callTime").value);
  var result;
  // calculate the costs of the Special Package
  var specialPackage = (text + call) * 0.069 + 19.9;

  // If the Special package is cheaper than the All-inclusive package
  if (specialPackage < 29.9) {
    // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
    // to a variable
    result =
      "The Special package (" +
      specialPackage.toFixed(2) +
      ") is cheaper than the All-inclusive package (29.90)";
  }
  // otherwise
  // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
  // to a variable
  else {
    result =
      "The All-inclusive package (29.90) is cheaper than the Special package (" +
      specialPackage.toFixed(2) +
      ")";
  }
  // write the answer to the web page DOM, in the answer div, as the content
  document.getElementById("answer").innerHTML = result;
}

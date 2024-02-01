// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function lengthOfVist(length) {
  var output;
  var reimbursement;
  if (length <= 10) {
    reimbursement = 8;
  } else if (length <= 20) {
    reimbursement = 11;
  } else if (length <= 30) {
    reimbursement = 13.5;
  } else if (length <= 45) {
    reimbursement = 16.5;
  } else if (length > 45) {
    reimbursement = 21;
  }
  output =
    "Length of visit is " +
    length +
    " minutes." +
    "<br>" +
    "Kela reimbursement is " +
    reimbursement.toFixed(2) +
    " euros.";
  return output;
}
// Define a function
function calculate(length) {
  // Read values from the input fields
  length = Number(document.getElementById("length").value);
  // Call the function (1.) which calculates and returns Kela reimbursement
  lengthOfVist(length);

  // Write the answer on the page, to the answer div, as content of the div
  document.getElementById("answer").innerHTML = lengthOfVist(length);
}

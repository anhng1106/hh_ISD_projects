// Defne a function (1.)
function caculateKelaReimbursement(length) {
  var KelaReimbursement = 0;
  if (length <= 10) {
    KelaReimbursement = 8;
  } else if (length <= 20) {
    KelaReimbursement = 11;
  } else if (length <= 30) {
    KelaReimbursement = 13.5;
  } else if (length <= 45) {
    KelaReimbursement = 16.5;
  } else if (length > 45) {
    KelaReimbursement = 21;
  }
  return KelaReimbursement;
}
// Defne a function (2.)
function amountPay(doctorfee, KelaReimbursement) {
  const officeFee = 15.9;
  var amountNeedPay = doctorfee + officeFee - KelaReimbursement;

  return amountNeedPay;
}

// Define a function (3.)
function calculate() {
  // Read values from the input fields
  var length = parseInt(document.getElementById("length").value);
  var doctorfee = parseInt(document.getElementById("doctorsFee").value);

  // Call the function (1.) which calculates Kela reimbursement
  var KelaReimbursement = caculateKelaReimbursement(length);

  // Call the function (2.) which calculates amount left for the customer to pay
  var amountNeedPay = amountPay(doctorfee, KelaReimbursement);
  // Write the answer on the page, to the answer div, as content of the div
  document.getElementById("answer").innerHTML =
    "Doctor's Fee is " +
    doctorfee.toFixed(2) +
    " euros." +
    "<br>" +
    "Kela reimbursement is " +
    KelaReimbursement.toFixed(2) +
    " euros." +
    "<br>" +
    "Office Fee is 15.90 euros." +
    "<br>" +
    "Customer needs to pay " +
    amountNeedPay.toFixed(2) +
    " euros.";
}

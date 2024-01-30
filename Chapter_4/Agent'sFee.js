function calculateFee() {
  // Read value from the input field
  var price = Number(document.getElementById("price").value);

  // Calculate fee, save the result to a variable
  var agentFee = (price * 3.44) / 100;

  // if the fee is under minimum, update it
  if (agentFee < 2400) {
    agentFee = "Real state agent's fee is 2400.00 euros";
  } else {
    agentFee = "Real state agent's fee is " + agentFee.toFixed(2) + " euros";
  }

  // Write the answer on the page, to the fee div, as content of the div
  document.getElementById("fee").innerHTML = agentFee;
}

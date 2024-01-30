function calculateCosts() {
  //TODO
  var Kilometers = Number(document.getElementById("kilometers").value);
  var consumption = Number(document.getElementById("consumption").value);
  var price = Number(document.getElementById("price").value);
  var participants = Number(document.getElementById("participants").value);
  var carShareCost =
    ((consumption / 100.0) * price * Kilometers) / participants;
  document.getElementById("answerId").innerHTML =
    "Fuel costs per participant is " + carShareCost.toFixed(2) + " euros.";
}

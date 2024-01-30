function tellInfractionFine() {
  // TODO
  var drivingSpeed = Number(document.getElementById("drivingSpeed").value);
  var speedLimit = Number(document.getElementById("speedLimit").value);
  var excessSpeed = drivingSpeed - speedLimit;
  var text;
  if (
    speedLimit >= 10 &&
    speedLimit <= 60 &&
    excessSpeed > 0 &&
    excessSpeed <= 15
  ) {
    text = "Infraction fine is 85 euros.";
  } else if (
    speedLimit >= 10 &&
    speedLimit <= 60 &&
    excessSpeed > 15 &&
    excessSpeed <= 20
  ) {
    text = "Infraction fine is 115 euros.";
  } else if (
    speedLimit >= 70 &&
    speedLimit <= 120 &&
    excessSpeed > 0 &&
    excessSpeed <= 15
  ) {
    text = "Infraction fine is 70 euros.";
  } else if (
    speedLimit >= 70 &&
    speedLimit <= 120 &&
    excessSpeed > 15 &&
    excessSpeed <= 20
  ) {
    text = "Infraction fine is 100 euros.";
  } else if (excessSpeed > 20) {
    text = "Income-based unit fine.";
  } else {
    text = "No speeding, no fine.";
  }
  document.getElementById("answer").innerHTML = text;
}

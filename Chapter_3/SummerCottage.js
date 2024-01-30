function calculateRent() {
  // TODO
  var rent = Number(document.getElementById("rent").value);
  var participants = Number(document.getElementById("participants").value);
  var rentPerParticipants = rent / participants;
  document.getElementById("answerDiv").innerHTML =
    "Rent per participants is " +
    rentPerParticipants.toFixed(2) +
    " euros" +
    ".";
}

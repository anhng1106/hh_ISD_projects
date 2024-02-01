function showComparisonScores() {
  // read the votes to a variable
  var votes = Number(document.getElementById("votes").value);
  // read the candidates to a variable
  var candidates = Number(document.getElementById("candidates").value);
  // initialize output text variable
  var outputText = "";
  var scores;
  // For each candidates
  // Calculate comparison score for candidate
  for (var i = 1; i <= candidates; i++) {
    scores = votes / i;
    outputText = outputText + i + ". candidate: " + scores.toFixed(0) + "<br>";
  }

  // Show scores
  document.getElementById("answer").innerHTML = outputText;
}

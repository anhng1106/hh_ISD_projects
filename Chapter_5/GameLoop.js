function calculateProfit() {
  // Read value of rounds from the input field
  var rounds = Number(document.getElementById("rounds").value);

  var bets = 1;
  var totalWins = 0;
  var outputText = "";
  // Make a loop which is executed as many times as was set through the input field.
  // Let win counter cumulating during every round of the loop.
  for (var i = 1; i <= rounds; i++) {
    // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
    var pips = Math.round(Math.random() * 5 + 1);

    // If the randomized pips is 1, 3 or 5,  no pay
    if (pips == 1 || pips == 3 || pips == 5) {
      totalWins = totalWins + bets * 0;
    }
    // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
    else if (pips == 2 || pips == 4) {
      totalWins = totalWins + bets * 1.25;
    }
    // Otherwise the pips 6 returns the inserted bet 150%
    else {
      totalWins = totalWins + bets * 1.5;
    }

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
    var profit = bets * rounds - totalWins;
    outputText =
      "Bets were all together " +
      (bets * rounds).toFixed(2) +
      "<br>" +
      "Wins were " +
      totalWins.toFixed(2) +
      "<br>" +
      "Profit was " +
      profit.toFixed(2);
  }
  // Write the answer on the page, to the answer div, as content of the div
  document.getElementById("answer").innerHTML = outputText;
}

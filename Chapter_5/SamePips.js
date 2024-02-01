// Randomize the pips once
var pips1 = Math.round(Math.random() * 5 + 1);
var pips2 = Math.round(Math.random() * 5 + 1);
// Set the count to be one (now you have randomized once)
var count = 0;
// Repeat as long as (pips are not equal)
while (pips1 !== pips2) {
  // Randomize again
  var pips1 = Math.round(Math.random() * 5 + 1);
  var pips2 = Math.round(Math.random() * 5 + 1);

  // Increment counter by one
  count++;
}

// Write the answer (including the count) to the html page (answer div)
document.getElementById("answer").innerHTML =
  "Same dice pips: " +
  pips1 +
  " and " +
  pips2 +
  "<br>" +
  "There were " +
  count +
  " randomization rounds until we got the same pips.";

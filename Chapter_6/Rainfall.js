// Create an array with twelve rainfall values
var rainfall = [
  47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8, 65.4, 69.7, 66.1, 54.6,
];

function calculateSum() {
  // Initialize the sum variable to start from 0
  var sum = 0;

  // Loop through the array
  for (var i = 0; i < rainfall.length; i++) {
    sum += rainfall[i];
  }
  // Write the sum of the rainfall values on the HTML page
  document.getElementById("answer").innerHTML =
    "The annual rainfall in Helsinki is " + sum.toFixed(1) + " mm.";
}

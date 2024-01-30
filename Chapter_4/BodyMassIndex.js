function calculateBMI() {
  //TODO
  var weight = Number(document.getElementById("weight").value);
  var height = Number(document.getElementById("height").value);
  var text;
  var bmi = weight / (((height / 100.0) * height) / 100.0);
  if (bmi <= 18.4) {
    text = " (Weight less than normal weight)";
  } else if (bmi < 24.9) {
    text = " (Normal weight)";
  } else {
    text = " (Overweight)";
  }
  document.getElementById("answer").innerHTML =
    "Body Mass Index (BMI) is " + bmi.toFixed(2) + text;
}

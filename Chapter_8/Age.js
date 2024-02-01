function tellAge() {
  // Read value of yearOfBirth from the input field
  var yearOfBirth = Number(document.getElementById("yearOfBirth").value);

  // Figure out the current date into today variable
  var currentDate = new Date();

  // Use getFullYear() method to get the current year out from the today variable
  var currentYear = currentDate.getFullYear();

  // Calculate the (rough estimate of the) age
  var age = currentYear - yearOfBirth;

  var message;
  // If age is less than zero
  if (age < 0) {
    //  Show an error message
    message = "Please input the age more than 0.";
  } else {
    // otherwise tell the age
    message = "You are now " + age + " years old.";
  }

  document.getElementById("answer").innerHTML =
    message + "<br>" + "(Current year is " + currentYear + ".)";
}

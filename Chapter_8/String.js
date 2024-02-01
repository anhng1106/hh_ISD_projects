function processName() {
  // read value of name from the input field
  var name = document.getElementById("name").value;

  // show it with "ALL CAPS" using toUpperCase()
  var allCaps = name.toUpperCase();

  // show it with  "all small letters" using toLowerCase()
  var smallLetters = name.toLowerCase();

  //tell how many characters are there (length, includes also all spaces)
  var length = name.length;

  // tell, whether the input string contains the word 'muumi'
  var inputString = name.indexOf("muumi");
  var result;
  if (inputString !== -1) {
    result = inputString;
  } else {
    result = "Doesn't contain the text muumi.";
  }

  // tell the first character using charAt()
  var firstCharacter = name.charAt(0);

  // tell which ones are the first three characters using subStr().
  var firstThreeCharacters = name.substr(0, 3);

  document.getElementById("upperCase").innerHTML =
    "With upper case letters: " + allCaps;
  document.getElementById("lowerCase").innerHTML =
    "With lower case letters: " + smallLetters;
  document.getElementById("length").innerHTML = "Character count: " + length;
  document.getElementById("contains").innerHTML = result;
  document.getElementById("firstCharacter").innerHTML =
    "First character: " + firstCharacter;
  document.getElementById("manyCharacters").innerHTML =
    "First three characters: " + firstThreeCharacters;
}

// Assignment Code

//
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Function prompts password length and stops if it gets a value
// less than 8, more than 128, or null (such as if you pressed escape or cancel on the prompt).
function generatePassword() {
  var passLength = prompt(
    "How long should your password be? Please choose a value between 8 and 128, inclusive."
  );

  if (passLength === null) {
    return result;
  }
  // Note that it displays an alert for being out of the value range but not entering null,
  // as I assume that anyone trying to cancel or escape just wants to return to the main screen
  // without having to flip through 5+ more screens.
  if (passLength < 8 || passLength > 128) {
    alert("Please choose a value between 8 and 128, inclusive.");
    return result;
  }

  // Then, the function asks what character sets you want used in your password through 4 confirmations.
  // The *Con variables and else clauses are only necessary because
  // I wanted to display what options were selected to the user (see later alerts).
  // Efficiency-wise, I'd probably get rid of that message, saving as many as 24 lines of code.
  if (confirm("Do you want special characters in your password?")) {
    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var specCon = "[special characters] ";
  } else {
    specialChar = "";
    specCon = "";
  }
  if (confirm("Do you want numbers in your password?")) {
    var numbers = "0123456789";
    var numCon = "[numbers] ";
  } else {
    numbers = "";
    numCon = "";
  }
  if (confirm("Do you want lowercase letters in your password?")) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var lowCon = "[lowercase letters] ";
  } else {
    lowerCase = "";
    lowCon = "";
  }
  if (confirm("Do you want uppercase letters in your password?")) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upCon = "[uppercase letters] ";
  } else {
    upperCase = "";
    upCon = "";
  }

  // As stated, these weren't required, but I thought a reminder wouldn't hurt.
  alert("Your password will be " + passLength + " characters long");
  alert(
    "You have chosen to include the following: " +
      specCon +
      numCon +
      lowCon +
      upCon
  );

  // Advice taken from https://stackoverflow.com/a/1349426 and https://stackoverflow.com/a/1497512
  // Concat is used to smoosh together our arrays, combining empty or full charsets as directed on the fly.
  var string = "";
  var charset = string.concat(specialChar, numbers, lowerCase, upperCase);
  // The alert acts as a failsafe in case a user doesn't select ANY charsets, warning them of why they're not getting anything.
  if (charset === "") {
    alert(
      "Whoops, you didn't select any character sets - there's nothing to display! Please choose at least one character set to include in your password."
    );
  }
  // Normal For loop, but combined with the dynamically created charset such that random decimal
  // produced by Math.random correlates to a character from the charset.
  // result += ... selects the character at the generated length and adds it to 'result', which starts as blank.
  // This is then repeated however many times was specified by the user before being returned.
  var charLength = charset.length;
  result = "";
  for (var i = 1; i <= passLength; i++) {
    result += charset.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

// Write password to the #password input
//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment Code

  // Generate Password; "Something" will be replaced by 
  // prompt for password length
  // check to see if user entered length
  // 4 confirms (special char, numbers, lowercase, uppercase)
  // generate password following criteria
  // display password (that's what the 2nd function does)
  //NOTE: user specifications come from confirms (must save in variables following confirms)
  // 


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

var passLength =  parseInt (prompt ("How long should you password be? Please choose a value between 8 and 128, inclusive."), 10); 
if (passLength < 8 | passLength > 128) {
  alert ("Please choose a value between 8 and 128, inclusive (8 - 128)."); 
  return; 
}

if (confirm ("Do you want special characters in your password?")) {
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; 
  var specCon = "[special characters] "; 
}
else {
  specCon = ""
}
if (confirm ("Do you want numbers in your password?")) {
  var numbers = "0123456789"; 
  var numCon = "[numbers] "; 
}
else {
  numCon = ""
}
if (confirm ("Do you want lowercase letters in your password?")) {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
  var lowCon = "[lowercase letters] "
}
else {
  lowCon = ""
}
if (confirm ("Do you want uppercase letters in your password?")) {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   
  var upCon = "[uppercase letters] "
}
else {
  upCon = ""
}

alert ("You have chosen to include the following: " + specCon + numCon + lowCon + upCon)

// Advice taken from https://stackoverflow.com/a/1349426 and https://stackoverflow.com/a/1497512 
    var string = "";       
    var charset = string.concat (specialChar, numbers, lowerCase, upperCase); 
    if (charset === "") {
      alert ("Whoops, you didn't select any character sets - there's nothing to display! Please choose at least one character set to include in your password.")
    }
    var charLength = charset.length; 
        result = "";
    for (var i = 1; i <= passLength; i++) {
        result += charset.charAt (Math.floor(Math.random() * charLength));
    }
    return result; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

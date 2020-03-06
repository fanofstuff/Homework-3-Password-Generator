// Assignment Code

  // Generate Password; "Something" will be replaced by 
  // prompt for password length
  // check to see if user entered length
  // 4 confirms (special char, numbers, lowercase, uppercase)
  // generate password following criteria
  // display password (that's what the 2nd function does)
  //NOTE: user specifications come from confirms (must save in variables following confirms)
  // 
  // for (var i = 0; i <= "userLength"; i++) {
    // take an array of numbers (set in a string (in link on readme)), and then make a random number using .js; 
    // then, take that random number and find one set to .length to select from list
  // }

  //Failed attempt at creating a loop to simplify confirms. 
//for (var i=0; i < 4; i++) {
//   var character = confirm ("Do you want " + criteria[i] + " in your password?"); 
//   if (character[i] == true) {
//     console.log ("Happy"); 
//   }
//   else {
//     console.log ("Sad"); 
//   }

// }

var generateBtn = document.querySelector("#generate");

function generatePassword() {

var passLength =  parseInt (prompt ("How long should you password be? Please choose a value between 8 and 128, inclusive."), 10); 
if (passLength < 8 | passLength > 128) {
  alert ("Please choose a value between 8 and 128, inclusive (8 - 128)."); 
  return; 
}

var criteria = ["special characters", "numbers", "lowercase letters", "uppercase letters"]
if (confirm ("Do you want special characters in your password?")) {
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; 
}
else {
  var specialChar = ""; 
}
if (confirm ("Do you want numbers in your password?")) {
  var numbers = "0123456789"; 
}
else {
  var numbers = ""; 
}
if (confirm ("Do you want lowercase letters in your password?")) {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
}
else {
  var lowerCase = ""; 
}
if (confirm ("Do you want uppercase letters in your password?")) {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   
}
else {
  var upperCase = "";   
}
// Advice taken from https://stackoverflow.com/a/1349426 and https://stackoverflow.com/a/1497512 
    var string = "";       
    var charset = string.concat (specialChar, numbers, lowerCase, upperCase); 
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
generateBtn.addEventListener("click", writePassword);

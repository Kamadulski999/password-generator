

// Assignment code here
var numbers = "0123456789"
var lowerCase = "abcdefghijklmonopqrstuvwxyz";          
var upperCase = lowerCase.toUpperCase();
var specialChars = "`'~!@#$%^&*()_-+={[}]|\:;<,>.?/";
var newPassword = "";
var newCharacter = "";
var randomNumber = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




function generatePassword() {
newPassword = ""
var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.")

//ensures password length is between 8 and 128 characters

if (passwordLength < 8 || passwordLength > 128){
  window.alert("Please choose a valid password length!")
  generatePassword();
}

/* this block will generate a series of prompts asking about each character type to include in the password criteria. Upon clicking OK that set of characters will
be concatanated into an empty string designated by variable choiceString */
else{
var choiceString = ""
var userPromptLower = window.confirm("Would you like to include lower case letters? Click OK to include otherwise click Cancel.");
  if (userPromptLower) {
    choiceString = lowerCase;
    }
  
var userPromptUpper = window.confirm("Would you like to include upper case letters? Click OK to include otherwise click Cancel.")
  if (userPromptUpper) {
    choiceString += upperCase;
    }

var userPromptNumber = window.confirm("Would you like to include numbers? Click OK to include otherwise click Cancel.")
  if (userPromptNumber) {
    choiceString += numbers;
    }

var  userPromptSpecial = window.confirm("Would you like to include special characters? Click OK to include otherwise click Cancel.") 
  if (userPromptSpecial) {
    choiceString += specialChars;
    console.log(choiceString)
  } 


  // ensures that the choiceString contains at least one character type
if (!choiceString) {
  window.alert("You need to select at least one character type!");
  generatePassword();
}

/* sets up a for loop that cycles through once for each character in the desired password length. 
   selects a random number which then is used to index and return a character from the combined choiceString using charAt */ 
else {
  for ( let i = 0; i < passwordLength; i++ ) {
  randomNumber = Math.floor((Math.random() * choiceString.length) + 1);
  newCharacter = choiceString.charAt(randomNumber);
  newPassword += newCharacter;
  
  
    
      }
    }
  }
};


// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(newPassword);
  passwordText.value = newPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

//get Password Criteria
var pwUpperCase = true;
var pwLowerCase = true;
var pwSpecialCharacters = true;
var pwNumbers = true;
var pwLength = 20;

//Define Character Arrays using const to prevent Arrays get reassigned
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+=";

//Functions to choose random character from predefined Arrays
function chooseUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function chooseLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function chooseNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function chooseSpecialCharacter() {
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

// Write password to the #password input
function writePassword() {
  //var criteria = getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//get Password Criteria
function getCriteria() {
  var pwUpperCase = confirm("Should your pw contain Upper Case letters?");
  console.log(pwUpperCase);
  return pwUpperCase;
}

var pwUpperCase = true;
var pwLowerCase = true;
var pwSpecialCharacters = true;
var pwNumbers = true;
var pwLength = 20;

//function to generate password
function generatePassword() {
  //at the beginning pw = ""
  var password = "";

  //loop through the character generation process pwLength times
  for (var i = 0; i < pwLength; i++) {
    var pwPart = createPart();
    password += pwPart;
  }

  return password;
}

//for each possible character we create an array and choose one character randomly
function createPart() {
  //create empty array and push applicable characters
  var pwPart = [];

  if (pwUpperCase) {
    pwPart.push(chooseUpperCase());
  }

  if (pwLowerCase) {
    pwPart.push(chooseLowerCase());
  }

  if (pwSpecialCharacters) {
    pwPart.push(chooseSpecialCharacter());
  }

  if (pwNumbers) {
    pwPart.push(chooseNumber());

    //choose a random character out of this array
    return pwPart[Math.floor(Math.random() * pwPart.length)];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

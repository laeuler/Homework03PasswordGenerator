// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define Character Arrays using const to prevent Arrays get reassigned
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //console.log("clicked the button")
  //Prompt the user for the password criteria
  var pwLength = prompt(
    "How long should your password be? (please choose 8 to 128 characters)"
  );
  //check if proper number in given interval
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert(
      "Your preference is not possible, please insert a valid number between 8 and 128"
    );
    generatePassword();
    return;
  }
  //lowercase, uppercase, numbers, special characters
  var pwUpperCase = confirm(
    "Press ok if your password should contain upper case characters"
  );
  var pwLowerCase = confirm(
    "Press ok if your password should contain lower case characters"
  );
  var pwNumbers = confirm("Press ok if your password should contain numbers");
  var pwSpecial = confirm(
    "Press ok if your password should contain special characters"
  );
  //Check if at least on type of characters is selected
  //console.log(pwUpperCase);
  //console.log(pwLowerCase);
  //console.log(pwNumbers);
  //console.log(pwSpecial);
  if (
    pwUpperCase == false &&
    pwLowerCase == false &&
    pwNumbers == false &&
    pwSpecial == false
  ) {
    alert(
      "Please select at least one type of character. Please note as well that the more types you select, the safer your password will be"
    );
    generatePassword();
    return;
  }
  /*Generation of the password: loop through the process of selecting a random character from the relevant arrays. I will go here for 
  simplicity. Priority is for me that at least one of the wanted character type is represented at least 2 times, when wanted*/
  var createdPassword = "";
  for (var i = 0; createdPassword.length < pwLength; i++) {
    //add upper Case if wanted
    if (pwUpperCase) {
      createdPassword += chooseUpperCase();
    }
    //add power case if wanted
    if (pwLowerCase) {
      createdPassword += chooseLowerCase();
    }
    //add numbers if selected
    if (pwNumbers) {
      createdPassword += chooseNumber();
    }
    //add special characters if wanted
    if (pwSpecial) {
      createdPassword += chooseSpecialCharacter();
    }
  }
  console.log(createdPassword);

  //Shuffle created password to increase security, otherwise order of the characters would be easy to expect
  shuffledPassword = createdPassword
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  //return your password
  return shuffledPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

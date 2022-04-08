var generatePasswordLower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var generatePasswordCapital = [
"Q",
"W",
"E",
"R",
"T",
"Y",
"U",
"I",
"O",
"P",
"A",
"S",
"D",
"F",
"G",
"H",
"J",
"K",
"L",
"Z",
"X",
"C",
"V",
"B",
"N",
"M",
];

var generatePasswordNumbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

var generatePasswordSpecial = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  '{',
  ']',
  '}',
  '|',
  ':',
  ';',
  '"',
  ',',
  '<',
  '.',
  '>',
  '/',
  '?',
  '`',
  '~',
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  var passwordLength = prompt("How many characters would you like your password to be?\nEnter a value between (8-128)");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");
  var userSelection = [];
  var password = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a value between 8 and 128.");
    return "Try again! Please enter a value between 8 and 128.";
  }

  if (userSelection.length < 1) {
    alert("You must select atleast one character type and a value between 8 and 128.")
    return "Try again! Please enter atleast one character type and a value between 8 and 128."
  }

  if (lowercase) {
    userSelection = userSelection.concat(generatePasswordLower);
  }

  if (uppercase) {
    userSelection = userSelection.concat(generatePasswordCapital);
  }

  if (numbers) {
    userSelection = userSelection.concat(generatePasswordNumbers);
  }

  if (special) {
    userSelection = userSelection.concat(generatePasswordSpecial);
  }

  for (var i = 0; i < passwordLength; i++) {
    password = password + userSelection[Math.floor(Math.random() * userSelection.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'q',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
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
]

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
    '{',
    '}',
    '[',
    ']',
    '|',
    ':',
    ';',
    '"',
    '<',
    '>',
    ',',
    '.',
    '/',
    '?',
    '~',
    '`',
]

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




// Write password to the #password input
function writePassword() {
  var password = prompt("How long would you like your password to be? (8-128 characters)");

    if (password >= 8 && password <= 128) {
    confirm("Would you like to include numbers?");
  }  

  if (password >= 8 && password <= 128) {
    confirm("Would you like to include capitalized letters?")
  }

  if (password >= 8 && password <= 128) {
    confirm("Would you like to include special characters?");
  } 

  else (password.length < 8 || password.length > 128); {
    alert("Password must be between 8 and 128 characters");
  }
  return;

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");




    
    

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  confirm("Hello! I am an alert box!");
}
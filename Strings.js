//Write a JavaScript program to check two numbers and return true if one the number is 100 or if the sum of the two numbers is 100
const TwoNumbers = (a, b) => {
  if (isNaN(a) && isNaN(b)) {
    console.log("It is not a number");
  } else if (a === 100 || b === 100) {
    console.log("true ");
  } else if (a + b === 100) {
    console.log("true");
  }
  console.log("error");
};

TwoNumbers(5, 5);

//write a javaScript program to get the extension of a filename
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("hola.js"));

//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

const moveCharsForwar = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForwar("asdad"));

// Write a JavaScript program to get the current date

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

console.log(dateTime);

// Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begin with "New!" already then return the original string

const AddNew = (str) => {
  if (str.indexOf("New!") === -1) {
    return str.replace(/^/, "New! ");
  }
  return str;
};
console.log(AddNew("New! Hola como estas"));

// other way to resolve it...

const AddSomething = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

console.log(AddSomething("hola"));

// Write a JavaScript program to create a new String from a given string taking the first 3 characters and the last 3 character of a string and adding them together. The string length must be 6 or more, if not, the original string ir returned

const characters = (str) => {
  if (str.length > 6) {
    const firstCharacter = str.slice(0, 3);
    const LastCharacter = str.slice(-3);
    const result = firstCharacter.concat(LastCharacter);
    return result;
  }
  return 'error your string must be more than 6'
};

console.log(characters("ajkl"));

// best way to resolve (more clean)

const makeNewString = (str) =>
  str.length < 6 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString("asdfhjkl"));

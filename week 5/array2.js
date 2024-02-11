// Exerice 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here

function myAlphabetLength() {
  const userInput = prompt(
    "Enter the elements of the array separeted by commas"
  );
  const arr = userInput.split(",");

  console.log("The length of my Alphabet: ${arr.length}");
  if (arr.length < 5) {
    console.log("Array length is less than 5.");
  } else {
    console.log("Array length is greater or equal to 5.");
  }
}
console.log(myAlphabetLength());

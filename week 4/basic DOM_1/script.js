/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const changeText = document.getElementById("content");

function newText() {
  return (changeText.textContent = "Hello, World!");
}

console.log(
  document.getElementsByTagName("button").addEventListener("click", newText)
);

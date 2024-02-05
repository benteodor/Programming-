/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const textChanger = () => {
  const textPlaceHolder = document.getElementById("content");
  textPlaceHolder.textContent = "Hello World";
};

console.log(textPlaceHolder.textContent);

/* const textChanger = () => 
(document.getElementByID("content").
textContent = "Hello World!");

/* function textChanger() {
  const textPlaceholder = document.getElementById("content");
  textPlaceholder.textContent = "Hello, World!"
}; */

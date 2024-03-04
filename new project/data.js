const header = document.querySelector("header");

const backToTopButton = document.querySelector("#backToTop");

/* const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

backToTopButton.addEventListener("click", getToTop);
*/

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  header.style.backgroundColor = "orange";
  header.classList.add("bg");
  // header.classList.remove("bg");
});

/* document.querySelector("#backToTop").addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // Chrome, FF and Others
});
*/

const header = document.querySelector("header");
const backToTop = document.querySelector("#backToTop");
const backToTopButton = document.querySelector("#backToTop");
const menuItems = document.querySelectorAll("nav ul li a");
const modalButton = document.querySelector(".modalButton");
const overlay = document.querySelector(".overlay");
const clossButton = document.querySelector(".closeButton");

const toggleModal = () => {
  overlay.classList.toggle("visible");
};

mobButton.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));

const toggleMenu = () => {
  navigator.classList.toggle("responsive");
};

modalButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

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

windows.onscroll = function () {
  scrollFrunction();
};

/*function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}*/

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "block";
    header.classList.add("bg");
  } else {
    backToTop.style.display = "none";
    header.classList.remove("bg");
  }
};

/* document.querySelector("#backToTop").addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // Chrome, FF and Others
});
*/

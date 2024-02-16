/* const form = document.querySelector(".form-container");
const typeSelect = document.querySelector("#type");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const button = document.querySelector("button");*/

/* let total;
let toppings = [];
let extras = [];

for (const item of checkboxes) {
  const itemName = item.dataset.name;
  const category = item.dataset.category;

  // const priceCalc = () => {

  const pancakePriceCalc = () => {
    const totalPriceElement = document.getElementById("totalPrice");
    const priceBanner = document.querySelector(".price-banner");

    // console.log(typeSelect.value);
    // console.log(checkboxes);

    let totalAmount = parseInt(typeSelect.value);
    // console.log(totalAmount);*/

/*for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
  }
  */

/* priceBanner.textContent = `$${totalAmount}`;
    priceBanner.animate(
      [
        { transform: "scale(1) " },
        { transform: "sclae(1.05" },
        { transform: "scale(1" },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    );
  };

  const idItem = (itemName, category) => {
    if (category === "toppings") {
      toppings.push(itemName);
    } else {
      extras.push(itemName);
    }
  };

  const removeItem = () => {};

  console.log("toppings array", toppings);
  console.log("extras array", extras);

  const checkToppings = () => {
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        totalAmount += parseInt(checkbox.value);
        addItem(itemName, category);
      } else {
      }
      removeItem(itemName, category);
    }
  };
  const displayOrder = () => {
    const customerName = document.querySelector("#customerName").value;
    const orderType = document.querySelector("#order_type");
    const orderToppings = document.querySelector("#order_toppings");
    const orderExtras = document.querySelector("#order_extras");
    const orderName = document.querySelector("#order_name");
    // console.log(customerName);
  };

  form.addEventListener("change", pancakePriceCalcpriceCalc);
  button.addEventListener("click", displayOrder);
} */

let toppingExtraArr = [];
let toppings = [];
let extras = [];
let totalPrice = 5;
const pancakeType = document.querySelector("#type");
const toppingExtra = document.querySelectorAll('input[type = "checkbox"]');
const formContainer = document.querySelector(".form-container");
const confirmContainer = document.querySelector(".confirm-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const toppingImage = document.querySelectorAll(".toppingImage");

const changeTypes = () => {
  const defaultImage = document.querySelector(".imageDefault");
  defaultImage.src = pancakeType.selectedOptions[0].dataset.image;
  totalPrice = parseInt(pancakeType.value);
};

const changeToppingsExtras = () => {
  toppings = [];
  extras = [];
  for (let i = 0; i < toppingExtra.length; i++) {
    if (toppingExtra[i].checked) {
      toppingImage[i].style.visibility = "visible";
      totalPrice += parseInt(toppingExtra[i].value);
      toppingExtra[i].dataset.category == "toppings"
        ? toppings.push(toppingExtra[i].dataset.name)
        : extras.push(toppingExtra[i].dataset.name);
    } else {
      toppingImage[i].style.visibility = "hidden";
    }
  }
};

function changeOrder() {
  const priceDisplay = document.querySelectorAll(".totalPrice");
  changeTypes();
  changeToppingsExtras();
  priceDisplay.forEach((price) => (price.textContent = totalPrice.toFixed(2)));
}

//move to the confirm tab on button click, display the selections
function confirmCake() {
  const pancakeTypeDisplay = document.querySelector("#pancakeTypeConfirm");
  const toppingsDisplay = document.querySelector("#toppingsDisplay");
  const extrasDisplay = document.querySelector("#extrasDisplay");
  formContainer.style.display = "none";
  confirmContainer.style.display = "flex";
  pancakeTypeDisplay.textContent = pancakeType.selectedOptions[0].dataset.name;
  toppings.length == 0
    ? (toppingsDisplay.textContent = "None")
    : (toppingsDisplay.textContent = toppings.join(", "));
  extras.length == 0
    ? (extrasDisplay.textContent = "None")
    : (extrasDisplay.textContent = extras.join(", "));
}

//to move back to cake customize
function backToOrder() {
  confirmContainer.style.display = "none";
  formContainer.style.display = "flex";
  thankYouContainer.style.display = "none";
}

//save the user info and display a thanks card
function confirmOrder() {
  let customerName = document.querySelector("#customerName").value;
  let customerAddress = document.querySelector("#customerAddress").value;
  let customerNote = document.querySelector("#customerNote").value;
  confirmContainer.style.display = "none";
  thankYouContainer.style.display = "flex";
}

//trigger to buttons, checkboxes, inputs
formContainer.addEventListener("change", changeOrder);
document.querySelector("#confirmButton").addEventListener("click", confirmCake);
document.querySelector("#orderButton").addEventListener("click", confirmOrder);

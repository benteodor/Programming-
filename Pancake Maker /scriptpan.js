const form = document.querySelector(".form-container");

const button = document.querySelector("button");

// const priceCalc = () => {
// console.log('frwbfv');
const pancakePriceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const totalPriceElement = document.getElementById("totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  // console.log(typeSelect.value);
  // console.log(checkboxes);

  let totalAmount = parseInt(typeSelect.value);
  // console.log(totalAmount);

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
  }
  priceBanner.textContent = `$${totalAmount}`;
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

const displayOrder = () => {
  const customerName = document.querySelector("#customerName").value;
  console.log(customerName);
};

form.addEventListener("change", pancakePriceCalcpriceCalc);
button.addEventListener("click", displayOrder);

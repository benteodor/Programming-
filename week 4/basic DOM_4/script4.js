const form = document.querySelector(".form-container");

const priceCalc = () => {
  // console.log('frwbfv');

  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const priceBanner = document.getElementById("totalPrice");

  // console.log(typeSelect.value);
  // console.log(checkboxes);

  let totalAmount = parseInt(typeSelect.value);
  // console.log(totalAmount);

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      totalAmount += parseInt(checkbox.value);
    }
  }
  priceBanner.textContent = "€{totalAmount}";
};

form.addEventListener("change", priceCalc);

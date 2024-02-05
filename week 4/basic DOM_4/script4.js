const form = document.querySelector(".form-container");

const priceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll("input[type="checkbox"]");

  let totalAmount = parent(typeSelect.value);

  for (const checkbox of checkboxes) {
    if (checkbox.checkbox)
    totalAmount += parseInt(checkbox.value);
  }
  }
};

form.addEventListener("change", priceCalc);


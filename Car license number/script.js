let row = 1;

let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
  let license = document.getElementById("License").value;
  let brand = document.getElementById("Brand").value;
  let model = document.getElementById("Model").value;
  let owner = document.getElementById("Owner").value;
  let color = document.getElementById("Color").value;

  if (!license || !brand || !model || !owner || !color) {
    alert("Please fill all the boxes");
    return;
  }

  let display = document.getElementById("display");

  let newRow = display.insertRow(row);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.innerHTML = license;
  cell2.innerHTML = brand;
  cell3.innerHTML = model;
  cell4.innerHTML = owner;
  cell5.innerHTML = color;

  row++;
}

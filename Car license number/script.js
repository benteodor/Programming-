"use strict";

/*const list1 = [];
const list2 = [];
const list3 = [];
const list4 = [];
const list5 = [];
let n = 1;
let x = 0;

function AddRow() {
  let AddRow = document.getElementById("show");
  let NewRow = AddRow.insertRow(n);

  list1[x] = document.getElementById("License").Value;
  list2[x] = document.getElementById("Car Brand").Value;
  list3[x] = document.getElementById("Car Model").Value;
  list4[x] = document.getElementById("Car Owner").Value;
  list5[x] = document.getElementById("Car Color").Value;

  let cel1 = NewRow.insertCell(1);
  let cel2 = NewRow.insertCell(2);
  let cel3 = NewRow.insertCell(3);
  let cel4 = NewRow.insertCell(4);
  let cel5 = NewRow.insertCell(5);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];

  n++;
  x++;
}
*/

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

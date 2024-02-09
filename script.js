/* let teamMembers = ["John", "Emily", "Mike", "Sarah"];

teamMembers.forEach((name) => console.log(name));
*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
teamMembers.shift();
console.log(teamMembers);*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
teamMembers.pop();
console.log(teamMembers);
*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
teamMembers.unshift("Alex");
console.log(teamMembers);*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
teamMembers.push("Linda");
console.log(teamMembers);*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
teamMembers.splice(0, 2);
console.log(teamMembers);
*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];

console.log(teamMembers.indexOf("Mike"));*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
console.log(teamMembers.lastIndexOf("Jake"));*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
teamMembers.splice(2, 1);
teamMembers.splice(2, 0, "Carol", "Bruce");
console.log(teamMembers);*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
let teamMembers2 = ["Bob"];
teamMembers3 = teamMembers.concat(teamMembers2);
console.log(teamMembers3);
*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
let clonedArray = teamMembers.slice();
console.log(clonedArray);
*/

/*let teamMembers = ["John", "Emily", "Mike", "Sarah"];
let newMembers = ["Tina", "Dean"];
newMembers1 = teamMembers.concat(newMembers);
console.log(newMembers1);*/

let teamMembers = ["John", "Emily", "Mike", "Sarah"];

function elementCount(teamMembers, elementCount) {
  return elementCount((currentElement) => currentElement == elementCount)
    .length;
}
console.log(elementCount(teamMembers));

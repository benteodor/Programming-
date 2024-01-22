// Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.

/*function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("sam"));*/

/*function capitalize(word) {
  return toLowerCase() + word.slice(1);
}
console.log(capitalize("ALEX"));*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
  return word[3].toLowerCase() + word.slice(3);
}
console.log(capitalize("chARLie"));

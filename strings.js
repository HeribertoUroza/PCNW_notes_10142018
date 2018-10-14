const hiMyNameIs = "Slim Shady";
console.log(hiMyNameIs);
console.log(hiMyNameIs.charAt(0))

const getFirstChar = str => str.charAt(0);
const getLastChar = str => str.charAt(str.length-1);

console.log(getFirstChar(hiMyNameIs))
console.log(getLastChar(hiMyNameIs))

console.log(hiMyNameIs.length);

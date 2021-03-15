//convert gallons to liters
function convertGal(number1){
  return number1 * 3.785;
}

//convert liters to gallons
function convertLit(number1){
  return number1 / 3.785;
}

const number1 = parseInt(prompt("Enter a number:"));
const result = convertGal(number1);
alert('The total is: ' + result + '.');
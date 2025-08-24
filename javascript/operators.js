function sum(firstNumber,secondNumber) {
  console.log(firstNumber + secondNumber);
  return firstNumber + secondNumber;
}
function difference(firstNumber,secondNumber) {
  console.log(firstNumber - secondNumber);
  return firstNumber - secondNumber;
}
function product(firstNumber,secondNumber) {
  console.log(firstNumber * secondNumber);
  return firstNumber * secondNumber;
}
function quotient(firstNumber,secondNumber) {
  console.log(firstNumber / secondNumber);
  return firstNumber / secondNumber;
}

function calculate (firstNumber, operator, secondNumber){
switch (operator) {
  case "+" :
    sum (firstNumber,secondNumber);
    break;
  case "-" :
    difference (firstNumber,secondNumber);
    break;
  case "*" :
    product (firstNumber,secondNumber);
    break;
  case "/" :
    quotient (firstNumber,secondNumber);
    break;
}
}

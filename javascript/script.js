function add(num1, num2) {
	return num1 + num2 ;	
}
function subtract(num1, num2) {
	return num1 - num2 ;	
}
function multiply(num1, num2) {
	return num1 * num2 ;	
}
function divide(num1, num2) {
	return num1 / num2 ;	
}

function operate(num1, operation, num2) {
	switch (operation) {
		case "+" : {
			return add(num1,num2);
			break;
		}
		case "-" : {
			return subtract(num1,num2);
			break;
		}
		case "*" : {
			return multiply(num1,num2);
			break;
		}
		case "/" : {
			return divide(num1,num2);
			break;
		}
	}
}
// console.log(add(1,1));
console.log(operate(1, "+", 1));
console.log(operate(1, "-", 1));
console.log(operate(1, "*", 1));
console.log(operate(1, "/", 1));

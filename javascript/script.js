const btnNum = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".opp");
const displayText = document.querySelector("span");
const equal = document.querySelector(".equal");
const clear = document.querySelector("#AC");
let defaultNum = 0;
let firstNumber;
let secondNumber;
let operation = "";

function toNumber(a,b) {
	firstNumber = parseFloat(a);
	secondNumber = parseFloat(b);
}

btnNum.forEach((btn) => {
	const number = btn.innerText;
	btn.addEventListener('click', () => {
		displayText.append(number);
	});
})

operators.forEach ( opp => {
	opp.addEventListener('click' , () => {
		firstNumber = displayText.innerText;
		displayText.innerText="";
		operation = opp.innerText;
	});
})

clear.addEventListener('click', () => {
	displayText.innerText="";
	firstNumber = defaultNum;
	secondNumber = defaultNum;
	operation = "";
})

equal.addEventListener('click', () => {
		secondNumber = displayText.innerText;
 toNumber(firstNumber,secondNumber);
const answer = operate(firstNumber,operation,secondNumber);
	displayText.innerText="";
		displayText.append(answer);
	firstNumber = answer;
});

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
		case "x" : {
			return multiply(num1,num2);
			break;
		}
		case "/" : {
			return divide(num1,num2);
			break;
		}
	}
}

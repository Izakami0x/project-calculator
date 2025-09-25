const text = document.querySelector("span");
const display = document.querySelector(".display");
const btnNum = document.querySelectorAll(".number");
const btnOperation = document.querySelectorAll(".opp");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const clear = document.querySelector("#AC");
let firstNum;
let secondNum;
let opp;
let shouldResetFlag = false;

function isElementEmpty() {
	return display.innerText === "";
}

function toNumber (x) {
	return parseFloat(x);
};	

btnNum.forEach(btn => {
	btn.addEventListener('click', () => {
		if (shouldResetFlag) {
			display.innerText = "";
			shouldResetFlag = false;
		}
		const number = btn.innerText;
		const displayText = document.createElement("span");
		displayText.innerText = number;
		display.append(displayText);
	});
});

btnOperation.forEach(btn => {
	btn.addEventListener('click', () => {
		const displayText = document.createElement("span");
		let number = display.innerText;
		secondNum = toNumber(number);
		firstNum = operate(firstNum,opp,secondNum)
		opp = btn.innerText;
		if (isNaN(firstNum)) {
			firstNum = secondNum;
			display.innerText = "";
			console.log(`NaN ${secondNum}`);
		} else {
			console.log(firstNum);
			console.log(`Second Number: ${secondNum}`);
			console.log(opp);
			shouldResetFlag = true;
			display.innerText = "";
			displayText.innerText = firstNum;
			display.append(displayText);
		}
	});
});

equal.addEventListener('click', () => {
		const displayText = document.createElement("span");
		let number = display.innerText;
		secondNum= toNumber(number);
			shouldResetFlag = true;
			display.innerText = "";
		firstNum = operate(firstNum,opp,secondNum)
	opp = undefined;
			displayText.innerText = firstNum;
			display.append(displayText);
})

clear.addEventListener('click', () => {
	firstNum = undefined;
	secondNum = undefined;
	shouldResetFlag = false;
	opp = undefined;
	display.innerText = "";
})

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

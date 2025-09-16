const btnNum = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".opp");
const displayText = document.querySelector("span");
const equal = document.querySelectorAll(".equal");
let defaultNum = 0;
let num1;
let num2;

btnNum.forEach((btn) => {
	const number = btn.innerText;
	btn.addEventListener('click', () => {
		displayText.append(number);
	});
})

operators.forEach ( opp => {
	opp.addEventListener('click' , () => {
		num1 = displayText.innerText;
		displayText.innerText="";
		console.log(num1);
	});
})

equal.addEventListener('click', () => {
		num2 = displayText.innerText;

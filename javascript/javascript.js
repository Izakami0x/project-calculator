const btnNum = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".opp");
const displayText = document.querySelector("span");

btnNum.forEach((btn) => {
	const number = btn.innerText;
	btn.addEventListener('click', () => {
		displayText.append(number);
	});
})

operators.forEach ( opp => {
	opp.addEventListener('click' , () => {
		displayText.innerText="";
	});
})

// Select all inputs
// Select Banknotes
const amtHuns = document.querySelector('#hundreds');
const amtFifts = document.querySelector('#fifties');
const amtTwets = document.querySelector('#twenties')
const amtTens = document.querySelector('#tens')
const amtFivs = document.querySelector('#fives')
const amtOnes = document.querySelector('#ones')
// Select coins
const amtQuarts = document.querySelector('#quarters');
const amtDimes = document.querySelector('#dimes')
const amtNickles = document.querySelector('#nickels')
const amtPens = document.querySelector('#pennies')
const moneyForm = document.querySelector('#money-form')

// Result span to display individual results
const resultSpans = document.querySelectorAll('.results-styles')

// Select div to display final results
const totalResults = document.querySelector('#total-results')


// Place all input values into an array
const finalCalculation = function(amtHuns,amtFifts,amtTwets,amtTens,amtFivs,amtOnes,amtQuarts,amtDimes,amtNickles,amtPens){
 let totalCalc = [(amtHuns * 100),
 (amtFifts * 50),
 (amtTwets * 20),
 (amtTens * 10),
 (amtFivs * 5),
 (amtOnes * 1),
 (amtQuarts * 0.25),
 (amtDimes * 0.10),
 (amtNickles * 0.05),
 (amtPens * 0.01)
 ]
 console.log(totalCalc)
 return totalCalc
}


// Establish function to display final sum in div
const displayTotalResults = function(displayResult){
	totalResults.innerHTML = '<h1>Total: '+ '$ ' + displayResult + '</h1>'
}

moneyForm.addEventListener('submit',function(e){
	e.preventDefault()

	// Calculating the result of each input value.
	let indiCount = finalCalculation(amtHuns.value,
	amtFifts.value,
	amtTwets.value,
	amtTens.value,
	amtFivs.value,
	amtOnes.value,
	amtQuarts.value,
	amtDimes.value,
	amtNickles.value,
	amtPens.value)

	// Adding the sum of all input values
	 let sum = indiCount.reduce(function(a,b){
			return a+b
		},0)

	// Display Final result
	displayTotalResults(sum)

	// Displaying individual calculations
	for(i=0; i<resultSpans.length; i++){
		// resultSpans[i].textContent = inputs[i].value 
		resultSpans[i].textContent = ' $'+ indiCount[i].toFixed(2)
	}
		
})


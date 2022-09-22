console.log("Success!")

window.onload = (function(){
	let mortgage_calc = document.getElementById("mortgage_calc")
	console.log(mortgage_calc)

	mortgage_calc.addEventListener('click', function(event){
		console.log("Hit the click")
		console.log(event);
		event.preventDefault();
		event.stopPropagation();
	})

	let promise = new Promise(function(resolve, reject){
		console.log("This is the state before it's resolved:", this.state);
		let resolve_func = function(){
			resolve("Done");
			console.log("This is the state after it's resolved:", this.state);
		}
		let reject_func = function(){
			reject(new Error("This was rejected."));
		}
		// setTimeout(resolve_func, 1000);
		// setTimeout(reject_func, 1000);

		let loan_amount_field = document.getElementById("principal")
		console.log("Hey, the loan amount field is:", loan_amount_field);

		if(loan_amount_field.value == ""){
			reject_func();		
		} else {
			resolve_func();
		}

		// if blank then reject
		// else resolve
	})
})

/* Javascript code for luckySevens file goes here */
// using layout for clickToAddItems; eliminating num2 and changing
// appropriate variables, classes, id's
//var die1
//var die2
//var sumRoll = die1 + die2
//var startingBet = document.forms["startingBet"]["num"].value







//function rolldice() {
//    var x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
//    var y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
//    var dicetotal = x + y;

//}
 
//for (var i ; i > 0; i++) {
//  console.log(rollDice());
//}
	
	
//	for (var startingBet > 0) {
//		if ( sumRoll= 7) {
//			startingBet= startingBet + 4;
//		} else {
//			startingBet--;
//		}
//	}
		
	function clearErrors() {   
    for (var loopCounter = 0; 
        loopCounter < document.forms["startingBet"].elements.length; 
        loopCounter++) {
        if (document.forms["startingBet"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["startingBet"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["startingBet"]["num"].value = "$0.00";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["startingBet"]["num"].focus();
}

function validateItems() {
    clearErrors();
    var money = document.forms["startingBet"]["num"].value;
    if (money == "" || isNaN(money)) {
        alert("num must be filled in with a positive integer.");
        document.forms["startingBet"]["num"]
           .parentElement.className = "form-group has-error";
        document.forms["startingBet"]["num"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1) +
                                                     Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}	



/* function for rolling dice*/
/*function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
for (var i = 0; i < 2; i++) {
  console.log(rollDice());
}

/*get result1 and result 2 from diceRoll results and sum together*/

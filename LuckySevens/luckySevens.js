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
    if (money <= 0 || isNaN(money)) {
        alert("input must be filled in with a positive integer.");
        document.forms["startingBet"]["num"]
           .parentElement.className = "form-group has-error";
        document.forms["startingBet"]["num"].focus();
        return false;
    }
	
   var die1 = function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
	}
	
	var die2 = function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
	}
	
	var rolls = new Array();
	
	while(money > 0){
		if (die1 + die2 == 7){
			money = money +4;
			rolls[rolls.length] = rolls++
		} else if (die1 + die2 !== 7){
			money = money - 1;
			rolls[rolls.length] = rolls++;
		}
	}
			
		
	function max(arr){
 var max = arr[0];
 for(var i =0; i<rolls.length; i++){
   if(max[i] > max){
     max = max[i];   
   }
 }
	}
}
   
  

	
	
	
	
	
   
   
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play";
   document.getElementById("startBet").innerText = startingBet;
   document.getElementById("totalRolls").innerText = rolls;
   document.getElementById("moneyPeak").innerText = max;
 document.getElementById("rollPeak").innerText = max[i];
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

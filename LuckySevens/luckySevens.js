/* Javascript code for luckySevens file goes here */


var startingBet = 

/* function for rolling dice*/
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
for (var i = 0; i < 2; i++) {
  console.log(rollDice());
}

/*get result1 and result 2 from diceRoll results and sum together*/

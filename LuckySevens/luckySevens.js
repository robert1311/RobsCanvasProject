/* Javascript code for luckySevens file goes here */

/* function for rolling dice*/
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
for (var i = 0; i < 2; i++) {
  console.log(rollDice());
}
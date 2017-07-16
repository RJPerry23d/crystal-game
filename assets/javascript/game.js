//alert("javascript is linked to html");
//The player will have to guess the answer, the player will guess with numbers instead of letters.
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;

//The player will be shown a random number at the start of the game. Random number shown at the start of the game should be between 19 - 120.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(19);
  max = Math.floor(120);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

}
$('#random-number-display').text(getRandomIntInclusive);
//console.log(getRandomIntInclusive());
//There will be four crystals displayed as buttons on the page.
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//Each crystal should have a random hidden value between 1 - 12.
var crystalOne = function() {
  return Math.floor(Math.random() * 12) +1;

}
console.log(crystalOne());

var crystalTwo = function() {
  return Math.floor(Math.random() * 12) +1;

}
console.log(crystalTwo());

var crystalThree = function() {
  return Math.floor(Math.random() * 12) +1;

}
console.log(crystalThree());

var crystalFour = function() {
  return Math.floor(Math.random() * 12) +1;

}
console.log(crystalFour());

//Your game will hide this amount until the player clicks a crystal.



//When they do click one, update the player's score counter.



//The player wins if their total score matches the random number from the beginning of the game.



//The player loses if their score goes above the random number.



//The game restarts whenever the player wins or loses.



//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, 


//the user's score (and score counter) will reset to zero.


//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.





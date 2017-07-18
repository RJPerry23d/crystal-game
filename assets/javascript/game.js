//alert("javascript is linked to html");
//The player will have to guess the answer, the player will guess with numbers instead of letters.


var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var counter = 0;
var wins = 0;
var losses = 0;
var randomNumber = 0;



//The player will be shown a random number at the start of the game. Random number shown at the start of the game should be between 19 - 120.

var audioClick = new Audio("assets/sounds/Clicking-sound-effect.mp3");
var audioWin = new Audio("assets/sounds/Ta-da-sound.mp3");
var audioLose = new Audio("assets/sounds/You-lose-sound-effect.mp3");

function reset() {
	crystalOne = Math.floor(Math.random() * 12 ) + 1;
	crystalTwo = Math.floor(Math.random() * 12 ) + 1;
	crystalThree = Math.floor(Math.random() * 12 ) + 1;
	crystalFour = Math.floor(Math.random() * 12 ) + 1;
	randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$('#random-number-display').text(randomNumber); 
	counter = 0; 
	$('#game-score').text(counter);
      };
reset();

function guts() {
	$('#game-score').html(counter);

	if (counter === randomNumber) {
		audioWin.play();
		alert("You win!");
		wins ++;
		$('#wins').html(wins);
		reset();                 
    }
    
    else if (counter > randomNumber) {
    	audioLose.play();
    	alert("You lose!!");
      	losses ++;
      	$('#losses').html(losses);
      	reset();                   

    }

};
//There will be four crystals displayed as buttons on the page.
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//Each crystal should have a random hidden value between 1 - 12.

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-one').on('click',function(){
	audioClick.play();
	counter += crystalOne;
	guts();          
});

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-two').on('click',function(){
	audioClick.play();
	counter += crystalTwo;
	guts();          
});


//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-three').on('click',function(){
	audioClick.play();
	counter += crystalThree;
	guts();          
});



//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-four').on('click',function(){
	audioClick.play();
	counter += crystalFour;
	guts();          
});
 












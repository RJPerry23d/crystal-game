//alert("javascript is linked to html");
//The player will have to guess the answer, the player will guess with numbers instead of letters.
var crystalOne = Math.floor(Math.random() * 12 ) + 1;
var crystalTwo = Math.floor(Math.random() * 12 ) + 1;
var crystalThree = Math.floor(Math.random() * 12 ) + 1;
var crystalFour = Math.floor(Math.random() * 12 ) + 1;
//var playerScore = 0;
var counter = 0;
var wins = 0;
var losses = 0;



//The player will be shown a random number at the start of the game. Random number shown at the start of the game should be between 19 - 120.
var randomNumber = Math.floor(Math.random() * 120) + 19; 
var newRandomNumber = Math.floor(Math.random() * 120) + 19;
$('#random-number-display').text(randomNumber);

//There will be four crystals displayed as buttons on the page.
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//Each crystal should have a random hidden value between 1 - 12.

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-one').on('click',function(){
	counter += crystalOne;
	$('#game-score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#wins').html(wins);

      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);
            
    }
    
    else if (counter > randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#losses').html(losses);
      //$('#random-number-display').text(randomNumber);
      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);     

    }
    
    
});
//console.log(crystalOne);

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-two').on('click',function(){
	counter += crystalTwo;
	$('#game-score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#wins').html(wins);

      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);
            
    }
    
    else if (counter > randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#losses').html(losses);
      //$('#random-number-display').text(randomNumber);
      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);     

    }
    
});
//console.log(crystalTwo);

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-three').on('click',function(){
	counter += crystalThree;
	$('#game-score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#wins').html(wins);

      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);
            
    }
    
    else if (counter > randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#losses').html(losses);
      //$('#random-number-display').text(randomNumber);
      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);     

    }
    

});

//console.log(crystalThree);

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

$('#crystal-four').on('click',function(){
	counter += crystalFour;
	$('#game-score').html(counter);

	if (counter === randomNumber) {
      alert("You win!");
      wins ++;
      $('#wins').html(wins);

      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);
            
    }
    
    else if (counter > randomNumber) {
      alert("You lose!!");
      losses ++;
      $('#losses').html(losses);
      //$('#random-number-display').text(randomNumber);
      counter = 0;
      randomNumber = newRandomNumber;
      $('#game-score').html(counter);
      //var randomNumber = Math.floor(Math.random() * 102) + 19;
      $('#random-number-display').html(randomNumber);     

    }

});
 
//console.log(crystalFour);

// $('#crystal-four').on('click',function(){
// 	counter += crystalFour;
// 	$('#game-score').html(counter);

// 	if (counter === randomNumber) {
//       alert("You win!");
//       wins ++;
//       $('#wins').html(wins);
            
//     }
//     $('#random-number-display').text(randomNumber);

//     else if (counter >= randomNumber) {
//       alert("You lose!!");
//       losses ++;
//       $('#losses').html(losses);
//       //$('#random-number-display').text(randomNumber);
//       counter = "";      

//     }
    
// });





//The player loses if their score goes above the random number.



//The game restarts whenever the player wins or loses.



//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, 


//the user's score (and score counter) will reset to zero.


//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.





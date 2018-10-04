// Theme of the game is: Learning to Code

// Setting up some base variables to be used later
var wins = 0;
var alreadyPlayed = [];
var remainingTrys = 5;

document.onkeyup = function (event) {

	// Capture the key that was pressed, store in userInput variable
	var userInput = event.key;

	// List of possible words user has to guess from
	var possibleWords = ["Function", "Array", "Method", "Truthy", "event", "options", "include"]

	// Pulling a random word out of the possibleWords array
	var wordBeingGuessed = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	
	// Displaying wordBeingGuessed into approrate HTML container
	var wordBeingGuessedContainer = document.getElementById('wordBeingGuessedContainer');
	
	// this is not currenlty working, not sure why
	wordBeingGuessedContainer.appendChild(wordBeingGuessed);

	// outputting variables in console to confirm they are set to what 
	// I expect them to be
	console.log(wordBeingGuessed);
	console.log(userInput);
	console.log(wins);
	console.log(alreadyPlayed);
};

// TODO: 

// - display wordBeingGuessed into HTML element but 
// masked as '_ _ _ _ _' (thinking a for loop, going through 
// the characters and changing them to "_" might do the trick)
// - Create function that compares userInput each letter of wordBeingGuessed
// IF userInput === wordBeingGuessed[i] update wordBeingGuessed[i] back from _ to userInput
// else remainingTrys-- &
// // add the userInput to the alreadyPlayed array
// alreadyPlayed.push(userInput);

// - create function that compares the wordBeingGuessed with remainingTrys
// IF wordsBeingGuessed is completed (ie all "_ _ _" have been changed to "characters")
// User wins the fucking game!!!
// ELSE IF remainingTrys === 0 {
// 	Sorry bub, you fucking lose
// }

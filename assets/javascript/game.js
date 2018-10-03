// Theme of the game is: Learning to Code


//  	- onkeyup- trigger a decrease in the guesses

document.onkeyup = function (event) {
	// Capture the key that was pressed, store in userInput variable
	var userInput = event.key;

	// List of possible words user has to guess from
	var possibleWords = ["Function", "Array", "Method", "Truthy", "event", "options", "include"]

	// Creating a wordBeingGuessed that is set to a random word out of the possible words index
	var wordBeingGuessed = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	

	
	console.log(wordBeingGuessed);
	console.log(userInput);
};

// VARIABLES 
var hiddenWord = [
"afi", 
"bouncing souls", 
"hot water music", 
"nofx",
"millencolin"]

var computerWord = ""

// for (i = 0 ; i <  ; )
console.log(hiddenWord[0].length)

// FUNCTIONS
//load word from array into hidden-band id, match letter count, 
function guessSpace() {
	
	computerWord = hiddenWord[Math.floor(Math.random() * hiddenWord.length)];
	document.getElementById("hidden-band").textContent = computerWord
};

guessSpace();	



// STARTUP CODE / Main Logic  / 



/* This docuement receives input. 
 Open Console to see */

document.onkeyup = function(event) {
     var userInput = event.key;

     console.log(computerWord)
     console.log("User guess " + userInput);
     console.log("-----------");
 }
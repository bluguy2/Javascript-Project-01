function generateRandomNumber() {
   return Math.floor(Math.random() * 100) + 1;

}

console.log(generateRandomNumber())

function getPlayerGuess() {
	let number = prompt("Please enter a number");

    do {
       if (1 == number <= 100) {
	      return number;
	   } else {
	      number = prompt("Please enter a number (not a word)");
	}
   } while (number != parseInt(number));
}

console.log(getPlayerGuess())
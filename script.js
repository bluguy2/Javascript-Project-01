let attempts = 0;
const maxAttempts = 10;
let score = 100;

function generateRandomNumber() {
   const rannum = Math.floor(Math.random() * 100) + 1;
   console.log(rannum);
   return rannum;
}


function getPlayerGuess() { 
	const message = "Guess the number (1-100)";
    let userInput = prompt(message);

	
	if (userInput === null) {
    return null;  // pressed cancel
  }

  const number = Number(userInput);

  if (isNaN(number)) {
    alert("The input is invalid, insert a valid number");
    return getPlayerGuess();
  }
  else if (number > 100) {
    alert("Number must be between 1 and 100");
    return getPlayerGuess();
  }
  else if (number < 1) {
    alert("Number must be between 1 and 100");
    return getPlayerGuess();
  }
  
    return number; 
};
//console.log(getPlayerGuess())

function checkGuess(userGuess, correctNumber, attempts, maxAttempts, score) {
  if (userGuess === correctNumber) {
    alert("Congratulations, you won");
	return true;
  } else if (attempts < maxAttempts) {
	if (userGuess < correctNumber) {
     alert("Try a higher number");
    } else {
     alert("Try a lower number");
	}
	
  } return false;
  
};

function game() {
  const correctNumber = generateRandomNumber();
  attempts = 0;

  while (attempts < maxAttempts) {
    const userGuess = getPlayerGuess();
	

    if (userGuess === null) {
      alert("Game cancelled.");
      return;
    }

    attempts++;

    const won = checkGuess(userGuess, correctNumber, attempts, maxAttempts, score);

    if (won) {
      alert(`You guessed it in ${attempts} attempt(s)! Here is your score: ${score}`);
      console.log(`You guessed it in ${attempts} attempt(s)! Here is your score: ${score}`)
      return;
    } else {
		score -= 10
	}
  }

  alert(`You used all your attempts. You lost! The correct number was ${correctNumber}.`);
};

game();

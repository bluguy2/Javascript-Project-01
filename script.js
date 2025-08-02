let attempts;
const maxAttempts = 10;
let score = 100;
const welcome = "Welcome to the Number Guessing Game!\n\n" +
                 "So, you have decided to accept my challenge. Guess the number I have chosen. You have 10 attempts, however, so use them wisely. *Evil laugh*";
let welcomealert = alert(welcome);

function generateRandomNumber() {
   const rannum = Math.floor(Math.random() * 100) + 1;
   return rannum;
}

function getPlayerGuess() {
  const message = "Guess the number between 1 and 100";
  let userInput = prompt(message);

  if (userInput === null) {
    return null;
  }

  const number = Number(userInput);

  if (isNaN(number) || number < 1 || number > 100) {
    alert(
      "The input is invalid, please insert a valid number between 1 and 100."
    );
    return getPlayerGuess();
  }

  return number;
}

//now for the game
function checkGuess(userGuess, correctNumber, attempts, maxAttempts) {
  if (userGuess === correctNumber) {
    alert("Congratulations, you won");
    return true;
  } else if (attempts < maxAttempts) {
    if (userGuess < correctNumber) {
      alert( `You tried ${userGuess}. Try a higher number. ${attempts} attempt(s) was made!`);
    } else {
      alert( `You tried ${userGuess}. Try a lower number. ${attempts} attempt(s) was made!`);
    }
  }
  return false;
}

function game() {
    alert(
        "Instructions:\n" +
        "1. I've picked a random number between 1 and 100.\n" +
        "2. You have 10 attempts to guess it.\n" +
        "3. After each wrong guess, I'll tell you if you need to guess higher or lower.\n" +
        "4. You start with 100 points and lose 10 points for each wrong guess.\n\n" +
        "Good luck!"
		);

  const correctNumber = generateRandomNumber();
  attempts = 0;
  score = 100;

  while (attempts < maxAttempts) {
    const userGuess = getPlayerGuess();

    if (userGuess === null) {
      alert("Game cancelled. Give up or refresh the page to start again!");
      return;
    }

    attempts++;

    const won = checkGuess(
      userGuess,
      correctNumber,
      attempts,
      maxAttempts,
    );

    if (won) {
      alert(
        `You guessed it in ${attempts} attempt(s)! Here is your score: ${score}.`
      );
	  alert(
	    `How can you even beat me?!! You must have cheated!! I'll be back!! Come back later and refresh the page to start again!`
	  );
      console.log(
        `You guessed it in ${attempts} attempt(s)! Here is your score: ${score}. Refresh the page to start again.`
      );
      return;
    } else {
      score -= 10;
    }
  }

  alert(`You used all your attempts. You lost! The correct number was ${correctNumber}. Give up or refresh the page so I can beat you again! *Evil laugh*`);
  console.log(`You used all your attempts. You lost! The correct number was ${correctNumber}.`)
};

game();

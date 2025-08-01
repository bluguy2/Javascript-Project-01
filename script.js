let attempts;
const maxAttempts = 10;
let score = 100;

function generateRandomNumber() {
  const ranNum = Math.floor(Math.random() * 100) + 1;
  console.log("number: " + ranNum);
  return ranNum;
}

function getPlayerGuess() {
  const message = "Guess the number (1-100)";
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
      alert("Try a higher number");
    } else {
      alert("Try a lower number");
    }
  }
  return false;
}

function game() {
  const correctNumber = generateRandomNumber();
  attempts = 0;
  score = 0;

  while (attempts < maxAttempts) {
    const userGuess = getPlayerGuess();

    if (userGuess === null) {
      alert("Game cancelled.");
      return;
    }

    attempts++;

    const won = checkGuess(
      userGuess,
      correctNumber,
      attempts,
      maxAttempts,
      score
    );

    if (won) {
      alert(
        `You guessed it in ${attempts} attempt(s)! Here is your score: ${score}`
      );
      console.log(
        `You guessed it in ${attempts} attempt(s)! Here is your score: ${score}`
      );
      return;
    } else {
      score -= 10;
    }
  }

  alert(
    `You used all your attempts. You lost! The correct number was ${correctNumber}.`
  );
}

game();

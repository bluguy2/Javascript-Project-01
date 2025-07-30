// function generateRandomNumber() {
//    return Math.floor(Math.random() * 10) + 1;

// }

// console.log(generateRandomNumber())

// function getPlayerGuess() {
// 	let number = prompt("Please enter a number");

//     do {
//        if (1 == number <= 100) {
// 	      return number;
// 	   } else {
// 	      number = prompt("Please enter a number (not a word)");
// 	}
//    } while (number != parseInt(number));
// }

// console.log(getPlayerGuess())

let attempts = 0;
const maxAttempts = 10;

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random number between 1 and 100: " + randomNumber);
  return randomNumber; 
}

// same with Math.ceil
// const generateRandomNumber1 = () => {
//     let randomNumber = Math.ceil(Math.random() * 100);
//     console.log("Random number between 1 and 100: " + randomNumber);
// }
// generateRandomNumber1

const getPlayerGuess = () => {
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

  // or shorter:
  // if (isNaN(number) || number < 1 || number > 100) {
  //   alert("The input is invalid, please insert a valid number between 1 and 100.");
  //   return getPlayerGuess();
  // }

  console.log(number);
  return number; 
};

const checkGuess = (userGuess, correctNumber) => {
  if (userGuess < correctNumber) {
    alert("Try a higher number");
    return false;
  } else if (userGuess > correctNumber) {
    alert("Try a lower number");
    return false;
  } else {
    alert("Congratulations, you won");
    return true;
  }
};

const game = () => {
  const correctNumber = generateRandomNumber();
  attempts = 0;

  while (attempts < maxAttempts) {
    const userGuess = getPlayerGuess();

    if (userGuess === null) {
      alert("Game cancelled.");
      return;
    }

    attempts++;

    const won = checkGuess(userGuess, correctNumber);

    if (won) {
      alert(`You guessed it in ${attempts} attempt(s)!`);
      console.log(`You guessed it in ${attempts} attempt(s)!`)
      return;
    }
  }

  alert(`You used all your attempts. You lost! The correct number was ${correctNumber}.`);
};

game();

//Number guessing game
const maxNum=prompt("Enter your maximum: ")
const targetNum=Math.floor(Math.random()*maxNum)+1;
let guess = prompt("Enter your guess (or 'q' to quit):");
let attempts = 1;

while (guess !== targetNum) {
  if (guess === 'q') {
    console.log(`The number was : ${targetNum}`);
    break;
  }
  guess = parseInt(guess);
  if(guess === targetNum) {
        console.log(`You won!! You took ${attempts} guesses `);
        break;
  }
  else if (guess > targetNum) {
        attempts++;
        guess = prompt("Too high! Enter a new guess (or 'q' to quit):");
  } else if (guess < targetNum) {
        attempts++;
        guess = prompt("Too low! Enter a new guess (or 'q' to quit):");
  } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit:");
  }
}
console.log("Thanks for playing");


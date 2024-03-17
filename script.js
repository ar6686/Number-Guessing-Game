const minnum = 1;
const maxnum = 100;
let answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
console.log(answer);

let attempt = 0;
let guessInput = document.querySelector('.numberBox input');


let result = document.querySelector('.result');
function handleGuess() {
  let guess = Number(guessInput.value);
  guessInput.value = "";
  if (guess == '') {
    result.innerHTML = "Please enter a number";
  }
  else if (guess < minnum || guess > maxnum) {
    result.innerHTML = "The number is not between 1 and 100";
  } else {
    attempt++;
    if (guess > answer) {
      result.innerHTML = "Too high! Try again.";
    } else if (guess < answer) {
      result.innerHTML = "Too low! Try again.";
    } else {
      result.innerHTML = `Congrats! You guessed it. The answer was ${answer}. It take ${attempt} attempts.`;
      if (attempt == 1) {
        result.innerHTML = `Congrats! You guessed it in your first attempt. The answer was ${answer}.`;
      }
      guessInput.disabled = true;
      submitButton.style.display = 'none'
      restartButton.style.display = 'flex'
    }
  }
}
guessInput.focus();

const submitButton = document.querySelector('.submitBtn');
const restartButton = document.querySelector('.restartBtn');
submitButton.addEventListener('click', handleGuess);
document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});
restartButton.addEventListener('click', ()=>{
  attempt = 0;
  answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
  guessInput.value = "";
  guessInput.disabled = false;
  console.log(answer);
  submitButton.style.display = 'flex'
  restartButton.style.display = 'none'
  result.innerHTML = "";
});
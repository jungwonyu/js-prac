document.addEventListener('DOMContentLoaded', () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');

  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');

  let guessCount = 1;
  let resetButton;

  guessSubmit.onclick = () => {
    const inputValue = Number(guessField.value);
    guesses.textContent = `${guesses.textContent} ${inputValue}`;
    
    (randomNumber < inputValue) ? guessSubmit.play("high") : (randomNumber > inputValue) ? guessSubmit.play() : guessSubmit.finish();
    (guessCount > 10) && guessSubmit.gameOver();
  };

  guessSubmit.play = (type = "low") => {
    lowOrHi.textContent = `Last guess was too ${type}!`;
    lastResult.textContent = `Wrong!`;
    lastResult.setAttribute('data-check', 'false');
    guessCount++;
  }

  guessSubmit.finish = () => {
    guessField.setAttribute('disabled', true);
    guessSubmit.setAttribute('disabled', true);
    lowOrHi.textContent = ``;
    lastResult.textContent = `Congratulations! You got it right!`;
    lastResult.setAttribute('data-check', 'true');
    guessSubmit.createButton();
  }

  guessSubmit.createButton = () => {
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.onclick = () => guessSubmit.reset();
  }

  guessSubmit.gameOver = () => {
    guessField.setAttribute('disabled', true);
    guessSubmit.setAttribute('disabled', true);
    lastResult.textContent = `Game Over`;
    lowOrHi.textContent = ``;
    guessSubmit.createButton();
  }

  guessSubmit.reset = () => {
    lowOrHi.textContent = ``;
    lastResult.textContent = ``;
    guesses.textContent = ``;
    guessField.value = ``;
    guessField.removeAttribute('disabled');
    guessSubmit.removeAttribute('disabled');
    lastResult.removeAttribute('data-check');
    guessCount = 1;
    resetButton.parentNode.removeChild(resetButton);
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
});

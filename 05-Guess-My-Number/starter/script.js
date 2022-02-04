'use strict';

/*
//document.querySelector('.message') selects an element with the class name message
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//Generate a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Select the element where the event should happen. The event we are looking for is click and this must be placed as the first argument. On the second argument we must asign a function that will be executed when the event listed in the first argument happens. JS will call the function when the event happens. We get a string that we convert to a number in this case.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  }

  //When guess is out of range
  else if (guess > 20 || guess < 0) {
    //document.querySelector('.message').textContent = 'Out of range';
    displayMessage('Out of range');
  }

  //When player wins. To changed style, the value needs to be always a string
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.message').textContent = '🥳 Correct Number';
    displayMessage('🥳 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    score > highScore ? (highScore = score) : (highScore = highScore);
    document.querySelector(
      '.label-highscore'
    ).textContent = `🥇 Highscore: ${highScore}`;
  }

  //When guess is different, code refactoring of the 2 else if commented below
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //When guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});

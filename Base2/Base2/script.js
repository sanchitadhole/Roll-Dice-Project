'use strict';

let rollDice = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let newBtn = document.querySelector('.btn--new');
let dice = document.querySelector('.dice');

let scores = [0, 0];
let activePlayer = 0;
let gameOver = true;
let currentScore = 0;


let playerOneCurrentScore = document.querySelector('#current--0');
let playerTwoCurrentScore = document.querySelector('#current--1');
let playerOneScore = document.querySelector('#score--0');
let playerTwoScore = document.querySelector('#score--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let playerOneName = document.querySelector('#name--0');
let playerTwoName = document.querySelector('#name--1');

function init() {

    scores = [0, 0];
    activePlayer = 0;
    gameOver = true;
    currentScore = 0;

    playerOneCurrentScore.textContent = '0';
    playerTwoCurrentScore.textContent = '0';
    playerOneScore.textContent = '0';
    playerTwoScore.textContent = '0';
    dice.style.display = 'none';


    playerOneName.textContent = "Player 1";
    playerTwoName.textContent = "Player 2";
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.remove('player--active');
    player2.classList.remove('player--active');
    player1.classList.add('player--active');


}

init()

rollDice.addEventListener('click', () => {

    // Random Number
    let diceValue = Math.floor(Math.random() * 6) + 1; // 1 to 6 2
    console.log(diceValue);
    dice.style.display = 'block'; // 
    dice.src = `dice-${diceValue}.png`; // string interpolation // dice-5.png <img.src='dice-diceValue.png'>

    if (diceValue != 1) {
        currentScore += diceValue;
        // playerOneCurrentScore.textContent = currentScore;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }


});


function switchPlayer() {

    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;


    // player1.classList.add('player--active');
    // player2.classList.remove('player--active');

    // layer1.classList.remove('player--active');
    // player2.classList.add('player--active');

    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

    dice.style.display = 'none';


}


holdBtn.addEventListener('click', () => {

    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector(`#name--${activePlayer}`).textContent = 'Winner...!!';
        dice.style.display = 'none'; // 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    }

})

newBtn.addEventListener('click', init)
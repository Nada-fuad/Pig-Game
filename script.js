`use strict`;

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);

const diceEl = document.querySelector(`.dice`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnNew = document.querySelector(`.btn--new`);
const btnhold = document.querySelector(`.btn--hold`);

score0El.textContent = `0`;
score1El.textContent = `0`;
let playing = true;
const scores = [0, 0];
let currentScore = 0;
let activPlayer = 0;

const switschPlayer = function () {
  document.getElementById(`current--${activPlayer}`).textContent = 0;
  activPlayer = activPlayer === 1 ? 0 : 1;
  currentScore = 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};
diceEl.classList.add(`hidden`);

btnRoll.addEventListener(`click`, function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activPlayer}`).textContent =
        currentScore;
    } else {
      switschPlayer();
    }
  }
});

btnhold.addEventListener(`click`, function () {
  if (playing) {
    scores[activPlayer] += currentScore;
    document.getElementById(`score--${activPlayer}`).textContent =
      scores[activPlayer];
    if (scores[activPlayer] >= 10) {
      playing = false;
      diceEl.classList.add(`hidden`);

      document
        .querySelector(`.player--${activPlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activPlayer}`)
        .classList.remove(`player--active`);
    } else {
      switschPlayer();
    }
  }
});

btnNew.addEventListener(`click`, function () {
  diceEl.classList.add(`hidden`);

  document.getElementById(`score--${activPlayer}`).textContent = 0;
  document.getElementById(`current--${activPlayer}`).textContent = 0;
});

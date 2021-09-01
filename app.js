// import functions and grab DOM elements

// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
import { getRandomPokemon } from './utils.js';
import { getPokedex } from './utils.js';
import { encounterPokemon } from './utils.js';
import { catchPokemon } from './utils.js';
import { setPokedex } from './utils.js';
import { findById } from './utils.js';
import { renderNewPokemon } from './utils.js';
// initialize state

// set event listeners
// User clicks catch button
// - increment: `pokeCaught++`
// - We figure out the id of the pokemon that was captured.
//     - call `catchPokemon(id)` with this id
// - now, if `pokeCaught > 10`, redirect to the results page
// - call `renderNewPokemon()`

let pokeCaught = 0;

const catchButton = document.getElementById('catch');

renderNewPokemon();

catchButton.addEventListener('click', () => {
    pokeCaught++;
    let pokemonSelected = document.querySelector('input:checked');
    catchPokemon(Number(pokemonSelected.value));
    renderNewPokemon();
    if (pokeCaught > 10) {
        window.location = '../results/index.html';
    }
});

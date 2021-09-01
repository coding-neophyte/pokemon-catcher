import { pokemonData } from './poke-data.js';

function getRandomIndex() {
    return Math.floor(Math.random() * pokemonData.length);
}

export function getRandomPokemon() {
    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

    while (
        randomIndex1 === randomIndex2
        || randomIndex2 === randomIndex3
        || randomIndex1 === randomIndex3) {
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();
    }

    return [
        pokemonData[randomIndex1],
        pokemonData[randomIndex2],
        pokemonData[randomIndex3]
    ];
}

export function renderNewPokemon() {
    const div = document.getElementById('poke-container');
    const pokeImg1 = document.getElementById('pokemon-img1');
    const pokeImg2 = document.getElementById('pokemon-img2');
    const pokeImg3 = document.getElementById('pokemon-img3');
    const pokeInput1 = document.getElementById('pokemon1');
    const pokeInput2 = document.getElementById('pokemon2');
    const pokeInput3 = document.getElementById('pokemon3');


    const pokeArray = getRandomPokemon();


    pokeImg1.src = pokeArray[0].url_image;
    pokeImg2.src = pokeArray[1].url_image;
    pokeImg3.src = pokeArray[2].url_image;

    pokeInput1.value = pokeArray[0].id;
    pokeInput2.value = pokeArray[1].id;
    pokeInput3.value = pokeArray[2].id;

    encounterPokemon(pokeArray[0].id);
    encounterPokemon(pokeArray[1].id);
    encounterPokemon(pokeArray[2].id);
}

const POKEDEX = 'pokedex';


export function setPokedex(pokedex) {
    const stringArray = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringArray);
}

// getPokedex()
// - retrieves and parses the pokedex in local storage
export function getPokedex() {
    const getDex = localStorage.getItem(POKEDEX);
    if (!getDex) {
        return [];
    }
    const parseDex = JSON.parse(getDex);
    return parseDex;

}
// encounterPokemon(id)
// - getPokedex
// - If the pokemon has been previously seen, just increment the times seen
// - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
// - setPokedex
export function encounterPokemon(id) {
    console.log(id);
    const encounterArray = getPokedex();
    const hasBeenSeen = findById(encounterArray, id);
    const pokemonName = findById(pokemonData, id);
    if (hasBeenSeen) {
        hasBeenSeen.seen++;
    } else {
        const pokemonObject = { id: id, seen: 1, caught: 0, name: pokemonName.pokemon };
        encounterArray.push(pokemonObject);
    }
    setPokedex(encounterArray);
}

// catchPokemon(id)
// - getPokedex
// - no need to check if it's been encountered. If you got this far, it _has_ been encountered.
// - Increment the `caught` of this pokemon in local storage
// - setPokedex
export function catchPokemon(id) {

    const catchEm = getPokedex();
    const caughtEm = findById(catchEm, Number(id));
    caughtEm.caught++;

    setPokedex(catchEm);


}

export function findById(poke, id) {
    for (let item of poke) {
        if (item.id === id) {
            return item;
        }
    }
}

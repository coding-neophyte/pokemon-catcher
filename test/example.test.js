// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { encounterPokemon, getPokedex, getRandomPokemon, setPokedex, catchPokemon } from '../utils.js';

const test = QUnit.test;

test('should return random pokemon each time', (expect) => {
    //Arrange
    // Set up your arguments and expectations


    //Act
    // Call the function you're testing and set the result to a const
    const actual = getRandomPokemon();

    expect.equal(actual.length, 3);
    // Make assertions about what is expected versus the actual result
    expect.equal(!actual[0].pokemonData, true);
    expect.equal(!actual[1].pokemonData, true);
    expect.equal(!actual[2].pokemonData, true);
});


test('should determine if a pokemon has been encountered and how many', (expect) => {

    const pokemon = [
        { seen: 0, caught: 1, id: 4 },
        { seen: 1, caught: 1, id: 3 },
        { seen: 5, caught: 4, id: 9 }
    ];
    setPokedex(pokemon);
    encounterPokemon(4);

    const pokemon2 = getPokedex();

    const actual = pokemon2[0].seen === 1;

    expect.equal(actual, true);
});

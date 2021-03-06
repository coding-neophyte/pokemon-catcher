import { getPokedex } from '../utils.js';

const pokemonData = getPokedex();
const pokemonCaughtArray = pokemonData.filter(poke => poke.caught > 0)
    .map(({ caught }) => caught);

const pokemonNameArray = pokemonData.filter(poke => poke.caught > 0)
    .map(({ name }) => name);

const pokemonEncounteredArray = pokemonData.filter(poke => poke.seen > 0)
    .map(({ seen }) => seen);

const backButton = document.getElementById('back-catcher');

console.log(pokemonNameArray, pokemonCaughtArray);
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: pokemonNameArray,
        datasets: [{
            label: '# of times caught',
            data: pokemonCaughtArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of times encountered',
            data: pokemonEncounteredArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

backButton.addEventListener('click', () => {
    window.location = '../index.html';
});

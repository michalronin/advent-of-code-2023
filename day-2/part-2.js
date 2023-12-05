const fs = require('fs');

function calculatePowerOfSets(games) {
    let sumOfPowers = 0;

    games.forEach(game => {
        const parts = game.split(': ');
        const sets = parts[1].split('; ');
        let maxCubes = { red: 0, green: 0, blue: 0 };

        sets.forEach(set => {
            const cubes = set.split(', ');
            cubes.forEach(cube => {
                const [count, color] = cube.split(' ');
                maxCubes[color] = Math.max(maxCubes[color], parseInt(count));
            });
        });

        const power = maxCubes.red * maxCubes.green * maxCubes.blue;
        sumOfPowers += power;
    });

    return sumOfPowers;
}

// Read game data from "input.txt"
const fileContent = fs.readFileSync('input.txt', 'utf8');
const gameData = fileContent.trim().split('\n');

console.log(calculatePowerOfSets(gameData));


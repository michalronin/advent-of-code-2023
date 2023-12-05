const fs = require('fs');

function possibleGames(games) {
    const maxCubes = { red: 12, green: 13, blue: 14 };
    let sumOfIds = 0;

    games.forEach(game => {
        const parts = game.split(': ');
        const gameId = parseInt(parts[0].split(' ')[1]);
        const sets = parts[1].split('; ');
        let isPossible = true;

        for (let set of sets) {
            const cubes = set.split(', ');
            for (let cube of cubes) {
                const [count, color] = cube.split(' ');
                if (parseInt(count) > maxCubes[color]) {
                    isPossible = false;
                    break;
                }
            }
            if (!isPossible) break;
        }

        if (isPossible) {
            sumOfIds += gameId;
        }
    });

    return sumOfIds;
}

// Read game data from "input.txt"
const fileContent = fs.readFileSync('input.txt', 'utf8');
const gameData = fileContent.trim().split('\n');

console.log(possibleGames(gameData));


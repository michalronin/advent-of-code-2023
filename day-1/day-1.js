export async function parseTextFile(filePath) {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    const array = text.split(/\r?\n/);
    return array;
  } catch(error) {
    console.error('Error fetching file:', error);
  }
}

function removeLetters(arr) {
  return arr.map(item => item.replace(/\D/g, ''));
}

const numberWords = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
};

export function extractNumbers(str) {
    const numberWordsRegex = 'one|two|three|four|five|six|seven|eight|nine';
    const regexPattern = new RegExp(`(?=(${numberWordsRegex}|\\d)).*(${numberWordsRegex}|\\d)`, 'i');
    const matches = str.match(regexPattern);

    if (matches && matches.length >= 3) {
        let firstNum = isNaN(matches[1]) ? numberWords[matches[1].toLowerCase()] : parseInt(matches[1], 10);
        let lastNum = isNaN(matches[2]) ? numberWords[matches[2].toLowerCase()] : parseInt(matches[2], 10);

        return `${firstNum}${lastNum}`;
    }

    return null;
}


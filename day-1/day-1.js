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

export function firstAndLastNumbers(arr) {
  return arr.map(item => {
    let numbers = item.replace(/\D/g, '');
    let first = numbers.charAt(0);
    let last = numbers.charAt(numbers.length - 1);
    if (numbers.length === 1) {
      last = first;
    }

    return first + last;
  });
}

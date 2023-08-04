/**
 * Randomly selects a specified number of words from an array.
 *
 * @param {string[]} array - The input array from which to select elements.
 * @param {number} count - The number of random elements to select.
 * @returns {string[]}
 */
export function getRandomWords(array, count) {
  const selectedWords = [];
  const arrayLength = array.length;

  if (count > arrayLength) {
    return [];
  }

  while (selectedWords.length < count) {
    const randomIdx = Math.floor(Math.random() * arrayLength);

    selectedWords.push(array[randomIdx]);
  }

  return selectedWords;
}

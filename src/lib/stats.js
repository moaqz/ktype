/**
 * Calculates Words Per Minute (WPM)
 * 
 * @param {number} totalWords
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {number}
 */
export function calculateWPM(totalWords, startDate, endDate) {
  const minutesTaken = (endDate.getTime() - startDate.getTime()) / (1000 * 60);
  const cpm = Math.round(totalWords / minutesTaken);

  if (isNaN(cpm)) {
    return 0;
  }

  return cpm;
}

/**
 * Calculates the accuracy of an input based on the total number of characters and the number of errors.
 *
 * @param {number} totalCharacters - The total number of characters in the text input.
 * @param {number} errorsCount - The number of errors found in the text input.
 * @returns {number} The calculated accuracy as a percentage.
 */
export function calculateAccuracy(totalCharacters, errorsCount) {
  const accuracy = (1 - errorsCount / totalCharacters) * 100;

  if (isNaN(accuracy)) {
    return 0;
  };

  return accuracy;
};
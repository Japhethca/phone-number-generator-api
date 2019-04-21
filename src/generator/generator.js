/**
 * @export
 * @returns {Number}
 */
export function getRandomNumber() {
  const maxNumber = 999999999;
  const minNumber = 0;
  const start = Math.ceil(minNumber);
  const end = Math.floor(maxNumber);
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

/**
 * @export
 * @param {Number} number
 * @returns {String}
 */
export function padWithZero(number, lengthOfNumbers = 10) {
  let numberStr = String(number);

  if (numberStr.length < lengthOfNumbers) {
    numberStr = numberStr.padStart(lengthOfNumbers, '0');
  }
  return numberStr;
}

/**
 * @export
 * @param {Number} noOfNumbers
 * @returns {Number}
 */
export function generateNNumbers(noOfNumbers = 10) {
  const numbers = new Set();

  while (numbers.size !== noOfNumbers) {
    numbers.add(padWithZero(getRandomNumber()));
  }
  return Array.from(numbers);
}

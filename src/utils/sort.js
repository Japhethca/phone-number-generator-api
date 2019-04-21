const parseNum = numStr => Number.parseInt(numStr, 10);

export default function sortNumbers(numbers, order) {
  if (order === 'desc') {
    return numbers.sort((a, b) => (parseNum(a) < parseNum(b) ? 1 : -1));
  }

  if (order === 'asc') {
    return numbers.sort((a, b) => (parseNum(a) > parseNum(b) ? 1 : -1));
  }
  return numbers;
}

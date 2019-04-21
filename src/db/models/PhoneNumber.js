import path from 'path';
import fs from 'fs';


const NUMBERS_LOCATION = process.env.NODE_ENV === 'test'
  ? 'tests/numbersTest.txt'
  : path.resolve(__dirname, './numbers.txt');

class PhoneNumber {
  static findAll() {
    const buff = fs.readFileSync(NUMBERS_LOCATION, { encoding: 'utf8' });
    const numbers = buff.toString().split(',');
    return numbers || [];
  }

  static create(numbers) {
    const numbersString = numbers.join(',');
    fs.writeFileSync(NUMBERS_LOCATION, numbersString, { encoding: 'utf8' });
  }
}

export default PhoneNumber;

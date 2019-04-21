import { expect } from 'chai';
import sinon from 'sinon';

import {
  getRandomNumber,
  generateNNumbers,
  padWithZero,
} from '../src/generator';


describe('getRandomNumber', () => {
  it('should generate random numbers', () => {
    const randomSpy = sinon.spy(Math, 'random');
    getRandomNumber();
    expect(randomSpy.called).to.equal(true);
  });
});

describe('generateNNumbers', () => {
  it('should generate given number of random numbers', () => {
    expect(generateNNumbers().length).to.equal(10);
    expect(generateNNumbers(20).length).to.equal(20);
  });
});

describe('padWithZero', () => {
  it('should prepend zero to number', () => {
    expect(padWithZero(2, 10).length).to.equal(10);
  });

  it('should not pad with zero number length is greater than 10', () => {
    expect(padWithZero(1111022030, 10)).to.equal('1111022030');
  });
});

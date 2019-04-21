import { expect } from 'chai';

import sort from '../src/utils/sort';

describe('sort', () => {
  const numbers = ['0000012346', '0000012347', '0000012345'];
  it('should sort numbers in ascending order', () => {
    const sortedNumbers = sort(numbers, 'asc');
    expect(sortedNumbers[0]).to.equal('0000012345');
  });

  it('should sort numbers in descending order', () => {
    const sortedNumbers = sort(numbers, 'desc');
    expect(sortedNumbers[0]).to.equal('0000012347');
  });
});

import { add } from './helpers';

describe('add', () => {
  it('should return null on invalid JSON', () => {
    const result = add(3, 2);
    expect(result).toEqual(5);
  });
});

import { expect } from 'chai';
import MyLib from '../src/main';

describe('Main', () => {
  it('should return true', () => {
    expect(MyLib()).to.be.equal(true);
  });
});
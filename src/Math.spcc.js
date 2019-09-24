
import {sum, diff} from './Math';


describe('Tests from math.js', () => { //test suite
   
  test('Sum Function', () => {
      expect(sum(1,2)).toEqual(3);
      expect(sum(2,2)).toEqual(4);
   });

  test('Sum Function', () => {
    expect(diff(1,2)).toEqual(-1);
    expect(diff(2,2)).toEqual(0);
  });
});

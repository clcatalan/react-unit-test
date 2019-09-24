
import {getPresidents, filterDemocrats, filterRepublicans} from './Arrays';


describe('Tests from Arrays.js', () => { //test suite
 
  let presidents;
    test('getPresidents', () => {
        expect(getPresidents()).toBeDefined();
        presidents = getPresidents();
    });

    test('filterDemocrats', () => {
        const democrats = filterDemocrats(presidents);

        democrats.forEach(element => {
            expect(element.party).toBe('Democrat');
        });
        
        
    });

});

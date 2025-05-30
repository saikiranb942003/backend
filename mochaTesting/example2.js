const assert = require('assert');
describe('Array', function(){
    let array;

    this.beforeEach(function () {
        array = [1,2,3];

    });

    it('should have length 3', function () {
        assert.strictEqual(array.length, 3);
    });

    it('should include 2', function () {
        assert.ok(array.includes(2));
    });

})

// output :
/*

  Array
    ✔ should have length 3
    ✔ should include 2


  2 passing (3ms)
*/


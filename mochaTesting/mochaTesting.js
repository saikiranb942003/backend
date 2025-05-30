// Mocha testing 
/*
-> mocha is a javascript test framework running on node.js widely used for unit testing 
integration testing and behavior driven development (bdd) in backend and frontend applications 
-> it is knowm for its flexibility , ease of use, and powerful async testing capabilities 
->  Mocha is not Node.js, it's a test runner.
// what is mocha 
-> mocha provides a testing environment that allows developers tp: 
-> write test cases to verify code functionality 
-> run those tests and get detailed output about what passed, failed, or broke 
-> structure test suites clearly and modularly 

// installation 
-> local installation 
npm install --save -dev mocha 

-> global installation 
-> npm istall -g mocha 

// add a test script in our package.json file 
"scripts" : {
    "test" : "mocha "
}

// test structure 
-> mocha supports two main styles 
-> BDD (behaviour driven development) : uses describe, it 
-> TDD (test driven development) : uses suite, test (less commonly used) 

BDD is more popular so we will focus on that 
describe() : groups test cases together. a suite       
it() : defines a single test 
before() : runs once before all tests in a suite 
after() : runs once after all tests 
beforeEach() : runs before each test case 
afterEach() : runs after each test 




*/ 

const assert = require('assert');

describe('Math operations', function () {
    it('should return 4 when adding 2 + 2', function () {
        assert.strictEqual(2+2, 4);
    }); 

    it('should return 0 when subtracting 2-2', function () {
        assert.strictEqual(2-2,0);
    })
})

/*
output :
 Math operations
    ✔ should return 4 when adding 2 + 2
    ✔ should return 0 when subtracting 2-2


  2 passing (3ms)
*/





describe("Test suite 1", function () {

    beforeEach("BE for test suite 1", function () {
        console.log("before each is being executed", this.currentTest.title); 

    }); 

    afterEach('AE for test suite 1', function () {
        console.log("after each is being executed" + this.currentTest.title);
        
    });

    it("test case 1", function () {
        console.log("test case 1 execution completed");
        
    });

    it("test case 2", function () {
        console.log("test case 2 execution completed");
        
    });
 
    it("test case 3", function () {
        console.log("test case 3 execution completed");
        
    });


    
});    


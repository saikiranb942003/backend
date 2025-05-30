/*
describe("my home page tests", function () {
   it("Check Login", function () {
     console.log("check login passed");
     
   })

   it("Check Home page", function () {
    console.log("Home page passed");
    
  })

  it("Navigate to home page", function () {
    console.log("naviagte to home page  passed");
    
  });
}); 

*/


// with errors   

describe("my home page tests", function () {
    it("Check Login", function () {
      console.log("check login passed");
      
    })
 
    it("Check Home page", function () {
     console.log("Home page passed");
     
   })
 
   it("Navigate to home page", function () {
     console.log("naviagte to home page  passed"); 
     throw Error("test failure");
     
   });
 }); 
 




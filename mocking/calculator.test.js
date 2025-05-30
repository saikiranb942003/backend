const {calculateTotal } = require('./calculator'); 
const math = require('./math'); 

jest.mock('./math'); // mock the entire module 
/*
-> jest replaces all the real exports from math.js with 
mock functions 
-> in this case math.add becomes a mock function 
math.add = jest.fn() 
-> so we can control its behaviour (eg : return values) and track usuage (eg: how it was called) 

*/
test('calls mocked add function', () => {
  math.add.mockReturnValue(10); // fake return value 
  
  const result = calculateTotal(2,3); 
  expect(result).toBe(10); // uses mocked value 
  expect(math.add).toHaveBeenCalledWith(2,3); // checks call args 

}); 


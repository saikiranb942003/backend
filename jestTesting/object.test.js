
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3); 
})

function createUser() {
    return { name: 'sai kiran', age : 22}; 
}

test('creates a user object', () => {
    expect(createUser()).toEqual({ name : 'sai kiran', age : 22}); 
}); 



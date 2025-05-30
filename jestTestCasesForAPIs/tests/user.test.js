const request = require('supertest');
/*
supertest : a library that allows us to simulate http requests 
-> it wraps around our express app so we can fake sending requests and getting responses without running a server 

*/
const app = require('../app');

describe('User API', () => {
// describe is a jest function that groups related test cases together or testsuit 
// User API is just a label describing the test group - useful in the test output 
  // Testing signup
  test('POST /user/signup → should create a new user', async () => {
    // test : defines a individual test case 
    // "content" : is the description of whats being tested
    // async is used for asynachronous calls 
    const res = await request(app)
      .post('/user/signup') // sends a post request to /user/signup endpoint 
      .send({ email: 'test@example.com', password: '123456' }); // send() method passes the request body (email, password) as JSON 

    // Should return 201 Created
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('msg', 'User created');
    // checks that the response body has a property msg with the exact value 'user created'  
});

  // Test duplicate signup
  test('POST /user/signup → should NOT allow duplicate email', async () => {
    const res = await request(app)
      .post('/user/signup')
      .send({ email: 'test@example.com', password: '123456' });

    // Should return 400 Bad Request
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('msg', 'User already exists');
  });

  // Test login with correct credentials
  test('POST /user/login → should login user with correct credentials', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({ email: 'test@example.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('msg', 'Login successful');
  });

  // Test login with wrong password
  test('POST /user/login → should fail with wrong credentials', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('msg', 'Invalid credentials');
  });

}); 
/* 
describe() : groups multiple tests 
test() : defines individual test cases  
request(app) : uses supertest to simulate http calls 
.post().send() : sends http post request with json body 
expect() : asserts expected output (status code or response data) 
  

*/



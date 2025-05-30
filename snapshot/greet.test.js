const greet = require('./greet');

test('greeting snapshot', () => {
  expect(greet('kiran')).toMatchSnapshot();
});

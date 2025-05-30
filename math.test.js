const assert = require('assert');
const add = require('./math');

describe('Add Function', () => {
  it('should return 7 when 3 + 4', () => {
    assert.strictEqual(add(3, 4), 7);
  });

  it('should fail if result is incorrect', () => {
    assert.notStrictEqual(add(3, 4), 10);
  });
});

const test = require('node:test');
const assert = require('node:assert/strict');

const {
  add,
  subtract,
  multiply,
  divide
} = require('../src/calculator');

test('add works', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract works', () => {
  assert.equal(subtract(7, 2), 5);
});

test('multiply works', () => {
  assert.equal(multiply(4, 3), 12);
});

test('divide works', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide works with decimals', () => {
  assert.equal(divide(7, 2), 3.5);
});

test('divide by zero throws the expected error', () => {
  assert.throws(
    () => divide(10, 0),
    {
      name: 'Error',
      message: 'Cannot divide by zero'
    }
  );
});

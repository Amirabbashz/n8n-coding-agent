const test = require('node:test');
const assert = require('node:assert/strict');

const {
  add,
  subtract,
  multiply
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

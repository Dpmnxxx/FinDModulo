const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 ÷ 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 0 ÷ 5 to equal 0', () => {
  expect(calculator.divide(0, 5)).toBe(0);
});

test('multiply 3 x 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiply -3 x 4 to equal -12', () => {
  expect(calculator.multiply(-3, 4)).toBe(-12);
});

test('divide() throws an error when divisor is 0', () => {
  expect(() => calculator.divide(5, 0))
    .toThrow('Come on man u 4 real?');
});



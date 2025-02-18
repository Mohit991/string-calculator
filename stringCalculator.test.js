const { add } = require('./stringCalculator');

test('returns 0 for empty string', () => {
    expect(add('')).toBe(0)
})

test('returns the same number for a single number', () => {
    expect(add('1')).toBe(1)
})

test('returns the sum of two numbers', () => {
    expect(add('2,3')).toBe(5)
})
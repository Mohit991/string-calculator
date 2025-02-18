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

test('returns the sum of any amount of comma separated numbers', () => {
    expect(add('2,3,5,6')).toBe(16)
})

test('handles new lines as delimiter between numbers', () => {
    expect(add('1\n2, 3')).toBe(6)
})

test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3)
})

test('throws an exception for negative numbers', () => {
    expect(() => add('1, -2, 3, -4').toThrow('negative numbers not allowed -2,-4'))
})

test('ignores nmumbers greater than 1000', () => {
    expect(add('2,1000')).toBe(2)
})
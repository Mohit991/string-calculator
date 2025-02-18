function add(numbers) {
    if (numbers === '') {
        return 0
    }
    const nums = numbers.split(/[\n,]/).map(Number) //splitting the array based on the delimiter and converting each value to number
    const sumOfValues = nums.reduce((sum, num) => sum + num, 0) //finding the sum of values, works for any amount of numbers
    return sumOfValues
}


module.exports = { add }
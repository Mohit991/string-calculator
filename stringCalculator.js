function add(numbers) {
    if (numbers === '') {
        return 0
    }
    let delimiter = /[,\n]/
    if (numbers.startsWith('//')){
        const parts = numbers.split('\n')
        delimiter = parts[0].substring(2)
        numbers = parts[1]
    }
    numbers = numbers.split(delimiter).map(Number) //splitting the array based on the delimiter and converting each value to number
    const sumOfValues = numbers.reduce((sum, num) => sum + num, 0) //finding the sum of values, works for any amount of numbers
    return sumOfValues
}


module.exports = { add }
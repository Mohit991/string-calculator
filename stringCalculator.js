function add(numbers) {
    if (numbers === "") return 0

    let delimiter = /[\n,]/

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n")
        const delimiterPart = parts[0].slice(2)
        numbers = parts[1]

        if (delimiterPart.includes("][")) {
            const delimiters = delimiterPart
                .slice(1, -1)  // Remove outer brackets
                .split("][")   // Split multiple delimiters
                .map(d => escapeRegExp(d))
                .join("|");    // Join as regex pattern
            delimiter = new RegExp(delimiters);
        } else {
            delimiter = new RegExp(escapeRegExp(delimiterPart));
        }
    }

    numbers = numbers.split(delimiter).map(Number)

    const negativeNumbers = numbers.filter(num => num < 0)
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
    }

    const sumOfValues = numbers.filter(num => num < 1000).reduce((sum, num) => sum + num, 0) //finding the sum of values, works for any amount of numbers
    return sumOfValues
}

// Helper function to escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

module.exports = { add }
const tail = require('./tail')

const maxOfTwoNumbers = (number1, number2) => {
    return number1 > number2 ? number1 : number2
}

const max = (list) => {
    if(list.length == 0) {
        return Number.MIN_SAFE_INTEGER
    }
    maxElement = list[0]
    maxElement = maxOfTwoNumbers(maxElement, max(tail(list)))
    return maxElement
}
module.exports = max
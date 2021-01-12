const tail = require('./tail')

const minOfTwoNumbers = (number1, number2) => {
    return number1 > number2 ? number2 : number1
}

const min = (list) => {
    if(list.length == 0) {
        return Number.MAX_SAFE_INTEGER
    }
    minElement = list[0]
    minElement = minOfTwoNumbers(minElement, min(tail(list)))
    return minElement
}
module.exports = min
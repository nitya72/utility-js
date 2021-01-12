const tail = require('./tail')

const resultList = (list, myFunction, mappedList) => {
    if(list.length > 0) {
        modifiedElement = myFunction(list[0])
        mappedList.push(modifiedElement)
        return resultList(tail(list), myFunction, mappedList)
    }
    return mappedList
}

const map = (list, myFunction) => {
    result = []
    result = resultList(list, myFunction, result)
    return result
}
module.exports = map;
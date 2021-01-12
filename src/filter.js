const tail = require('./tail')

const filteredList = (list, myFunction, resultList) => {
    if(list.length > 0) {
    shouldBeAdded = myFunction(list[0])
        if(shouldBeAdded) {
            resultList.push(list[0])
        }
        return filteredList(tail(list), myFunction, resultList)
    }
    return resultList
}

const filter = (list, myFunction) => {
    resultList = filteredList (list, myFunction, [])
    return resultList
}
module.exports = filter
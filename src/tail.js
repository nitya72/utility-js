const tail = (list) => {
    const updatedList = list.filter((number, index) => {
        if (index > 0) {
            return number
        }
    })
    return updatedList
}
module.exports = tail;
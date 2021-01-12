const map = require('./map')

const cube = (number) => {
    return Math.pow(number, 3)
}

const identity = (number) => {
    return number
}

const someFunction = (number) => {
    return number+1
}

describe('Map', () => {
    it('map([], cube) should give []', () => {
        expect(map([], cube)).toEqual([])
    })

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3])
    })

    it('map([1,2,3], cube) should give [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27])
    })

    it('map([a{x : 10}],someObject => someObject.x + 1 should give [11]', () => {
        expect(map([10], someFunction)).toEqual([11])
    })
})
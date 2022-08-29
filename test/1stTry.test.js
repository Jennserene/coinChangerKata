import {coinChanger} from '../src/1stTry.js'

// describe('adder tests', function () {
//     it('should return addition of two numbers', () => {
//         expect(add(1,1)).toBe(2)
//     })
// })

describe('handle 1 cent', function () {
    it('should return array with 1 in it', () => {
        expect(coinChanger(1)).toStrictEqual([1])
    })
})

describe('handle 2 cents', function () {
    it('should return array with two 1s in it', () => {
        expect(coinChanger(2)).toStrictEqual([1, 1])
    })
})

describe('handle 5 cents', function () {
    it('should return array with 5 in it', () => {
        expect(coinChanger(5)).toStrictEqual([5])
    })
})
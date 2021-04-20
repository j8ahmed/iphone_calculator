import { strToNum, numToStr, calc } from './rootReducerUtils'



describe('Tests for converting strings to numbers', () => {
    
    test('return number from a string number', () => {
        expect(strToNum('100')).toBe(100)
        expect(strToNum('-100')).toBe(-100)
    })
    test('return number from a common seperated string number', () => {
        expect(strToNum('1,000')).toBe(1000)
        expect(strToNum('-1,000')).toBe(-1000)
    })
    test('return number from a string number with decimals', () => {
        expect(strToNum('1.55678')).toBe(1.55678)
        expect(strToNum('-1.55678')).toBe(-1.55678)
    })
    test('return number from a common seperated string number with decimals', () => {
        expect(strToNum('1,000.55')).toBe(1000.55)
        expect(strToNum('-1,000.20')).toBe(-1000.20)
    })

})

describe('Tests for converting numbers to strings', () => {
    
    test('return string from a number', () => {
        expect(numToStr(100)).toBe('100')
        expect(numToStr(-100)).toBe('-100')
    })
    test('return a common seperated string from a number', () => {
        expect(numToStr(1000)).toBe('1,000')
        expect(numToStr(-1000)).toBe('-1,000')
    })
    test('return a string from a number with decimals', () => {
        expect(numToStr(1.55678)).toBe('1.55678')
        expect(numToStr(-1.55678)).toBe('-1.55678')
    })
    test('return a common seperated string from a number with decimals', () => {
        expect(numToStr(1000.55)).toBe('1,000.55')
        expect(numToStr(-1000.24)).toBe('-1,000.24')
    })
    
})


describe('Tests for calculations with calc function', () => {

    test('10 + 10 = 20', () => {
        expect(calc('10', '10', '+')).toBe('20')
    })
    test('10 - 10 = 0', () => {
        expect(calc('10', '10', '-')).toBe('0')
    })
    test('10 * 10 = 100', () => {
        expect(calc('10', '10', '*')).toBe('100')
    })
    test('10 / 10 = 1', () => {
        expect(calc('10', '10', '/')).toBe('1')
    })
    test('5000 + 10 = 5,010', () => {
        expect(calc('5000', '10', '+')).toBe('5,010')
    })

})


describe('Large / Small number calculations with exponential form result', () => {

    test('decimal number to negative exponent form', () => {
        // expect(calc('0.0001', '0.0001', '*')).toBe('0.00000001')
        // expect(calc('0.0000001', '0.0000001', '+')).toBe('0.0000002')
        expect(calc('0.0000000000000001', '1', '+')).toBe('1.0000000000000001')
        // 10,000,000 + 2 = 1.00e7
        expect(calc('10000000', '2', '+')).toBe('1.00e+7')
        expect(calc('0.000001', '0.000001', '+')).toBe('2.00e-6')
    })
})
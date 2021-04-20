/**
 * util functions
 *  */
import BigNumber from 'bignumber.js'

// const {log} = console
export const numToStr = (num:number | string) => {
    if(typeof num === 'number') num = num.toString()
    return num.replace(/(?<!\.\d*)\B(?=(\d{3})+(?!\d))/g, ',')
}
export const strToNum = (str:string) => parseFloat(str.replace(/,/g, ''))


export const calc = (arg1: string, arg2: string, op: string): string =>{
    let result,
    num1 = new BigNumber( strToNum(arg1) ), 
    num2 = new BigNumber( strToNum(arg2) )
    // BigNumber.config({
    //     // DECIMAL_PLACES: 7, 
    //     // EXPONENTIAL_AT: [-6, 6], 
    // }) 
    switch(op){
        case "+":
            result = num1.plus(num2)
            break
        case "-":
            result = num1.minus(num2)
            break
        case "*":
            result = num1.multipliedBy(num2)
            break
        case "/":
            result = num1.dividedBy(num2)
            break
        default:
            return "Error"
            break
    }
    //convert to exponential with 2 decimal places for large / small numbers   
    if( result.isGreaterThanOrEqualTo(1e7) ){
        return result.toExponential(2).toString()
    } 
    else if( result.isLessThanOrEqualTo(1e-5) && result.isGreaterThan(0) ){
        return result.toExponential(2).toString()
    } 
    
    return numToStr(result.toString())
}


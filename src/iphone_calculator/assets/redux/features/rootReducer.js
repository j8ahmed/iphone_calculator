const types = {
  DISPLAY: 'DISPLAY',
  ARG1: 'ARG1',
  ARG2: 'ARG2',
  OP: 'OP',
  RESULT: 'RESULT',
  INPUT: 'INPUT',
  RESET: 'RESET',
  CALC: 'CALC',
  TOOL_NEG: 'TOOL_NEG',
  TOOL_PERCENT: 'TOOL_PERCENT',
}


const initialState = {
    max: 9,                   //will sort this based on the screen orientation once I add the landscape mode.
    display: '0',
    arg1: '',
    arg2: '',
    op: '',
    result: '',
    input: ''
}

//util functions
// const {log} = console
const numToStr = num => num.toString().replace(/(?<!\.\d*)\B(?=(\d{3})+(?!\d))/g, ',')
const strToNum = str => parseFloat(str.replace(/,/g, ''))

const calc = (arg1, arg2, op) =>{
  let result,
  num1 = typeof(arg1) === 'string' ? strToNum(arg1) : arg1,
  num2 = typeof(arg2) === 'string' ? strToNum(arg2) : arg2
  switch(op){
      case "+":
          result = Math.round(1000000 * (num1 + num2) ) / 1000000
          break
      case "-":
          result = Math.round(1000000 * (num1 - num2) ) / 1000000
          break
      case "*":
          result = Math.round(1000000 * (num1 * num2) ) / 1000000
          break
      case "/":
          result = Math.round(1000000 * (num1 / num2) ) / 1000000
          break
      default:
          result = "Error"
          break
  }
  //convert to exponential
  if(Math.abs(result) >= 9999999){
    result = result.toExponential(3)
    console.log(typeof(result))
  }
  if(result >= 1000) return numToStr(result)
  
  return result
}

const reducer = (state = initialState, action) => {
    let result
    switch(action.type){
        
      case types.RESET:
        return {...initialState }

      case types.TOOL_PERCENT:
        return {...state, display: calc( action.payload, 100, '/' )}
      
      case types.TOOL_NEG:
        return {...state, display: calc(action.payload,-1, '*')}

      case types.DISPLAY:
        if(typeof(action.payload) === 'string'){
          return {...state, display: numToStr( strToNum(action.payload) )}
        }
        return {...state, display: numToStr( action.payload )}

      case types.ARG1:
        return {...state, arg1: action.payload}

      case types.ARG2:
        return {...state, arg2: action.payload}

      case types.OP:
        return {...state, op: action.payload}

      case types.RESULT:
        return {...state, result: action.payload}

      case types.INPUT:
        return {...state, input: action.payload}
      
      case types.CALC:
        const { arg1, arg2, op, newOp } = action.payload
        result = calc(arg1, arg2, op)
        return {...state, arg1: result, arg2, op: newOp, display: result }

      default:
         return state;
    }
};

export const mapStateToProps = state => {
  return {
    op: state.op,
    max: state.max,
    arg1: state.arg1,
    arg2: state.arg2,
    input: state.input,
    result: state.result,
    display: state.display,
  }
}


export const mapDispatchToProps = dispatch => {
  return {
    reset:          ()      => dispatch({ type: types.RESET }),
    changeOp:       op      => dispatch({ type: types.OP, payload: op }),
    changeArg1:     arg1    => dispatch({ type: types.ARG1, payload: arg1 }),
    changeArg2:     arg2    => dispatch({ type: types.ARG2, payload: arg2 }),
    updateInput:    input   => dispatch({ type: types.INPUT, payload: input }),
    percentCalc:    display   => dispatch({ type: types.TOOL_PERCENT, payload: display }),
    negativeCalc:    display   => dispatch({ type: types.TOOL_NEG, payload: display }),
    updateDisplay:  display => dispatch({ type: types.DISPLAY, payload: display }),
    calcUpdate:     (arg1, arg2, op, newOp = op) => dispatch({ type: types.CALC, payload: {arg1, arg2, op, newOp} })
  }
}


export default reducer
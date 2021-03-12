const DISPLAY = 'DISPLAY';
const ARG1 = 'ARG1';
const ARG2 = 'ARG2';
const OP = 'OP';
const RESULT = 'RESULT';
const INPUT = 'INPUT';
const RESET = 'RESET';
const CALC = 'CALC';


const initialState = {
    max: 9,                   //will sort this based on the screen orientation once I add the landscape mode.
    display: '0',
    arg1: '',
    arg2: '',
    op: '',
    result: '',
    input: ''
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        
      case RESET:
        return {...initialState }

      case DISPLAY:
        return {...state, display: action.payload}

      case ARG1:
        return {...state, arg1: action.payload}

      case ARG2:
        return {...state, arg2: action.payload}

      case OP:
        return {...state, op: action.payload}

      case RESULT:
        return {...state, result: action.payload}

      case INPUT:
        return {...state, input: action.payload}
      
      case CALC:
        return {...state, ...action.payload}

      default:
         return state;
    }

};

export const reset =           () =>       ({ type: RESET })
export const changeOp =        op =>       ({ type: OP, payload: op })
export const changeArg1 =      arg1 =>     ({ type: ARG1, payload: arg1 })
export const changeArg2 =      arg2 =>     ({ type: ARG2, payload: arg2 })
export const updateInput =     input =>    ({ type: INPUT, payload: input })
export const updateResult =    result =>   ({ type: RESULT, payload: result })
export const updateDisplay =   display =>  ({ type: DISPLAY, payload: display })
export const calcUpdate =      (arg1, arg2, op, display) => ({ type: CALC, payload: {arg1, arg2, op, display} })


export default reducer
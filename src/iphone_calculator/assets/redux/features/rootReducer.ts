import { numToStr, strToNum, calc } from './rootReducerUtils'

enum ActionType {
  DISPLAY,
  ARG1,
  ARG2,
  OP,
  RESULT,
  INPUT,
  RESET,
  CALC,
  TOOL_NEG,
  TOOL_PERCENT,
}

export interface CalculatorState {
  max: number,    //max number of digits for the calculator
  display: string,
  arg1: string,
  arg2: string,
  op: string,
  result: string,
  input: string
}

export const initialState: CalculatorState = {
    max: 9,                   //will sort this based on the screen orientation once I add the landscape mode.
    display: '0',
    arg1: '',
    arg2: '',
    op: '',
    result: '',
    input: ''
}

const reducer = (state: CalculatorState = initialState, action: {type: ActionType, payload: any} ) => {
    let result
    switch(action.type){
        
      case ActionType.RESET:
        return {...initialState}

      case ActionType.TOOL_PERCENT:
        return {...state, display: calc( action.payload, '100', '/' )}
      
      case ActionType.TOOL_NEG:
        return {...state, display: calc(action.payload,'-1', '*')}

      case ActionType.DISPLAY:
        if(typeof(action.payload) === 'string'){
          return {...state, display: numToStr( strToNum(action.payload) )}
        }
        return {...state, display: numToStr( action.payload )}

      case ActionType.ARG1:
        return {...state, arg1: action.payload}

      case ActionType.ARG2:
        return {...state, arg2: action.payload}

      case ActionType.OP:
        return {...state, op: action.payload}

      case ActionType.RESULT:
        return {...state, result: action.payload}

      case ActionType.INPUT:
        return {...state, input: action.payload}
      
      case ActionType.CALC:
        const { arg1, arg2, op, newOp }: {arg1: string, arg2: string, op: string, newOp: string} = action.payload
        result = calc(arg1, arg2, op)
        return {...state, arg1: result, arg2, op: newOp, display: result }

      default:
         return state;
    }
};

export const mapStateToProps = (state: CalculatorState) => ({...state})
  

export const mapDispatchToProps = (dispatch: ({type, payload}:{type: ActionType, payload?: any}) => void) => {
  return {
    reset:          ()               => dispatch({ type: ActionType.RESET }),
    changeOp:       (op:string)      => dispatch({ type: ActionType.OP, payload: op }),
    changeArg1:     (arg1:string)    => dispatch({ type: ActionType.ARG1, payload: arg1 }),
    changeArg2:     (arg2:string)    => dispatch({ type: ActionType.ARG2, payload: arg2 }),
    updateInput:    (input:string)   => dispatch({ type: ActionType.INPUT, payload: input }),
    percentCalc:    (display:string) => dispatch({ type: ActionType.TOOL_PERCENT, payload: display }),
    negativeCalc:   (display:string) => dispatch({ type: ActionType.TOOL_NEG, payload: display }),
    updateDisplay:  (display:string) => dispatch({ type: ActionType.DISPLAY, payload: display }),
    calcUpdate:     (arg1:string, arg2:string, op:string, newOp = op) => dispatch({ type: ActionType.CALC, payload: {arg1, arg2, op, newOp} })
  }
}


export default reducer
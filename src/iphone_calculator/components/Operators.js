import React from 'react'
import Button from './Button'
import { connect } from 'react-redux';
import { changeOp, changeArg1, changeArg2, updateInput, updateDisplay, calcUpdate } from '../assets/redux/features/rootReducer'
import { add, subtract, multiply, divide, equal } from '../assets/images/button_icons/IconTags'

const { log } = console
class Operators extends React.Component{
    constructor(props){
        super(props);
        this.handleOperators = this.handleOperators.bind(this);
    }

    calc(arg1, arg2, op){
        switch(op){
            case "+":
                return Math.round(1000000 * (parseFloat(arg1) + parseFloat(arg2)) ) / 1000000; 
            case "-":
                return Math.round(1000000 * (parseFloat(arg1) - parseFloat(arg2)) ) / 1000000; 
            case "*":
                return Math.round(1000000 * (parseFloat(arg1) * parseFloat(arg2)) ) / 1000000; 
            case "/":
                return Math.round(1000000 * (parseFloat(arg1) / parseFloat(arg2)) ) / 1000000; 
            default:
                return "Error"
        }
    }

    handleOperators(operator){
        let result
        const { calc } = this
        const { 
            op,
            arg1,
            arg2,
            display,
            input: prevInput,
            changeOp,
            changeArg1, 
            changeArg2,
            updateInput, 
            updateDisplay,
            calcUpdate,
        } = this.props
        log(`previousInput: ${prevInput}`)
        log(`currentInput: ${operator}`)
        switch(operator){
            case decodeURI('%C3%B7'):
                operator = "/"
                break

            case "x":
                operator = "*"
                break

            default:
                break
        }
        
        switch(true){
            //previous input was a number
            case /[0-9]/.test(prevInput):
                if(arg1){
                    result = calc(arg1, display, op)
                    if(operator === '='){
                        calcUpdate(result, prevInput, op, result)
                        break
                    }
                    calcUpdate(result, prevInput, operator, result)
                    break
                }
                changeOp(operator)
                changeArg1(display)
                break

            // previous input was an operator
            case /[/*+-]/.test(prevInput):
                if(operator !== '=') changeOp(operator)
                break

            case /=/.test(prevInput):
                if(operator === '=' && arg2){
                    log("Repeat previous calculation")
                    result = calc(arg1, arg2, op)
                    calcUpdate(result, arg2, op, result)
                }
                else changeOp(operator)
                break
                        
            //previous input is blank || Tools
            default:
                console.log('this is the default case for the operator type');
                break; 
        }
        updateInput(operator)
    }

    render(){
        const { handleOperators } = this
        return(
          <div id='operators' className="calc-section">
            <Button ID='divide'    image={divide}    value='&#247;' handleClick={handleOperators}/>
            <Button ID='multiply'  image={multiply}  value='x'      handleClick={handleOperators}/>
            <Button ID='subtract'  image={subtract}  value='-'      handleClick={handleOperators}/>
            <Button ID='add'       image={add}       value='+'      handleClick={handleOperators}/>
            <Button ID='equals'    image={equal}     value='='      handleClick={handleOperators}/>
          </div>
        )
      }
}

const mapStateToProps = state => {
  return {
    op: state.op,
    arg1: state.arg1,
    arg2: state.arg2,
    input: state.input,
    result: state.result,
    display: state.display,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    changeOp:       op      => dispatch(changeOp(op)),
    changeArg1:     arg1    => dispatch(changeArg1(arg1)),
    changeArg2:     arg2    => dispatch(changeArg2(arg2)),
    updateInput:    input   => dispatch(updateInput(input)),
    updateDisplay:  display => dispatch(updateDisplay(display)),
    calcUpdate:     (arg1, arg2, op, display) => dispatch(calcUpdate(arg1, arg2, op, display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operators)
import { Component } from 'react'
import Button from './Button'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, CalculatorState } from '../assets/redux/features/rootReducer'
import { add, subtract, multiply, divide, equal } from '../assets/images/button_icons/IconTags'
// const { log } = console

interface OpProps extends CalculatorState {
    changeOp: any,
    changeArg1: any, 
    updateInput: any, 
    calcUpdate: any,
}

class Operators extends Component<OpProps>{
    constructor(props: OpProps){
        super(props);
        this.handleOperators = this.handleOperators.bind(this);
    }

    handleOperators(operator: string){
        const { 
            op,
            arg1,
            arg2,
            display,
            input: prevInput,
            changeOp,
            changeArg1, 
            updateInput, 
            calcUpdate,
        } = this.props
        // log(`previousInput: ${prevInput}`)
        // log(`currentInput: ${operator}`)
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
            case /[0-9\\.]/.test(prevInput):
                if(arg1){
                    if(operator === '='){
                        calcUpdate(arg1, display, op)
                        break
                    }
                    calcUpdate(arg1, display, op, operator)
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
                    calcUpdate(display, arg2, op)
                    break
                }
                changeOp(operator)
                break
            
            //previous input is blank || Tools
            default:
                changeOp(operator)
                break
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

export default connect(mapStateToProps, mapDispatchToProps)(Operators)
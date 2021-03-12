import React from 'react'
import Button from './Button'
import { connect } from 'react-redux';
import { 
  changeOp,
  changeArg1,
  updateInput,
  updateDisplay, 
} from '../assets/redux/features/rootReducer'
const {log} = console
class NumPad extends React.Component{
  constructor(props){
    super(props);
    this.handleNumPad = this.handleNumPad.bind(this);
  }
  handleNumPad(input){
    const { 
      max,
      arg1, 
      display,
      input: prevInput,
      changeOp,
      updateInput,
      updateDisplay,
    } = this.props
    let newDisplay;
    
    log(`PrevInput: ${prevInput}`)
    log(`CurrInput: ${input}`)

    //store the operator that was last used
    // if(/[/*+-]/.test(prevInput)){
    //   // changeOp(prevInput);
    // }
    switch(true){
      
      case /[0-9(./)]/.test(prevInput):
        log("PrevInput is a number/Decimal")
        if( input === '.' && !/(\.)/.test(display) ){
          updateDisplay(display + input)
          break
        }

        if( /[0-9]/.test(input) && display.length < max ){
          updateDisplay(display + input)
          break
        }
        break
      
      case /[/*+-=]/.test(prevInput):
        updateDisplay(input)
        break

      default:
        updateDisplay(input)
        break
      
      // //when display is '0'
      // case (/^0$/.test(display)):
      //   input.match(/[.]/) ? newDisplay = '0.' : newDisplay = input;
      //   break;

      // //when display contains a decimal and user presses decimal button
      // case (/[.]/.test(display) && input === '.'):
      //   arg1 === display ? newDisplay = '0.' : newDisplay = display;
      //   break;

      // //all other cases
      // default:
      //   arg1 !== '' && !/[0-9[.]]/.test(prevInput) ? newDisplay = input : newDisplay = display + input;
      //   break;
    }
    // updateDisplay(newDisplay);
    updateInput(input);
    
  }
  render(){
    const { handleNumPad } = this
    return(
      <div id='numPad' className="calc-section">
        <Button ID='seven'   value='7' style={{gridArea: 'seven'}}  handleClick={handleNumPad}/>
        <Button ID='eight'   value='8' style={{gridArea: 'eight'}}  handleClick={handleNumPad}/>
        <Button ID='nine'    value='9' style={{gridArea: 'nine' }}  handleClick={handleNumPad}/>
        <Button ID='four'    value='4' style={{gridArea: 'four' }}  handleClick={handleNumPad}/>
        <Button ID='five'    value='5' style={{gridArea: 'five' }}  handleClick={handleNumPad}/>
        <Button ID='six'     value='6' style={{gridArea: 'six'  }}  handleClick={handleNumPad}/>
        <Button ID='one'     value='1' style={{gridArea: 'one'  }}  handleClick={handleNumPad}/>
        <Button ID='two'     value='2' style={{gridArea: 'two'  }}  handleClick={handleNumPad}/>
        <Button ID='three'   value='3' style={{gridArea: 'three'}}  handleClick={handleNumPad}/>
        <Button ID='zero'    value='0' style={{gridArea: 'zero', alignContent: 'center', justifyContent: 'flex-start', padding: '0 30px'}} handleClick={handleNumPad}/>
        <Button ID='decimal' value='.' style={{gridArea: 'decimal'}} handleClick={handleNumPad}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    max: state.max,
    arg1: state.arg1,
    arg2: state.arg2,
    input: state.input,
    result: state.result,
    display: state.display,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeArg1:     arg1    => dispatch(changeArg1(arg1)),
    updateInput:    input   => dispatch(updateInput(input)),
    updateDisplay:  display => dispatch(updateDisplay(display)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumPad)


// const mapDispatchToProps = dispatch => {
//   return {
//     changeOp:       op      => dispatch(changeOp(op)),
//     changeArg1:     arg1    => dispatch(changeArg1(arg1)),
//     changeArg2:     arg2    => dispatch(changeArg2(arg2)),
//     updateInput:    input   => dispatch(updateInput(input)),
//     updateResult:   result  => dispatch(updateResult(result)),
//     updateDisplay:  display => dispatch(updateDisplay(display)),
//   }
// }
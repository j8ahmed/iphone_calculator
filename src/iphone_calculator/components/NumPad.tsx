import { Component } from 'react'
import Button from './Button'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, CalculatorState } from '../assets/redux/features/rootReducer'
// const {log} = console

interface NumPadProps extends CalculatorState {
  updateInput: any,
  updateDisplay: any
}

class NumPad extends Component<NumPadProps>{
  constructor(props: NumPadProps){
    super(props);
    this.handleNumPad = this.handleNumPad.bind(this);
  }
  handleNumPad(input: string){
    const { 
      max,
      display,
      input: prevInput,
      updateInput,
      updateDisplay,
    } = this.props
    
    // log(`PrevInput: ${prevInput}`)
    // log(`CurrInput: ${input}`)

    //store the operator that was last used
    // if(/[/*+-]/.test(prevInput)){
    //   // changeOp(prevInput);
    // }
    switch(true){
      
      case /[0-9\\.]/.test(prevInput):
        if( input === '.' && !/\\./.test(display) ){
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

      case !prevInput:
        if(input === '.'){
          updateDisplay('0.')
          break
        }
        updateDisplay(input)
        break

      default:
        break
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

export default connect(mapStateToProps, mapDispatchToProps)(NumPad)
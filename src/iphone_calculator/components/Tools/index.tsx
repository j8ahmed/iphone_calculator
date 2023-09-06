import { Component } from 'react'
import Button from '../Button'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, CalculatorState } from "../../assets/redux/features/rootReducer"

interface ToolsProps extends CalculatorState {
  reset: any,
  negativeCalc: any,
  percentCalc: any,
}

class Tools extends Component<ToolsProps>{
    constructor(props: ToolsProps){
      super(props);
      this.handleTools = this.handleTools.bind(this);
    }
    handleTools(input: string){
      const { 
        display,
        reset,
        negativeCalc,
        percentCalc,
      } = this.props 
      switch(true){

        case (input === 'AC'):
          //initialize the calc again
          reset()
          break;

        case (input === '+/-'):
          negativeCalc(display);
          break;

        case (input === '%'):
          percentCalc(display);
          break;

        default:
          console.log('problem with handleTools function');
          break;
      }
    }
    render(){
      const {handleTools} = this
      return(
        <div id='tools' className="calc-section">
          <Button ID='clear'   value='AC'  handleClick={handleTools}/>
          <Button ID='sign'    value='+/-' handleClick={handleTools}/>
          <Button ID='percent' value='%'   handleClick={handleTools}/>
        </div>
      )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tools)

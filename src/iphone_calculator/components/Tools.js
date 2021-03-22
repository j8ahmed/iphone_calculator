import React from 'react'
import Button from './Button'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../assets/redux/features/rootReducer'

class Tools extends React.Component{
    constructor(props){
      super(props);
      this.handleTools = this.handleTools.bind(this);
    }
    handleTools(input){
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
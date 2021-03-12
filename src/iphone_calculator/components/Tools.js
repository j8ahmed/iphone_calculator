import React from 'react'
import Button from './Button'
import { connect } from 'react-redux';
import { 
  reset,
  updateDisplay, 
} from '../assets/redux/features/rootReducer'

class Tools extends React.Component{
    constructor(props){
      super(props);
      this.handleTools = this.handleTools.bind(this);
    }
    handleTools(input){
      const { 
        display,
        reset,
        updateDisplay, 
      } = this.props 
      switch(true){

        case (input === 'AC'):
          //initialize the calc again
          reset()
          break;

        case (input === '+/-'):
          updateDisplay(parseFloat(display) * -1);
          break;

        case (input === '%'):
          updateDisplay(parseFloat(display) / 100 );
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

const mapStateToProps = state => {
  return {
    display: state.display,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reset:          ()      => dispatch(reset()),
    updateDisplay:  display => dispatch(updateDisplay(display)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tools)
import React from 'react'
import { connect } from "react-redux";

class Display extends React.Component{
  constructor(props){
    super(props);
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  handleDisplay(){
    //this will take the this.props.display and return a user friendly version to #display element - upgrade point
  }
  render(){
    // const { display, input, arg1, arg2, op } = this.props
    // console.log(`display: ${display}\narg1: ${arg1}\nop: ${op}\narg2: ${arg2}\ninput: ${input}\n`);
    const { display } = this.props
    return (
      <div className='item' id="display">{display}</div>
    )
  }
}

const mapStateToProps = state => {
  return state
  // return {
  //   display: state.display,
  // }
}


export default connect(mapStateToProps)(Display)
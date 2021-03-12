import React from 'react'
import { connect } from 'react-redux';

class Button extends React.Component{
    constructor(props){
        super(props);  
    }

    render(){
        const { ID, style, handleClick, value, image } = this.props
        return (
            <button className='calc-button' style={style} id={ID} onClick={() => handleClick(value)}>
                {image ? image : value}
            </button>
        )
    }
}

export default connect()(Button)
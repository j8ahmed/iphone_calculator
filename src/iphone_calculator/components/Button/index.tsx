import {Component} from 'react'

interface BtnProps {
    ID: string,
    style?: object,
    handleClick: (input: string) => void,
    value: string,
    image?: JSX.Element | undefined,
}

export default class Button extends Component<BtnProps>{
    render(){
        const { ID, style, handleClick, value, image } = this.props
        return (
            <button className='calc-button' style={style} id={ID} onClick={() => handleClick(value)}>
                {image || value}
            </button>
        )
    }
}
import { Component } from 'react'
import Display from './components/Display'
import Operators from './components/Operators'
import Tools from './components/Tools'
import NumPad from './components/NumPad'

export default class App extends Component{
    render() {
        return (
            <div id="app">
                <h1>I Phone Calculator</h1>
                <div id="calculator">
                    <Display />
                    <div className='item' id='calc-layout'>
                        <Tools />
                        <Operators />
                        <NumPad />
                    </div>
                </div>
            </div>
        )
    }
}



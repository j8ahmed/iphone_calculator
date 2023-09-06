import { Component } from 'react'
import { Display, Operators, Tools, NumPad, Footer } from "./components/"

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

                <Footer />
            </div>
        )
    }
}



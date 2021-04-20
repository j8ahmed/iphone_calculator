import React from 'react'
import { Provider } from 'react-redux'
import store from './assets/redux/store'
import App from './App'
import './scss/main.scss'

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Index
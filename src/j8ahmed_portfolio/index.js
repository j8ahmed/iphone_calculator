import "./scss/main.scss"
import React from 'react'
import { Provider } from 'react-redux'
import store from './assets/redux/store'
import ReactRouterSetup from './components/global/ReactRouterSetup'

const Index = () => {
    
    return (
        <Provider store={store}>
            <ReactRouterSetup />
        </Provider>
    )
}

export default Index

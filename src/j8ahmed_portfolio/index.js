import "./scss/main.scss"
import React from 'react'
import { Provider } from 'react-redux'
import { AppProvider } from './components/AppProvider'
import store from './assets/redux/store'
import ReactRouterSetup from './components/ReactRouterSetup'

const Index = () => {
    return (
        <Provider store={store}>
            <ReactRouterSetup />
        </Provider>
    )
}

export default Index

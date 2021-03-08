import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './features/global/globalSlice'

const store = configureStore({
    reducer:{
        global: globalReducer
    }
})

console.log(store.getState())

export default store
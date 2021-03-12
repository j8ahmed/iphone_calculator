import { createStore } from '@reduxjs/toolkit'
import reducer from './features/rootReducer'

const store = createStore(reducer)


export default store
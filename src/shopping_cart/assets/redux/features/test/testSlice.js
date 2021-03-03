import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: ""
}

const testSlice = createSlice({
    name: 'test',
    initialState: initialState,
    reducers:{
        sayHello(state, action){
           state.message = "Hello World"
           return state
        }
    }
})

export default testSlice.reducer
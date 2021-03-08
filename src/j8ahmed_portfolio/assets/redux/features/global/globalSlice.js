import { createSlice } from '@reduxjs/toolkit'


//selectors
export const theme = state => state.theme

//initial state
const initialState = {
    theme: 'light'
}
//utility functions

//slice object
const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers:{
        toggleTheme(state, action){
            state.theme = action.payload
        }
    }
})


export const { toggleTheme } = globalSlice.actions

export default globalSlice.reducer


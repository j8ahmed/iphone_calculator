import { createSlice } from '@reduxjs/toolkit'


//selectors
export const siteTheme = state => state.global.theme

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
        toggleTheme(state){
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})


export const { toggleTheme } = globalSlice.actions

export default globalSlice.reducer


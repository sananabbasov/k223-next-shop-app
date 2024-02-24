import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = !state.value;
        }
    }
})


export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer;
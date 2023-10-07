import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: () => {
        const localDarkMode = localStorage.getItem('darkMode');
        return localDarkMode === 'true' ? true : false || false;
    },
    reducers: {
        toggleDarkMode: (state, action) => {
            localStorage.setItem('darkMode', !state);
            return !state;
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
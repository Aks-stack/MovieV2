import { createSlice } from "@reduxjs/toolkit"

export const isMoblieSlice = createSlice({
    name: 'isMobile',
    initialState: {
        isMobile: false,
        age: null,
    },
    reducers: {
        setIsMobileTrue: (state) => {
            state.isMobile = true;
        },
        setIsMobileFalse: (state) => {
            state.isMobile = false;
        },
        setage: (state, action) => {
            state.age = action.payload;
        }
    },
});

export const {setIsMobileTrue, setIsMobileFalse, setage} = isMoblieSlice.actions;

export const selectisMobile = (state) => state.isMobile.isMobile;
export const selectage = (state) => state.isMobile.age;


export default isMoblieSlice.reducer;
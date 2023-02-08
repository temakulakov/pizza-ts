import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCaregory: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectFilter: (state, action) => {
            state.selectedCaregory = action.payload;
        }
    }
});

export const { selectFilter } = filterSlice.actions;

export default filterSlice.reducer;
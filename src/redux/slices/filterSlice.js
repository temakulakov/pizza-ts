import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCaregory: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

    }
});



export default filterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import imgAction from "../Action/imgAction";

const initialState = {
    data: null,
    isLoading: false,
    error: null,
};

const ImgSlice = createSlice({
    name: 'netsuite',
    initialState,
    reducers: {
        netSuiteHandler: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(imgAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(imgAction.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(imgAction.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export default ImgSlice
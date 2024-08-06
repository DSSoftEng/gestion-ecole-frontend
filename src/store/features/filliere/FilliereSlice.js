// FilliereSlice.js

import { createSlice} from '@reduxjs/toolkit';

import {fetchFillieres,NbrOfClass} from './FilliereAction'
const initialState = {
    items: [],
    status: 'idle',
    error: null,
    totalFilliere:null
};


const FilliereSlice = createSlice({
    name: 'filliere',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFillieres.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFillieres.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchFillieres.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(NbrOfClass.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(NbrOfClass.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.totalFilliere = action.payload;
            })
            .addCase(NbrOfClass.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default FilliereSlice.reducer;
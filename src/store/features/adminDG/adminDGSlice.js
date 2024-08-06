import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateAdmin } from './adminDGAction';

const initialState = {
    isEdit: false,
    admin: null,
    status: 'idle',
    error: null
};

const AdminDGSlice = createSlice({
    name: 'adminDG',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateAdmin.fulfilled, (state, action) => {
                state.admin = action.payload;
                state.status = 'succeeded';
            })
            .addCase(updateAdmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateAdmin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default AdminDGSlice.reducer;

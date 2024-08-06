import { createSlice } from "@reduxjs/toolkit";
import { getUserByUsername,UpdateUser } from './UserAction';

const initialState = {
    user: null,
    status: 'idle',
    error: null
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserByUsername.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserByUsername.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(getUserByUsername.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(UpdateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                console.log(updatedUser)
                if (state.user && state.user.id === updatedUser.id) {
                  state.user = updatedUser;
                }
              });
    }
});

export default UserSlice.reducer;

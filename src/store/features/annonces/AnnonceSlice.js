import {fetchnotice,addNotice, updateNotice} from './AnnonceAction'
import axios from "axios";
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    isEdit: false,
    items: [],
    status: 'idle',
    error: null
};

const NoticeSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchnotice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchnotice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchnotice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNotice.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateNotice.fulfilled, (state, action) => {
                const { idAn, titre, description, image, dateEvent} = action.payload;
                const existingNotice = state.items.find(item => item.idAn === idAn);
                if (existingNotice) {
                    existingNotice.titre = titre;
                    existingNotice.description = description;
                    existingNotice.image = image;
                    existingNotice.dateEvent =dateEvent;
                }
            })
            
           
    }
});

export default NoticeSlice.reducer;


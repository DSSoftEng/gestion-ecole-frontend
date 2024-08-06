import {fetchTeachers ,addTeacher,updateTeacher,deleteTeacher,NbrOfTeacher} from './TeacherAction'
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isEdit: false,
    items: [],
    status: 'idle',
    error: null,
    totalTeachers:null
};

const TeacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTeachers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(NbrOfTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(NbrOfTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.totalTeachers = action.payload;
            })
            .addCase(NbrOfTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })




            .addCase(addTeacher.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateTeacher.fulfilled, (state, action) => {
                const { id, nom, prenom, username, password, img, age, email, telephone, sexe, filliere } = action.payload;
                const existingTeacher = state.items.find(item => item.id === id);
                if (existingTeacher) {
                    existingTeacher.nom = nom;
                    existingTeacher.prenom = prenom;
                    existingTeacher.username = username;
                    existingTeacher.password = password;
                    existingTeacher.img = img;
                    existingTeacher.age = age;
                    existingTeacher.email = email;
                    existingTeacher.telephone = telephone;
                    existingTeacher.sexe = sexe;
                    existingTeacher.filliere = filliere;
                }
            })
            .addCase(deleteTeacher.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    }
});

export default TeacherSlice.reducer;


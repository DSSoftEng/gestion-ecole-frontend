
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {fetchStudents,addStudent,updateStudent,deleteStudent,NbrOfStudent} from "./StudentAction"

const initialState = {
    isEdit: false,
    items: [],
    status: 'idle',
    error: null,
    totalstudent:null
};

const EtudiantSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(NbrOfStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(NbrOfStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.totalstudent= action.payload;
            })
            .addCase(NbrOfStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })







            .addCase(addStudent.fulfilled, (state, action) => {
                
                state.items.push(action.payload);
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                const { id, nom, prenom, username, password, img, age, email, telephone, sexe, filliere } = action.payload;
                const existingStudent = state.items.find(item => item.id === id);
                if (existingStudent) {
                    existingStudent.nom = nom;
                    existingStudent.prenom = prenom;
                    existingStudent.username = username;
                    existingStudent.password = password;
                    existingStudent.img = img;
                    existingStudent.age = age;
                    existingStudent.email = email;
                    existingStudent.telephone = telephone;
                    existingStudent.sexe = sexe;
                    existingStudent.filliere = filliere;
                }
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    }
});

export default EtudiantSlice.reducer;

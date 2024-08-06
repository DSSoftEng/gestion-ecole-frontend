

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// Thunk to fetch students
export const fetchStudents = createAsyncThunk('student/fetchStudents', async () => {
    const response = await axios.get('http://localhost:8082/api/etudiants/listStudents');
    return response.data;
});

// Thunk to add a student
export const addStudent = createAsyncThunk('student/addStudent', async ({ etudiant, filliereId }) => {
    const response = await axios.post(`http://localhost:8082/api/etudiants/addStudent?filliereId=${filliereId}`, etudiant);
    return response.data;
});

// Thunk to update a student
export const updateStudent = createAsyncThunk('student/updateStudent', async ({ id, etudiant, filliereId }) => {
    const response = await axios.put(`http://localhost:8082/api/etudiants/updateStudent/${id}?filliereId=${filliereId}`, etudiant);
    return response.data;
});

// Thunk to delete a student
export const deleteStudent = createAsyncThunk('student/deleteStudent', async (id) => {
    await axios.delete(`http://localhost:8082/api/etudiants/${id}`);
    return id;
});


export const NbrOfStudent =createAsyncThunk('student/fNbrOfStudent', async () => {
    const response = await axios.get('http://localhost:8082/api/etudiants/totalEtudiant');
    return response.data;
});
export default {fetchStudents,addStudent,updateStudent,deleteStudent,NbrOfStudent}

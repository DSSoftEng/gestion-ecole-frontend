import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 
export const fetchTeachers = createAsyncThunk('teacher/fetchTeachers', async () => {
    const response = await axios.get('http://localhost:8082/api/professeurs/listProfs');
    return response.data;
});


// Thunk to add a teacher
export const addTeacher = createAsyncThunk('teacher/addTeacher', async ({ professeur, filliereId }) => {
    const response = await axios.post(`http://localhost:8082/api/professeurs/addProf?idFilliere=${filliereId}`, professeur);
    return response.data;
});



// Thunk to update a teacher
export const updateTeacher = createAsyncThunk('teacher/updateTeacher', async ({ id, professeur, filliereId }) => {
    const response = await axios.put(`http://localhost:8082/api/professeurs/updateProf/${id}?filliereId=${filliereId}`, professeur);
    return response.data;
});

export const deleteTeacher = createAsyncThunk('teacher/deleteTeacher', async (id) => {
    await axios.delete(`http://localhost:8082/api/professeurs/${id}`);
    return id;
});
export const NbrOfTeacher =createAsyncThunk('teacher/fNbrOfTeacher', async () => {
    const response = await axios.get('http://localhost:8082/api/professeurs/totalProfesseur');
    return response.data;
});

export default { fetchTeachers, addTeacher, updateTeacher, deleteTeacher,NbrOfTeacher };

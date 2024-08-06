
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//recupere la listes des fillieres depuis backend
export const fetchFillieres = createAsyncThunk('filliere/fetchFillieres', async () => {
    const response = await axios.get('http://localhost:8082/api/filliere/listFilliere');
    return response.data;
});
export const NbrOfClass =createAsyncThunk('student/fNbrOfStudent', async () => {
    const response = await axios.get('http://localhost:8082/api/filliere/totalFilliere');
    return response.data;
});

export default {NbrOfClass,fetchFillieres}
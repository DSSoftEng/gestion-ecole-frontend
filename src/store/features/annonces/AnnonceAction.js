import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchnotice = createAsyncThunk('notice/fetchnotice', async () => {
    const response = await axios.get('http://localhost:8082/api/annonce/list');
    return response.data;
});

export const addNotice = createAsyncThunk('notice/addNotice', async ({ annonce }) => {
    const formData = new FormData();
    formData.append('image', annonce.image);
    formData.append('titre', annonce.titre);
    formData.append('description', annonce.description);
    formData.append('dateEvent', annonce.dateEvent);

    const response = await axios.post(`http://localhost:8082/api/annonce/add`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
});

export const deleteNotice = createAsyncThunk('notice/deleteNotice', async (id) => {
    await axios.delete(`http://localhost:8082/api/annonce/${id}`);
    return id;
});

export const updateNotice = createAsyncThunk('notice/updateNotice', async ({ id, annonce }) => {
    const response = await axios.put(`http://localhost:8082/api/annonce/update/${id}`, annonce);
    return response.data;
});

export default { fetchnotice, addNotice, deleteNotice, updateNotice };

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Thunk pour mettre à jour un administrateur
export const updateAdmin = createAsyncThunk('admin/updateAdmin', async ({ id, admin }) => {
    const response = await axios.put(`http://localhost:8082/api/directeurG/updateDireteurG/${id}`, admin);
    return response.data;
});

export default { updateAdmin };

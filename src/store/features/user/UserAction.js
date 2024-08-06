import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Thunk pour obtenir l'utilisateur par nom d'utilisateur
export const getUserByUsername = createAsyncThunk('user/getUserByUsername', async ({ username }) => {
    const response = await axios.get(`http://localhost:8082/api/user/${username}`);
    return response.data;
});


export const UpdateUser = createAsyncThunk('user/updateuser', async ({ idUser, user }) => {
    const response = await axios.put(`http://localhost:8082/api/user/${idUser}`, user);
    return response.data;
  });
  

export default { getUserByUsername ,UpdateUser};

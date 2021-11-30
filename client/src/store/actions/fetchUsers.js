import {createAsyncThunk} from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (userId, thunkAPI) => {
        const response = await UserService.fetchUsers();
        return response.data;
    }
)
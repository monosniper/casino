import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../actions/fetchUsers";

const initialState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleLoading(state, action) {
            state.isLoading = !state.isLoading;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.error = ''
            state.isLoading = false;
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false;
        })
    },

});

export default userSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Define an initial state
const initialState = {
  authorname: '',
  authorimage : '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Create an async thunk for fetching author details by ID
export const fetchAuthorById = createAsyncThunk(
  'author/fetchAuthorById',
  async (userId, thunkAPI) => {
    try{
      const response = await axios.get(`${API_URL}/api/users/${userId}`);
      return response.data;
    }catch(error){
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create the author slice
const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthorById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.authorname = action.payload.name;
        state.authorimage = action.payload.photo;
      })
      .addCase(fetchAuthorById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


// Export the author reducer
export default authorSlice.reducer;

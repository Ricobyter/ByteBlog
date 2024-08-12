// src/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Initial state
const initialState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
  isLoading : false,
  isError: false,
  isSuccess: false,
};
// Thunks

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/users/register`, { name, email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk('user/loginUser', async ({email,password}, { rejectWithValue }) => {
  try {
    // Use the API_URL environment variable to construct the endpoint URL
    const response = await axios.post(`${API_URL}/api/users/login`, {email,password});
    return response.data;
  } catch (error) {
    // Return the error message from the response or a generic message
    return rejectWithValue(error.response ? error.response.data.message : 'An error occurred');
  }
});

// export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
//   await axios.post('/api/users/logout');
//   return;
// });

// export const getUser = createAsyncThunk('user/getUser', async () => {
//   const response = await axios.get('/api/users/me');
//   return response.data;
// });

// export const loginStatus = createAsyncThunk('user/loginStatus', async () => {
//   const response = await axios.get('/api/users/status');
//   return response.data;
// });

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.isLoading=true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isSuccess = true;
        state.isLoading=false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.isError = true;
        state.isLoading= false;
        state.isSuccess= false;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isSuccess= true;
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.isError = true;
        state.isLoading = false;
      })
    //   .addCase(logoutUser.fulfilled, (state) => {
    //     state.user = null;
    //     state.token = null;
    //   })
    //   .addCase(getUser.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(getUser.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.user = action.payload;
    //   })
    //   .addCase(getUser.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    //   })
    //   .addCase(loginStatus.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.isLoggedIn = action.payload;
    //   });
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;

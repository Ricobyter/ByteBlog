// src/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

// Thunks
export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
  const response = await axios.post('/api/users/register', userData);
  return response.data;
});

export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
  const response = await axios.post('/api/users/login', userData);
  return response.data;
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
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
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

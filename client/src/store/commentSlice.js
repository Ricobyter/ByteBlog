import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Ensure this is set correctly

// Thunks
export const fetchCommentsByPostId = createAsyncThunk(
  'comments/fetchCommentsByPostId',
  async (postId, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/api/comment/getPostComments`, {postId});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minutes ago`;

  return `${Math.floor(seconds)} seconds ago`;
};

export const createComment = createAsyncThunk(
  'comments/createComment',
  async (commentData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/api/comment/create`, commentData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Initial State
const initialState = {
  comments: [],
  status: 'idle', // or 'loading' | 'succeeded' | 'failed'
  error: null
};

// Slice
const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByPostId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload.map(comment => ({
          ...comment,
          created_at: timeAgo(comment.created_at), // Format created_at using timeAgo
        }));
      })
      .addCase(fetchCommentsByPostId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default commentSlice.reducer;

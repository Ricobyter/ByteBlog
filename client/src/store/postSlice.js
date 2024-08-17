import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  postId: '',
  postTitle: '',
  postImage : '',
  postDescription: '',
  postContent: '',
  postAuthorId : '',
  postCategory : '',
  postDate : '',
  status: 'idle',
  isPostLoading : false,
  isPostLoaded: false,
  isErrorPost: false,
  error: null,
  post : null,
  posts : [],
};

// Create an asynchronous thunk action for creating a post
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/api/post/create`, postData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getPost = createAsyncThunk(
  'posts/getPost',
  async (postId, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/api/post/getPost`, {postId});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Utility function to calculate time difference
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

export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/api/post/posts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const formatPostDate = (date) => {
  const options = { day: '2-digit',month: 'short', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
  return `${formattedDate}`;
};


// Create the post slice
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isPostLoading = false,
        state.isPostLoaded = true
        state.postId = action.payload._id; // Assuming your post object has an _id field
        state.postTitle = action.payload.title;
        state.postDescription = action.payload.description;
        state.postContent = action.payload.content;
        state.postImage = action.payload.image;
        state.postCategory = action.payload.category;
        state.postAuthorId = action.payload.author;
        state.postDate = timeAgo(action.payload.created_at)
        state.post = {
          ...action.payload,
          created_at: timeAgo(action.payload.created_at)
        };
      })
      .addCase(getPost.rejected, (state, action) => {
        state.status = 'failed';
        state.isPostLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload; // Store all posts in the posts array
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  },
});

// Export the reducer for use in the store
export default postSlice.reducer;

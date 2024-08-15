import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import postReducer from './postSlice'
import authorReducer from './authorSlice'
import commentReducer from './commentSlice'

const store = configureStore({
    reducer: {
      user: userReducer,
      posts: postReducer,
      author: authorReducer,
      comments : commentReducer
    },
  });

export default store
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import toDoListSlice from './productSlice/toDoListSlice';

const rootReducer = combineReducers({
  toDoListSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
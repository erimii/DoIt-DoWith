import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import chatSlice from './chatSlice';
import errorSlice from './errorSlice'

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    error: errorSlice.reducer,
    chat: chatSlice.reducer,
});

export default rootReducer
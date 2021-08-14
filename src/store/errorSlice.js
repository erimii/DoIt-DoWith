import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
    initialState : {
        msg:{},
        status:null,
    },
    reducers:{
        returnErrors:(state, action)=>{
            state.msg = action.payload.msg;
            state.status = action.payload.status;
        },
        clearErrors:(state, action)=>{
            state.msg = {};
            state.status = null;
        }
    }
});
export const {returnErrors, clearErrors} = errorSlice.actions;
export default errorSlice;
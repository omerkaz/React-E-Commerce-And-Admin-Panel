import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name : "admin",
    initialState : {
        id : "admin",
        password : "admin",
        status : "false",
        errorMessage : ""
    },
    reducers : {
        loginStart : (state, action) => {
            state.status = "loading"
        },
        loginSuccess : (state, action) => {
            state.status = "true"
        },
        loginError : (state, {payload}) => {
            state.status = "false"
            state.errorMessage = payload
        }
    }
})

export const adminStatus = (state) => state.admin
export default adminSlice.reducer
export const {loginStart, loginSuccess, loginError} = adminSlice.actions

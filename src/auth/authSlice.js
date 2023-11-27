import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    signin: {
        fullname: "",
        email: "",
        token: "",
        image: ""
    }
}

export const authSlice = createSlice({
    name: "signin",
    initialState,
    reducers: {
        loginUser: (state, action)=> {
            const loginUser = action.payload;
            state.signin = loginUser;
        },
        logoutUser: ()=>{
            const logoutUser = {
                fullname: "",
                email: "",
                token: "",
                image: "",
            }
            state.signin = logoutUser;
        }
    }
});

export const {loginUser, logoutUser} = authSlice.actions;

export default authSlice.reducer;
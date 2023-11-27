import {configureStore} from "@reduxjs/toolkit";
import authSlicer from "../auth/authSlice";

export const store = configureStore({
    reducer: authSlicer,
});
import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    products: [{
        pname: "",
        pprice: "",
        pquant: "",
        pdesc: "",
        pcat: "",
        pdiscount: "",
        created_at: ""
    }]
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add_pro: (state, action)=> {
           let totalPro = action.payload;
           state.products = totalPro;
        },
        delete_pro: (state, action)=>{
            
        },
        update_pro: (state, action)=>{
            
        }
    }
});

export const {add_pro, delete_pro, update_pro} = productsSlice.actions;

export default productsSlice.reducer;
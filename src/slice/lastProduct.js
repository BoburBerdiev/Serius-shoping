import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'lastProductSlice',
    initialState: {
        lastProduct: [],

    },

    reducers: {
    changleLastProduct:(state , {payload})=> {
        const { id } = payload;
        let existingProduct = state.lastProduct?.find(
            (item) => item?.id === id );
        if (!existingProduct) {
            state.lastProduct.push(payload);
            if (state.lastProduct.length > 8) {
                state.lastProduct.shift();
            }
        }
    },
    }
})
export const {changleLastProduct} = filterSlice.actions
export default filterSlice.reducer
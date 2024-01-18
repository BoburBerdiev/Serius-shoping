import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterSlice' ,
    initialState: {
        category:null,
        subCategory:null,
        priceData:null,
        brands: null,
        product: null
    },
    reducers: {
        selectFilterCatalog:(state , {payload})=> {
          state.category = payload
        },
        selectFilterSubCategory:(state , {payload})=> {
            state.subCategory = payload
        },
        selectFilterBrands:(state ,{payload}) =>{
            state.brands = payload
        },
        selectFilterPrice:(state , {payload}) =>{
            state.priceData = payload
        }
       }
})



export const {selectFilterCatalog ,selectFilterSubCategory ,selectFilterBrands, selectFilterPrice} = filterSlice.actions
export default filterSlice.reducer
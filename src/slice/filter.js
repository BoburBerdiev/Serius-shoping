import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterSlice' ,
    initialState: {
        category:null,
        subCategory:null,
        priceData:[0,0],
        priceDataValue:[0,0],
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
        },
        selectFilterPriceValue:(state , {payload}) =>{
            state.priceDataValue = payload
        }
       }
})



export const {selectFilterCatalog,selectFilterPriceValue ,selectFilterSubCategory ,selectFilterBrands, selectFilterPrice} = filterSlice.actions
export default filterSlice.reducer
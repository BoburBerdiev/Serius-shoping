import {createSlice} from "@reduxjs/toolkit";

const initialState={
    lang:"en"
}

export const LanguageSlice=createSlice({
    name:'language',
    initialState,
    reducers:{
        checkLanguageAction:(state,{payload})=>{
            state.lang=payload
        }
    }
})

export const {checkLanguageAction}=LanguageSlice.actions
export default LanguageSlice.reducer
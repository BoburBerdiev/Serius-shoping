import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'CardSlice' ,
    initialState: {
        cardPosition: false
    },
    reducers: {
        changleCardPosition: (state,{payload} ) =>{
            if(payload === 'row') state.cardPosition = false
            else  if(payload === 'col') state.cardPosition = true
        }
    }
})



export const {changleCardPosition} = CardSlice.actions
export default CardSlice.reducer
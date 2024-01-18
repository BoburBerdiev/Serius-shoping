import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'page' ,
    initialState: {
        page: 1,
        order:'',
        sendFilter: true
    },
    reducers: {
        resetPage: (state ) => {
            state.page =1
        },
        changlePage: (state ) => {
            state.page +=1
        },
        changleOrder: (state , {payload}) => {
            state.order = payload
        },
        changleSendFilter: (state , {payload}) => {
            state.sendFilter = payload
        }
    }
})



export const {changlePage,resetPage ,changleOrder, changleSendFilter } = pageSlice.actions
export default pageSlice.reducer


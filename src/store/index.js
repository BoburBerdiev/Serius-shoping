import {configureStore} from "@reduxjs/toolkit";
import langSlice from '@/slice/lang'
import sortSlice from '@/slice/sort'
import pageSlice from '@/slice/page'
import CardSlice from '@/slice/cardPosition'
import filterSlice from '@/slice/filter'
import basketSlice from '@/slice/basket'
export const store=configureStore({
    reducer:{
        langSlice,sortSlice , pageSlice ,CardSlice, filterSlice , basketSlice
    },
    // devTools: process.env.NODE_ENV !== 'production',
})
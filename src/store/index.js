import {configureStore} from "@reduxjs/toolkit";
import langSlice from '@/slice/lang'
export const store=configureStore({
    reducer:{
        langSlice,
    },
    // devTools: process.env.NODE_ENV !== 'production',
})
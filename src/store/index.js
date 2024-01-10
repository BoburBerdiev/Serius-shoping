import {configureStore} from "@reduxjs/toolkit";
import LanguageReducer from '@/slice/language'
export const store=configureStore({
    reducer:{
        lang:LanguageReducer,
    },
    // devTools: process.env.NODE_ENV !== 'production',
})
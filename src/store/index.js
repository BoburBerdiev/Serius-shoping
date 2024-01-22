import {configureStore , combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import langSlice from '@/slice/lang'
import sortSlice from '@/slice/sort'
import pageSlice from '@/slice/page'
import CardSlice from '@/slice/cardPosition'
import filterSlice from '@/slice/filter'
import filterQuerySlice from '@/slice/filterQuery'
import basketSlice from '@/slice/basket'

const rootReducer =combineReducers({
    langSlice,sortSlice , pageSlice ,CardSlice, filterSlice , basketSlice ,filterQuerySlice
})

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
})
export const persistor=persistStore(store)
export default store
import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterQuerySlice',
    initialState: {
        query: '',
        catalog: '',
        subCatalog: '',
        brand: '',
        stock: ''
    },
    reducers: {
        selectStock: (state, {payload}) => {
            if (payload?.length > 0) {
                if (payload === 'new') {
                    state.stock = `&is_new=${payload} : ''}`
                } else {
                    state.stock = `${payload ? `&stock=${payload}` : ''}`
                }
            }
        },
        selectCatalog: (state, {payload}) => {
            if (payload?.length > 0) {
                if (payload !== 'all') {
                    state.catalog = `${payload ? `&category=${payload}` : ''}`
                } else state.catalog = ''

            }


        },
        selectBrand: (state, {payload}) => {
            if (payload?.length > 0) {
                state.brand = `${payload ? `&brand=${payload}` : ''}`
            }
        },
        selectSubCatalog: (state, {payload}) => {
            console.log(payload)
            if (payload?.length > 0) {
                state.subCatalog = `${payload ? `&sub_category=${payload}` : ''}`
            }
        },
        selectAllQuery: (state) => {
            state.query = null
            state.query = state.catalog + state.subCatalog + state.stock + state.brand
            console.log(state.query)
            console.log('work')
        }
    }
})


export const {selectStock , selectAllQuery, selectSubCatalog ,selectBrand, selectCatalog} = filterSlice.actions
export default filterSlice.reducer
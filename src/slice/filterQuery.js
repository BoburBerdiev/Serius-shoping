import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterQuerySlice',
    initialState: {
        query: null,
        catalog: '',
        subCatalog: '',
        brand: '',
        stock: '',
        sort: ''
    },

    reducers: {
        selectStock: (state, {payload}) => {
            if (payload === 'new') {
                state.stock = `&is_new=${payload}`
            } else if (payload === "") {
                state.stock = ''
            } else {
                state.stock = `${payload ? `&stock=${payload}` : ''}`
            }
        },
        selectCatalog: (state, {payload}) => {
            if (payload !== 'all') {
                state.catalog = `${payload ? `&category=${payload}` : ''}`
            } else state.catalog = ''
        },
        selectBrand: (state, {payload}) => {
            state.brand = `${payload ? `&brand=${payload}` : ''}`
        },
        selectSubCatalog: (state, {payload}) => {
            state.subCatalog = `${payload ? `&sub_category=${payload}` : ''}`
        },
        selectSort: (state, {payload}) => {
            state.sort = `${payload ? `&order_by=${payload}` : ''}`
        },
        selectAllQuery: (state, {payload}) => {
            if (payload === null) {
                state.query = null
                return
            }
            const data = state.catalog + state.subCatalog + state.stock + state.brand + state.sort
            if (data) {
                state.query = data
            } else {
                state.query = ""
            }
        }
    }
})
export const {
    selectStock,
    selectSort,
    selectAllQuery,
    selectSubCatalog,
    selectBrand,
    selectCatalog
} = filterSlice.actions
export default filterSlice.reducer
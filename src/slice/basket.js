import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: [],
        allPrice: 0,
        allCount: 0,
        orderType:'',

    },
    reducers: {
        clearOrder: (state) =>{
            state.basket= [],
                state.allPrice= 0,
                state.allCount= 0,
                state.orderType=''
        },
        changeOrderType: (state , {payload}) => {
            state.orderType = payload
        },
        basketList: (state, { payload }) => {
            const { id } = payload;
            let existingProduct = state.basket?.find(
                (item) => item?.id === id );

            if (existingProduct) {
                existingProduct.count += 1;
                existingProduct.totalPrice =
                    existingProduct.price * existingProduct.count;
                existingProduct.totalSales =
                    existingProduct.sales * existingProduct.count;
                state.allCount = ++state.allCount
            } else {
                const newOrder = {
                    ...payload,
                    count: 1,
                    totalPrice: payload.price,
                    totalPriceDiscount: payload.sales,
                };
                state.allCount = ++state.allCount
                state.basket.push(newOrder);
            }
        },
        incrementCount: (state, { payload }) => {
            const { id } = payload;
            const existingProduct = state.basket?.find(
                (item) => item?.id === id
            );
            if (existingProduct) {
                existingProduct.count += 1;
                existingProduct.totalPrice =
                    existingProduct.price * existingProduct.count;
                existingProduct.totalSales =
                    existingProduct.sales * existingProduct.count;
                state.allCount = ++state.allCount
            }
        },
        decrementCount: (state, { payload }) => {
            const { id } = payload;
            const existingProduct = state.basket?.find(
                (item) => item?.id === id);
            if (existingProduct && existingProduct.count > 1) {
                existingProduct.count -= 1;
                existingProduct.totalPrice =
                    existingProduct.price * existingProduct.count;
                existingProduct.totalSales =
                    existingProduct.sales * existingProduct.count;
                state.allCount = --state.allCount
            } else if (existingProduct.count === 1) {
                const indexOfProduct = state.basket.indexOf(existingProduct);
                state.basket.splice(indexOfProduct, 1);
                state.allCount -= 1;
            }
        },
        deleteOrderAction: (state, { payload }) => {
            const { id } = payload;
            const existingProduct = state.basket?.find(
                (item) => item?.id === id );
            const indexOfProduct = state.basket.indexOf(existingProduct);
            state.basket.splice(indexOfProduct, 1);
            state.allCount -= existingProduct.count;
        },
        totalAllPrice: (state) => {
            let collectAllPrice = 0;
            state?.basket?.map((item) => {
                if (item?.totalSales > 0) {
                    collectAllPrice += item.totalSales;
                } else {
                    collectAllPrice += item.totalPrice;
                }
            });
            state.allPrice = collectAllPrice;
            collectAllPrice = 0
        },
    },
});

export const {
    basketList,
    incrementCount,
    decrementCount,
    deleteOrderAction,
    totalAllPrice,
    changeOrderType,
    clearOrder
} = basketSlice.actions;
export default basketSlice.reducer;

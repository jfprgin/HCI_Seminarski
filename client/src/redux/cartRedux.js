import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: ( state, action) => {
            if ( state.quantity <= 0 ) return;
            state.quantity -= 1;
            state.products = state.products.filter(product => product._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity;
            state.products.pop(action.payload);
        },
        subtractProductInCart: ( state, action) => {
            console.log(action.payload.quantity);
            if ( state.quantity <= 1 ) 
            {
                state.quantity = 1;
            }
            else
            {
                state.total -= action.payload.price;
                state.quantity -= 1;
            }
        },
        addProductInCart: ( state, action) => {
            state.total += action.payload.price;
            state.quantity += 1;
        },
    }
});

export const { addProduct, removeProduct, subtractProductInCart, addProductInCart } = cartSlice.actions;
export default cartSlice.reducer;

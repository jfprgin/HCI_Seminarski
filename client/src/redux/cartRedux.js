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
            const productId = action.payload.id;
            const productToFind = state.products.find(product => product._id === productId);
            if ( productToFind.quantity <= 1 ) 
            {;
                productToFind.quantity = 1;
            }
            else
            {
                state.total -= action.payload.price;
                productToFind.quantity -= 1;
            }
        },
        addProductInCart: ( state, action) => {
            const productId = action.payload.id;
            const productToFind = state.products.find(product => product._id === productId);
            state.total += action.payload.price;
            productToFind.quantity += 1;
        },
    }
});

export const { addProduct, removeProduct, subtractProductInCart, addProductInCart } = cartSlice.actions;
export default cartSlice.reducer;

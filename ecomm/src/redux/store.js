
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { usersStateReducer, productsStateReducer, cartStateReducer, wishlistStateReducer} from "./reducers.js";



//combine multiple reducers in one
const rootReducer = combineReducers({
    usersStateRef: usersStateReducer,
    productsStateRef: productsStateReducer,
    cartStateRef:cartStateReducer,
    wishlistStateRef:wishlistStateReducer
})

export const ecommStore = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});
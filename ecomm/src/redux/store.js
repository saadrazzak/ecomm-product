
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { usersStateReducer } from "./reducers.js";



//combine multiple reducers in one
const rootReducer = combineReducers({
    usersStateRef: usersStateReducer
})

export const ecommStore = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});
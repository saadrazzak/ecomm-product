import * as actionTypes from "./actionType";

export const getUsersSuccessActionCreator = (users) =>{
    return {
        type: actionTypes.GET_USERS_SUCCESS_ACTION,
        data: users
    }
}

export const getUsersFailureActionCreator = (errorText)=>{
    return {
        type: actionTypes.GET_USERS_FAILURE_ACTION,
        data: errorText
    }
}

export const getProductsSuccessActionCreator = (product) =>{
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS_ACTION,
        data: product
    }
}

export const getProductsFailureActionCreator = (errorText)=>{
    return {
        type: actionTypes.GET_PRODUCTS_FAILURE_ACTION,
        data: errorText
    }
}

export const getCartSuccessActionCreator = (cart, isOpen) =>{
    return {
        type: actionTypes.GET_CART_SUCCESS_ACTION,
        data: cart,
        isMiniCart: isOpen
    }
}

export const getCartFailureActionCreator = (errorText, isOpen)=>{
    return {
        type: actionTypes.GET_CART_FAILURE_ACTION,
        data: errorText,
        isMiniCart: isOpen
    }
}

export const getWishlistSuccessActionCreator = (wishlist) =>{
    return {
        type: actionTypes.GET_WISHLIST_SUCCESS_ACTION,
        data: wishlist
    }
}

export const getWishlistFailureActionCreator = (errorText)=>{
    return {
        type: actionTypes.GET_WISHLIST_FAILURE_ACTION,
        data: errorText
    }
}
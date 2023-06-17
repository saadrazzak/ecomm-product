import * as actionTypes from "./actionType";
import { usersState, productsState, cartState, wishlistState} from "./state";

export const usersStateReducer = (prevState = usersState, actionObj)=>{
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_USERS_SUCCESS_ACTION:
            newState = {
                    ...prevState,
                    users: actionObj.data,
                    errorText: ''
            }
            break;
            case actionTypes.GET_USERS_FAILURE_ACTION:
                newState = {
                    ...prevState,
                    users: [],
                    errorText: actionObj.data
                }
                break;
    
        default:
            newState = {
                ...prevState
            }
            break;
    }

    return newState
}

export const productsStateReducer = (prevState = productsState, actionObj)=>{
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS_ACTION:
            newState = {
                    ...prevState,
                    products: actionObj.data,
                    errorText: ''
            }
            break;
            case actionTypes.GET_PRODUCTS_FAILURE_ACTION:
                newState = {
                    ...prevState,
                    products: [],
                    errorText: actionObj.data
                }
                break;
    
        default:
            newState = {
                ...prevState
            }
            break;
    }

    return newState
}

export const cartStateReducer = (prevState = cartState, actionObj)=>{
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_CART_SUCCESS_ACTION:
            newState = {
                    ...prevState,
                    cart: actionObj.data,
                    isMiniCart: actionObj.isMiniCart,
                    errorText: ''
            }
            break;
            case actionTypes.GET_CART_FAILURE_ACTION:
                newState = {
                    ...prevState,
                    cart: [],
                    isMiniCart: actionObj.isMiniCart,
                    errorText: actionObj.data
                }
                break;
    
        default:
            newState = {
                ...prevState
            }
            break;
    }

    return newState
}

export const wishlistStateReducer = (prevState = wishlistState, actionObj)=>{
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_WISHLIST_SUCCESS_ACTION:
            newState = {
                    ...prevState,
                    wishlist: actionObj.data,
                    errorText: ''
            }
            break;
            case actionTypes.GET_WISHLIST_FAILURE_ACTION:
                newState = {
                    ...prevState,
                    wishlist: [],
                    errorText: actionObj.data
                }
                break;
    
        default:
            newState = {
                ...prevState
            }
            break;
    }

    return newState
}
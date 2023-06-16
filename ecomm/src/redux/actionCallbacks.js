import { ProductService } from "../service/services"
import {getUsersSuccessActionCreator, getUsersFailureActionCreator , getProductsSuccessActionCreator, getProductsFailureActionCreator, getCartFailureActionCreator, getWishlistSuccessActionCreator, getWishlistFailureActionCreator, getCartSuccessActionCreator} from "./actionCreators"


export const getUsers = () => {
    return (dispatchFnRef) => {
        
        ProductService.Create()
            .getUsersData()
            .then(
                (resp) => {
                    if (resp.data) {
                        let sucessAction = getUsersSuccessActionCreator(resp.data)
                        dispatchFnRef(sucessAction)
                    }
                },
                (err) => {
                    let failAction = getUsersFailureActionCreator(err.message)
                    dispatchFnRef(failAction)
                }
            )
    }
}

export const getProducts = () => {
    return (dispatchFnRef) => {
        
        ProductService.Create()
            .getProductsData()
            .then(
                (resp) => {
                    if (resp.data) {
                        let sucessAction = getProductsSuccessActionCreator(resp.data)
                        dispatchFnRef(sucessAction)
                    }
                },
                (err) => {
                    let failAction = getProductsFailureActionCreator(err.message)
                    dispatchFnRef(failAction)
                }
            )
    }
}

export const getCart = (data, isOpen) => {

    return (dispatchFnRef) => {
        if (data) {
            let sucessAction = getCartSuccessActionCreator(data, isOpen)
            dispatchFnRef(sucessAction)
        }else{
            let failAction = getCartFailureActionCreator("not able the add the product", false )
            dispatchFnRef(failAction)
        }
    }
}

export const getWishlist = () => {
    return (dispatchFnRef) => {
        
        ProductService.Create()
            .getProductsData()
            .then(
                (resp) => {
                    if (resp.data) {
                        let sucessAction = getWishlistSuccessActionCreator(resp.data)
                        dispatchFnRef(sucessAction)
                    }
                },
                (err) => {
                    let failAction = getWishlistFailureActionCreator(err.message)
                    dispatchFnRef(failAction)
                }
            )
    }
}
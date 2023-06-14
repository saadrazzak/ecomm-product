import { ProductService } from "../service/services"
import {getUsersSuccessActionCreator, getUsersFailureActionCreator } from "./actionCreators"


export const getUsers = () => {
    return (dispatchFnRef) => {
        
        ProductService.Create()
            .getUsers()
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
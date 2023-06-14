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
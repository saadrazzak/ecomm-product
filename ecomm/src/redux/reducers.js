import * as actionTypes from "./actionType";
import { usersState} from "./state";

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
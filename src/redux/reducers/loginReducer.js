import { typesLogin } from "../types/typesLogin";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:

            return {
                ...state
            }        
        default:
            return state;
    }
}
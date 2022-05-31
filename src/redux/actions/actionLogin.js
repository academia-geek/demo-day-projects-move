import { typesLogin } from "../types/typesLogin"

export const loginSync = (uid, displayname) => {
    return {
        type: typesLogin.login,
        payload: {
            uid,
            displayname
        }
    }
}
import { typesLogin } from "../types/typesLogin"

export const registerSync = (email, pass, name) => {
    return {
        type: typesLogin.register,
        payload: {
            email, pass, name
        }
    }
}

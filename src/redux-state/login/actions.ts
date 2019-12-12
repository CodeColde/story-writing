import { LOGIN, LOGOUT } from "./types";
import { User } from "redux-state/users/types";

export function loginAction (user: User) {
    return {
        type: LOGIN,
        payload: {
            username: user.username,
            password: user.password
        }
    };
}
export function logout() {
    return {
        type: LOGOUT
    };
}
import { REGISTER, DELETE_ACCOUNT, RegisterActionTypes, User, CHANGE_PASSWORD, CHANGE_USERNAME } from "./types";

export const initialUserListState = [];

function users(state = initialUserListState, action: RegisterActionTypes) {
    switch (action.type) {
        case REGISTER:
            return [
                ...state,
                {
                    username: action.payload.username,
                    password: action.payload.password
                }
            ];
        case CHANGE_USERNAME:
            return state.map(
                (item: User) => item.username === action.payload.username ? {
                    username: action.payload.newUsername,
                    password: action.payload.password
                } : item
            );
        case CHANGE_PASSWORD:
            return state.map(
                (item: User) => item.username === action.payload.username ? action.payload : item
            );
        case DELETE_ACCOUNT:
            return state.filter(
                (item: User) => item.username !== action.payload.username
            );
        default:
            return state;
    }
}

export default users;
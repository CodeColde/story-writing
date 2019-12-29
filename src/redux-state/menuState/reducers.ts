import {
    TOGGLE_MENU,
    MenuActionTypes
} from "./types";

export const initialMenuState = false;

const menuReducer = (state = initialMenuState, action: MenuActionTypes) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
}

export default menuReducer;
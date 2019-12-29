export const TOGGLE_MENU = "TOGGLE_MENU";

export interface ToggleMenuReturn {
    type: typeof TOGGLE_MENU;
}

export type ToggleMenuAction = () => ToggleMenuReturn;

export type MenuActionTypes = ToggleMenuReturn;
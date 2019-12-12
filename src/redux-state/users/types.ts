export const REGISTER = "REGISTER";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export type Username = string;
export type Password = string;

export interface User {
    username: Username;
    password: Password;
}

export interface ChangeUsernameUser extends User {
    newUsername: Username;
}

export type Users = User[];

interface CreateUserReturn {
    type: typeof REGISTER;
    payload: User;
}

export interface DeleteAccountReturn {
    type: typeof DELETE_ACCOUNT;
    payload: { username: Username };
}

export interface ChangeUsernameReturn {
    type: typeof CHANGE_USERNAME;
    payload: ChangeUsernameUser;
}

export interface ChangePasswordReturn {
    type: typeof CHANGE_PASSWORD;
    payload: User;
}

export type CreateUserAction = (data: User) => CreateUserReturn;
export type ChangeUsernameAction = (user: ChangeUsernameUser) => ChangeUsernameReturn;
export type ChangePasswordAction = (user: User) => ChangePasswordReturn;
export type DeleteAccountAction = (username: Username) => DeleteAccountReturn;

export type RegisterActionTypes =
    | CreateUserReturn
    | DeleteAccountReturn
    | ChangeUsernameReturn
    | ChangePasswordReturn;

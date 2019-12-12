import { REGISTER, DELETE_ACCOUNT, Username, User, CHANGE_PASSWORD, CHANGE_USERNAME, ChangeUsernameUser } from "./types";

export function createUser(data: User) {
  return {
    type: REGISTER,
    payload: data
  };
}

export function changePassword(user: User) {
  return {
    type: CHANGE_PASSWORD,
    payload: user
  }
}

export function changeUsername(user: ChangeUsernameUser) {
  return {
    type: CHANGE_USERNAME,
    payload: user
  }
}

export function deleteAccount(username: Username) {
  return {
    type: DELETE_ACCOUNT,
    payload: {
      username
    }
  };
}
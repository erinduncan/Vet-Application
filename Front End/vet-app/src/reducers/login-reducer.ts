import { loginTypes } from "../action-mappers/login-action";
import { IUserState } from "../utilites";

const initialState: IUserState = {
  currentUser: null,
  loggedIn: false,
  loginMessage: ""
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.SUCCESSFUL_LOGIN:
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: true,
        loginMessage: "Login Successful."
      };

    case loginTypes.FAILED_LOGIN:
      return {
        ...state,
        loginMessage: action.payload.loginMessage
      };

    default:
      return state;
  }
};

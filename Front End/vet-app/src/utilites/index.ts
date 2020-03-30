import { combineReducers } from "redux";
import { userState } from "../reducers/login-reducer";
import { clientReducer } from "../reducers/client-reducer";

export interface IUserState {
  currentUser: any;
  loggedIn: boolean;
  loginMessage: string;
}

export interface IRegisterState {
  newUser: any;
  registerMessage: string;
}

export interface IClientState {
  clients: any,
  client: any,
  clientMessage: string,
  id: number
}

export interface IState {
  userState: IUserState;
  clientState: IClientState;
}

export const state = combineReducers<IState>({
  userState: userState,
  clientState: clientReducer
});
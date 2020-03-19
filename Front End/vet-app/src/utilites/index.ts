import { combineReducers } from "redux";

export interface IUserState {
  currentUser: any;
  loginMessage: string;
}

export interface IRegisterState {
  newUser: any;
  registerMessage: string;
}

export interface IState {
  
}

export const state = combineReducers<IState>({
  
});
import { combineReducers } from "redux";
import { userReducer } from "../reducers/login-reducer";
import { clientReducer } from "../reducers/client-reducer";
import { employeeReducer } from "../reducers/employee-reducer";

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

export interface IEmployeeState {
  employees: any,
  employee: any,
  employeeMessage: string,
  id: number
}

export interface IState {
  userState: IUserState;
  clientState: IClientState;
  employeeState: IEmployeeState;
}

export const state = combineReducers<IState>({
  userState: userReducer,
  clientState: clientReducer,
  employeeState: employeeReducer
});
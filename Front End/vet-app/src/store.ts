import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { state } from "./utilites";
import { applyMiddleware, Store, createStore, compose } from "redux";

const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
//this is how we actually build the store
//you really shouldn't ever have to change this file

const a: any = window;

//if they have devtools installed, let them be used
//otherwise use the default from redux
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk, logger) //exists in dispatch step
);

const persistedState = loadFromLocalStorage();

//this will be the store object that we use to give data to our components
export const store: Store<any> = createStore(state, persistedState, enhancer);
store.subscribe(() => saveToLocalStorage(store.getState()));
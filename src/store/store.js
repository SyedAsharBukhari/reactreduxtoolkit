import {
  applyMiddleware,
  combineReducers,
  compose,
  configureStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userSlice from "./slice/apifetchslice";

let reducers = combineReducers({
  fetchApiData: userSlice,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  {
    reducer: reducers,
  },
  // composeEnhancers(applyMiddleware(thunk))
);

export default store;


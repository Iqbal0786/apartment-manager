import { createStore } from "redux";
import { LoginReducer } from "./LoginRedux/LoginReducer";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MainReducer } from "./MainRedux/MainReducer";
const rootReducer= combineReducers({
     login:LoginReducer,
     data:MainReducer
})
export const store= createStore(rootReducer,applyMiddleware(thunk))
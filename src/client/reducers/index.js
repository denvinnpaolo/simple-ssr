import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducers from "./usersReducers";

export default combineReducers({
    users: usersReducers,
    auth: authReducer
})
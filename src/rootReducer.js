import { combineReducers } from "redux";
import login from "./Login/redux";
import user from "./User/reducer";

export default combineReducers({
    login: login,
    user: user
});

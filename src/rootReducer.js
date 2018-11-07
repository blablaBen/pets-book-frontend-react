import { combineReducers } from "redux";
import login from "./Login/redux";
import user from "./User/reducer";
import feed from "./Feed/redux";

export default combineReducers({
    login: login,
    user: user,
    feed: feed
});

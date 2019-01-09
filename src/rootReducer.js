import login from "./Login/redux";
import user from "./User/reducer";

const combineReducers = (state = {}, action) => {
    return  {
        login: login(state.login, action),
        user: user(state.user, action)
    }
}

export default combineReducers;

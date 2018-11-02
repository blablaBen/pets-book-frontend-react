import { userConstants } from './action';
const initialState = {
    isLoggedIn: false, 
    jwt: '',
    userData: {}
}

export default (state= initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn : true,
                jwt: action.jwt,
                userData: {
                    username: action.username
                }
            };
        default:
            return initialState;
    }
}
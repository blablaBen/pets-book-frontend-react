import { userConstants } from './action';

const initialState = {
    isLoggedIn: false,
    isUserDataFulfield: false, 
    jwt: '',
    userData: {},
    fulfilledUserData: {}
}

export default (state= initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_SUCCESS:
            sessionStorage.setItem('jwt', action.jwt);
            sessionStorage.setItem('userId', action.userId);
            sessionStorage.setItem('username', action.username);

            return {
                ...state,
                isLoggedIn : true,
                jwt: action.jwt,
                userId: action.userId,
                userData: {
                    username: action.username
                }
            };

        case userConstants.UPDATE_USER_SUCCESS:
            sessionStorage.setItem('fulfilledUserData', action.fulfilledUserData);
            return {
                ...state,
                isUserDataFulfield: true,
                fulfilledUserData : action.fulfilledUserData
            }
        
        default:
            return state;
    }
}
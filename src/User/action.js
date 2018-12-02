export const userConstants = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS"
}

export const onLogInSuccess = (jwt, username) => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        jwt: jwt,
        username: username
    }
}

export const onUpdateUserSuccess = (fulfilledUserData) => {
    return {
        type: userConstants.UPDATE_USER_SUCCESS,
        fulfilledUserData: fulfilledUserData
    }
};
export const userConstants = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS"
}

export const onLogInSuccess = (jwt, username, userId) => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        jwt: jwt,
        username: username,
        userId: userId
    }
}

export const onUpdateUserSuccess = (fulfilledUserData) => {
    return {
        type: userConstants.UPDATE_USER_SUCCESS,
        fulfilledUserData: fulfilledUserData
    }
};
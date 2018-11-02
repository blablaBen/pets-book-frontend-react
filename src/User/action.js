export const userConstants = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS"
}

export const onLogInSuccess = (jwt, username) => {
    return {
        type: userConstants.LOGIN_SUCCESS,
        jwt: jwt,
        username: username
    }
}
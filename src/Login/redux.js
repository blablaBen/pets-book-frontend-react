const inititalState = {
    username: "pmarkpen@andrew.cmu.edu",
    password: "123456"
};

//reducer
export default (state = inititalState, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                [action.key]: action.value
            };

        default:
            return state;
    }
}

//action generator
const ON_LOG_IN = "ON_LOG_IN";
export const onLogIn = () => {
    return {
        type: ON_LOG_IN
    };
};

const SET_FORM_DATA = "SET_FORM_DATA";
export const onDataChange = (key, value) => {
    return {
        type: SET_FORM_DATA,
        key: key,
        value: value
    }
}
const inititalState = {

};

//reducer
export default (state = inititalState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//action generator
export const onLogIn = (key, value) => {
    return {
        type: "SET_FORM_DATA",
        key: key,
        value: value
    };
};
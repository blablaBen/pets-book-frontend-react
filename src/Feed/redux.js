import {UPDATE_FEED_PENDING, UPDATE_FEED_FULFILLED} from './action';

const initialState = {
    isLoading: false,
    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FEED_PENDING: 
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_FEED_FULFILLED:
            return {
                ...state,
                posts: action.payload.data.data,
                isLoading: false
            }
        default:
            return state;
    }
}
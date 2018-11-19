import axios from "axios";
import {HOST} from '../Const/URLConstant';

export const UPDATE_FEED = "UPDATE_FEED";
export const UPDATE_FEED_PENDING = "UPDATE_FEED_PENDING";
export const UPDATE_FEED_FULFILLED = "UPDATE_FEED_FULFILLED";
export const updateFeed = (jwt) => ({
    type: UPDATE_FEED,
    payload: axios.get(
        `${HOST}/newFeeds/`, { headers: { Authorization: jwt } }
      )
});
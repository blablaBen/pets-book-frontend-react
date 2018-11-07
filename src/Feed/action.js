import axios from "axios";

export const UPDATE_FEED = "UPDATE_FEED";
export const UPDATE_FEED_PENDING = "UPDATE_FEED_PENDING";
export const UPDATE_FEED_FULFILLED = "UPDATE_FEED_FULFILLED";
export const updateFeed = () => ({
    type: UPDATE_FEED,
    payload: axios.get(
        `http://pattarasai.app2018.live:8080/appbase/newFeeds/`
      )
});
import axios from "axios";

const KEY = "AIzaSyD2bKUOzOH3hMN5HFpA_BVreHnNmZUYcL8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
    },
});

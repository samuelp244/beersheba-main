import { YOUTUBE_API_KEY } from "./getRecentVideosYT"

const getPlaylistItems = async (playlistId) => {
    const API = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=30&key=${YOUTUBE_API_KEY}`
    const res = await fetch(API);
    const data = await res.json();
    return data;
}

export default getPlaylistItems
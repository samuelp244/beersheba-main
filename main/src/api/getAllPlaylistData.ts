import { YOUTUBE_API_KEY } from "./getRecentVideosYT";
const API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&maxResults=15&key=${YOUTUBE_API_KEY}`;
// const API1 = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&maxResults=15&key=AIzaSyCjhYYUR3EwPFi1_eT5uV6EfO4s9yA-kt0`
const getAllPlaylistData = async () =>{
    const res = await fetch(API);
    const data = await res.json();
    return data
}



export default getAllPlaylistData;
import { allPlaylistsDataType, AllVideosListDataType, PlaylistItemsType } from "../types/apiResponseTypes";
import { fetchRecentDataType } from "../types/interfacesAndTypes"
import { RecentVideosParams } from "../types/interfacesAndTypes";

export const YOUTUBE_PLAYLIST_ITEMS_API="https://www.googleapis.com/youtube/v3/playlistItems"
export const YOUTUBE_API_KEY =  process.env.REACT_APP_GOOGLE_API_KEY

export const fetchRecentData = async () =>{
    const data:fetchRecentDataType = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${YOUTUBE_API_KEY}`)
    .then(res=>res.json())
    const items = data.items.filter(obj=>obj.snippet.liveBroadcastContent === "none")
    return items
} 

export const fetchUpcomingData = async () =>{
    const data:fetchRecentDataType = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${YOUTUBE_API_KEY}`)
    .then(res=>res.json())
    const items = data.items.filter(obj=>obj.snippet.liveBroadcastContent === "upcoming")
    return items.slice(0,3)
} 

export const fetchLiveData = async () =>{
    const data:fetchRecentDataType = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${YOUTUBE_API_KEY}`)
    .then(res=>res.json())
    const items = data.items.filter(obj=>obj.snippet.liveBroadcastContent === "live")
    return items.slice(0,3)
} 

export const getAllVideosList = async (params:RecentVideosParams) =>{
    const data:AllVideosListDataType = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&key=${YOUTUBE_API_KEY}`)
    .then(res=>res.json());
    return data
}

export const getAllPlaylistsData = async () =>{
    const data:allPlaylistsDataType = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&maxResults=15&key=${YOUTUBE_API_KEY}`)
    .then(res=>res.json());
    return data
}

export const getPlaylistItems = async (playlistId:string) => {
    const data:PlaylistItemsType = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=30&key=${YOUTUBE_API_KEY}`)
    .then(res=>res.json())
    return data;
}
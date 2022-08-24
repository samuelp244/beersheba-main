import { AllVideosListDataType, mongoPlaylistdata } from "../types/apiResponseTypes";
import { ytfetchData } from "./YTtypes";




// export const YOUTUBE_API_KEY =  process.env.REACT_APP_GOOGLE_API_KEY
export const BASE_URL = 'http://localhost:1337'

const getRecentdata = async()=>{
    const data:ytfetchData[] = await fetch(`${BASE_URL}/ytrecentdata`)
    .then(res=>res.json())
    return data.sort((first, second) => { return new Date(second.snippet.publishTime).getTime() - new Date(first.snippet.publishTime).getTime()});
}

export const fetchRecentData = async () =>{
    const data = await getRecentdata()
    const items = data.filter(obj=>obj.snippet.liveBroadcastContent === "none")
    // console.log(items)
    return items
} 

export const fetchUpcomingData = async () =>{
    const data = await getRecentdata()
    const items = data.filter(obj=>obj.snippet.liveBroadcastContent === "upcoming")
    return items
} 

export const fetchLiveData = async () =>{
    const data = await getRecentdata()
    const items = data.filter(obj=>obj.snippet.liveBroadcastContent === "live")
    return items
} 

export const getAllVideosList = async () =>{
    const data:AllVideosListDataType = await fetch(`${BASE_URL}/getAllData`)
    .then(res=>res.json());
    return data
}


export const getAllPlaylistsData = async () =>{
    const data:mongoPlaylistdata[] = await fetch(`${BASE_URL}/getplaylistdata`)
    .then(res=>res.json());
    return data.sort((first, second) => { return new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime()});
}



import axios from 'axios'
import { AllVideosListDataType, fetchRecentDataType, getAllPlaylistsdataType, getRecentDataType, PlaylistItem } from '../types/typesandinterfaces'

export const getRecentData = async () =>{
    
    try{
        const res:getRecentDataType = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${process.env.GOOGLE_API_KEY}`)
        .then(res=>res.data)
        // console.log(res)
        return res
    }catch (err){
        console.log(err)
    }
    
}

export const getAllData = async()=>{
    try{
        const res:AllVideosListDataType = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&key=${process.env.GOOGLE_API_KEY}`)
        .then(res=>res.data)
        return res
    }catch(err){
        console.log(err)
    }
}

export const getAllPlaylistsData = async () =>{
    try{
        const data:getAllPlaylistsdataType = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&maxResults=15&key=${process.env.GOOGLE_API_KEY}`)
        .then(res=>res.data);
        return data
    }catch (err){
        console.log(err)
    }
}

export const getPlaylistItems = async (playlistId:string) => {
    try{
        const data:PlaylistItem[] = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=30&key=${process.env.GOOGLE_API_KEY}`)
        .then(res=>res.data.items)
        return data;
    }catch(err){
        console.log(err)
    }
}
import { RecentVideosParams } from "../types/interfacesAndTypes";

export const YOUTUBE_PLAYLIST_ITEMS_API="https://www.googleapis.com/youtube/v3/playlistItems"

export const YOUTUBE_API_KEY = "AIzaSyCjhYYUR3EwPFi1_eT5uV6EfO4s9yA-kt0"
export async function getrecentList(params:RecentVideosParams){
    let res;
    if(params.nextButtonToken){
        res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${params.nextButtonToken}&key=${YOUTUBE_API_KEY}`);
    }else if (params.prevButtonToken){
        res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${params.prevButtonToken}&key=${YOUTUBE_API_KEY}`);
    }else{
        res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&key=${YOUTUBE_API_KEY}`);
    }
    const data = await res.json()
    return data
}
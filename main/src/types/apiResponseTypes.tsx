import { PlaylistItem, PlaylistsData } from "./interfacesAndTypes";

export interface AllVideosListDataType{
    kind: string,
    etag: string,
    prevPageToken:string,
    nextPageToken: string,
    items:PlaylistItem[],
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}

export interface allPlaylistsDataType{
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
    items:PlaylistsData[]
}

export interface PlaylistItemsType{
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
    items:PlaylistItem[]
}

////////
export interface mongoPlaylistdata{
    _id:string,
    PlaylistId:string,
    PlaylistTitle:string,
    publishedAt: string,
    items:[{
        _id:string,
        snippet:{
            publishedAt: string,
            title:string,
            videoId:string,
            thumbnails: {
                default: {
                    url: string,
                    width: string,
                    height: string
                }
            }
        }
    }]
}
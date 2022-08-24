export interface fetchRecentDataType{
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageInfo:{
        totalResults: number,
        resultsPerPage: number
    },
    items:youtubeSearchType[]
}

export interface youtubeSearchType{
    kind: string,
    etag: string,
    id: {
        kind: string,
        videoId: string
    },
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: {
                url:string,
                width: number,
                height: number
            },
            medium: {
                url:string,
                width: number,
                height: number
            },
            high: {
                url:string,
                width: number,
                height: number
            }
        },
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
    }
}

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

export interface PlaylistItem{
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt:string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: {
                url: string,
                width: number,
                height: number
            },
            medium: {
                url: string,
                width: number,
                height: number
            },
            high: {
                url: string,
                width: number,
                height: number
            }
        },
        channelTitle: string,
        playlistId: string,
        position: number,
        resourceId: {
          kind: string,
          videoId: string
        },
        videoOwnerChannelTitle: string,
        videoOwnerChannelId: string
      }
}
export interface PlaylistsData{
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: {
                url: string
                width: number,
                height: number
            },
            medium: {
                url: string
                width: number,
                height: number
            },
            high: {
                url: string
                width: number,
                height: number
            }
        },
        channelTitle: string,
        localized: {
        title: string,
        description: string
        }
    }
}
export interface PlaylistItem{
    kind: string,
    etag: string,
    _id: string,
    snippet: {
        publishedAt:string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: {
                url: string,
                width: number,
                height: number
            },
            medium: {
                url: string,
                width: number,
                height: number
            },
            high: {
                url: string,
                width: number,
                height: number
            }
        },
        channelTitle: string,
        playlistId: string,
        position: number,
        resourceId: {
          kind: string,
          videoId: string
        },
        videoOwnerChannelTitle: string,
        videoOwnerChannelId: string
      }
}
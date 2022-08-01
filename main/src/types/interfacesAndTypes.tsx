export interface RecentVideosParams{
    nextButtonToken:string|null,
    prevButtonToken:string|null
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

export interface PlaylistData{
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

export interface MeetingsFilterProps{
    sermonType:string[],
    setMeetingsDisplay:React.Dispatch<React.SetStateAction<string>>,
    meetingsDisplay:string
  }


export interface ytfetchData{
    _id: string,
    videoId: string,
    snippet: {
      title: string,
      description: string,
      thumbnails: {
        default: {
          url: string,
          width: number,
          height: number
        }
      },
      liveBroadcastContent: string,
      publishTime: string
    },
    __v: number
  }
import { useQuery } from '@tanstack/react-query'
import { fetchLiveData, fetchRecentData, fetchUpcomingData, getAllPlaylistsData, getAllVideosList } from './apiCalls'


export const useRecentVideosList = () => useQuery(['recentVideosList'],fetchRecentData, {
    staleTime: Infinity
  })

export const useUpcomingVideosList = () => useQuery(['UpComingVideosList'],fetchUpcomingData, {
    staleTime: Infinity
  });

export const useLiveVideosList = () => useQuery(['LiveVideosList'],fetchLiveData, {
  staleTime: Infinity
});


// const params = {
//   nextButtonToken:null,
//   prevButtonToken:null
// }

export const useAllVideosList = () => useQuery(['allVideosList'],getAllVideosList)

export const useAllPlaylistsData = () => useQuery(['allPlaylistData'],getAllPlaylistsData);

// export const usePlaylistItems = (playlistId:string) => useQuery(['recentPlaylistItems',playlistId],()=> getPlaylistItems(playlistId));
export const usePlaylistItems = (playlistId:string) => {
  const {data} = useAllPlaylistsData();
  const PlaylistItems = data?.filter(obj=>obj.PlaylistId===playlistId)
  return {data:PlaylistItems? PlaylistItems[0]:undefined}
}
// export const useCurrPlaylistItems = ()


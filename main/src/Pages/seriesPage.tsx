import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAllPlaylistsData } from '../api/queries'
// import { getPlaylistItems } from '../api/apiCalls'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
import YoutubeEmbed from '../Components/YTComponents/YoutubeEmbed'
import useMediaQuery from '../Hooks/useMediaQuery'
import { mongoPlaylistdata } from '../types/apiResponseTypes'
// import { PlaylistItem } from '../types/interfacesAndTypes'

type LocationState = {
  state:{
      id: string;
  };
}



const SeriesPage = () => {
  let {playlistId} = useParams()
  // const [CurrentRecentPlaylist,setRecentPlaylist] = useState<PlaylistItem>();
  const location = useLocation() as unknown as LocationState;
  const PlaylistVideoId = location?.state?.id 
  const [playlistItems,setPlaylistItems] = useState<mongoPlaylistdata["items"][0][]>([]);
  const [currItemId,setCurrItemId] = useState(PlaylistVideoId);
  const [currTitle,setCurrTitle] = useState("")

  const setPlayListIdHandler =(e:any,id:string,title:string)=>{
    e.preventDefault();
    setCurrItemId(id);
    setCurrTitle(title)
  }
  const {data} = useAllPlaylistsData();
  const navigate = useNavigate()

  useEffect(()=>{
    if(data){
      const playlist = data?.filter(obj=>obj.PlaylistId===playlistId)[0]
      try{
        setPlaylistItems(playlist.items);
        if(PlaylistVideoId===undefined) setCurrItemId(playlist.items[0].snippet.videoId)
        const temmpArray = playlist.items.filter((obj)=>obj.snippet.videoId===currItemId)
        setCurrTitle(temmpArray[0]?.snippet.title)
      }catch(err){
        navigate('*')
      }
    }
    window.scrollTo(0, 0);
  
  },[playlistId,PlaylistVideoId,currItemId,data,navigate])

  const Sm = useMediaQuery("(max-width: 550px)")
  return (
    <div className='grid grid-cols-1 gap-4'>
      <Navbar />
      <main className={Sm?'w-full':'container w-full lg:max-w-6xl md:max-w-4xl mx-auto'}>
          <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-7'>
              <div className={Sm?' container md:col-span-3 lg:col-span-7':'md:col-span-3 lg:col-span-7'}>
                  <p className=' text-xl font-serif'>{currTitle}</p>
              </div>
              <div className='md:col-span-2 lg:col-span-5'>
                  
                  <YoutubeEmbed embedId={currItemId} />
              </div>
              <div className={Sm?'container w-full md:col-span-1 lg:col-span-2 overflow-y-auto h-[31rem]':' md:col-span-1 lg:col-span-2 overflow-y-auto h-[31rem]'}>
                  <div>
                      <p className='p-1 text-xl font-serif'>Meetings in this Series</p>
                  </div>
                  <ul className='grid gap-2'>
                    {playlistItems?.sort((first, second) => { return new Date(first.snippet.publishedAt).getTime() - new Date(second.snippet.publishedAt).getTime()}).map(item=>{
                      const { _id, snippet} = item;
                      const {title, thumbnails, videoId} = snippet;
                      return (
                        <>
                        {item.snippet.title!=="Deleted video"?<div className="p-1" key={_id} >
                            <a className='flex' href="/#" onClick={(e)=>setPlayListIdHandler(e,videoId,title)}>
                                <img className='w-[72px] h-[54px] my-auto' src={thumbnails?.default?.url}  alt="..."/>
                                <p className=' meetingsBoxtext p-1'>{title}</p>
                            </a>
                        </div>:null}
                        </>
                      );
                    })}
                  </ul>
              </div>
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default SeriesPage
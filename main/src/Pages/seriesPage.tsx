import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getPlaylistItems from '../api/getPlaylistItems'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
import YoutubeEmbed from '../Components/YTComponents/YoutubeEmbed'
import { PlaylistItem } from '../types/interfacesAndTypes'

const SeriesPage = () => {
  let {playlistId} = useParams()
  // const [CurrentRecentPlaylist,setRecentPlaylist] = useState<PlaylistItem>();
  
  const [playlistItems,setPlaylistItems] = useState<PlaylistItem[]>([]);
  const [currItemId,setCurrItemId] = useState("");
  const [currTitle,setCurrTitle] = useState("")

  const setPlayListIdHandler =(e:any,id:string,title:string)=>{
    e.preventDefault();
    setCurrItemId(id);
    setCurrTitle(title)
  }


  useEffect(()=>{
    if(playlistId!==undefined){
      getPlaylistItems(playlistId).then(res=>{
        console.log(res)
        setPlaylistItems(res.items)
        setCurrItemId(res.items[0].snippet.resourceId.videoId)
        setCurrTitle(res.items[0].snippet.title)
      })
    } 
    window.scrollTo(0, 0);
  },[playlistId])

  return (
    <div className='grid grid-cols-1 gap-4'>
      <Navbar />
      <main className='container max-w-md  lg:max-w-6xl md:max-w-4xl  mx-auto '>
          <div className='grid gap-4 lg:grid-cols-4'>
              <div className='lg:col-span-4 '>
                  <p className=' text-xl font-serif'>{currTitle}</p>
              </div>
              <div className='lg:col-span-3'>
                  
                  <YoutubeEmbed embedId={currItemId} />
              </div>
              <div className='lg:col-span-1 overflow-y-auto h-[31rem]'>
                  <div>
                      <p className='p-1 text-xl font-serif'>Meetings in this Series</p>
                  </div>
                  <ul className='grid gap-2'>
                    {playlistItems?.map(item=>{
                      const { id, snippet} = item;
                      const {title, thumbnails, resourceId} = snippet;
                      return (
                        <div className="p-1" key={id} >
                            <a className='flex' href="/#" onClick={(e)=>setPlayListIdHandler(e,resourceId.videoId,title)}>
                                <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                                <p className=' meetingsBoxtext p-1'>{title}</p>
                            </a>
                        </div>
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
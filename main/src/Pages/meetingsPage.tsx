import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { YOUTUBE_API_KEY } from '../api/getRecentVideosYT'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox'
import YoutubeEmbed from '../Components/YTComponents/YoutubeEmbed'
import { youtubeSearchType } from '../types/interfacesAndTypes'

const MeetingsPage = () => {
    let {videoId} = useParams()
    let id = ""
    if(videoId!==undefined) id = videoId
    const [videoTitle,setVideoTitle] = useState("");
    
    const [currVideoId, setCurrVideoId] = useState(id);
    const [recentUploadedList,setRecentUploadedList] = useState<youtubeSearchType[]>()
    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();
        const getVideoDetails = async () =>{
            try{
                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`)
                const data = await res.json();
                console.log(data)
                isMounted && setVideoTitle(data.items[0].snippet.title)
            }catch (err){
                console.error(err)
            }
        }
        getVideoDetails();
        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[videoId])
    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();
        const getVideoDetails = async () =>{
            try{
                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${YOUTUBE_API_KEY}`)
                const data = await res.json();
                console.log(data);
                const tempArray:youtubeSearchType[] = data.items
                const newArray = tempArray.filter(obj=>obj.snippet.liveBroadcastContent === "none")
                isMounted && setRecentUploadedList(newArray)
            }catch (err){
                console.error(err)
            }
        }
        getVideoDetails();
        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[])
    console.log(recentUploadedList)

  return (
    <div className='grid grid-cols-1 gap-4'>
        <Navbar />
            <main className='container w-full  lg:max-w-6xl md:max-w-4xl  mx-auto '>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-7'>
                <div className='md:col-span-3 lg:col-span-7'>
                    <p className='text-xl font-serif'>{videoTitle}</p>
                </div>
                <div className='md:col-span-2 lg:col-span-5'>
                    <YoutubeEmbed embedId={currVideoId} />
                </div>
                <div className='md:col-span-1 lg:col-span-2 overflow-y-auto h-[31rem]'>
                    {/* <MiniMeetingsBox/> */}
                    {recentUploadedList?.map(item=>{
                        const {id, snippet} = item;
                        const {videoId} = id;
                        const {title, thumbnails} = snippet;
                        return (
                            <div className='p-1' key={videoId}>
                                <a className='flex' href={"/#"} onClick={(e)=>{
                                    e.preventDefault()
                                    setCurrVideoId(videoId)}}> 
                                    <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                                    <p className=' meetingsBoxtext p-1'>{title}</p>
                                </a>
                            </div>
                        ) 
                    })}
                </div>
            </div>
            
            </main>
        <Footer/>
    </div>
  )
}

export default MeetingsPage
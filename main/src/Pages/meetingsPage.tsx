import React, { useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useRecentVideosList } from '../api/queries'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
// import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox'
import YoutubeEmbed from '../Components/YTComponents/YoutubeEmbed'
import useMediaQuery from '../Hooks/useMediaQuery'

type LocationState = {
    state:{
        title:string
    }
}

const MeetingsPage = () => {
    
    let {videoId} = useParams()
    const location = useLocation() as unknown as LocationState;
    const navigate = useNavigate() 
    const [videoTitle,setVideoTitle]= useState('');
    try{
        const {title} = location.state;
        setVideoTitle(title)
    }catch(err){
        navigate('*')
    }
    
    const {data} = useRecentVideosList();
    const Sm = useMediaQuery("(max-width: 550px)")
    
    

  return (
    <div className='grid grid-cols-1 gap-4'>
        <Navbar />
            <main className={Sm?'w-full':'container w-full lg:max-w-6xl md:max-w-4xl mx-auto'}>
                <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-7'>
                    <div className={Sm?' container md:col-span-3 lg:col-span-7':'md:col-span-3 lg:col-span-7'}>
                        <p className='text-xl font-serif'>{videoTitle}</p>
                    </div>
                    <div className='md:col-span-2 lg:col-span-5'>
                        <YoutubeEmbed embedId={videoId? videoId:''} />
                    </div>
                    <div className={Sm?'container w-full md:col-span-1 lg:col-span-2 overflow-y-auto h-[36rem]':' md:col-span-1 lg:col-span-2 overflow-y-auto h-[36rem]'}>
                        {/* <MiniMeetingsBox/> */}
                        {data?.map(item=>{
                            const {videoId, snippet} = item;
                            // const {videoId} = id;
                            const {title, thumbnails} = snippet;
                            return (
                                <div className='p-1' key={videoId}>
                                    <Link to={`/meetings/${videoId}`} className='flex'>
                                        <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                                        <p className=' meetingsBoxtext p-1'>{title}</p>
                                    </Link>
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
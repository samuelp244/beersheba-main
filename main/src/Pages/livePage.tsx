import React from 'react'
import { useLiveVideosList } from '../api/queries'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox'
import RecentVideo from '../Components/YTComponents/RecentVideo'
import YoutubeEmbed from '../Components/YTComponents/YoutubeEmbed'
import useMediaQuery from '../Hooks/useMediaQuery'

const LivePage = () => {
    const Sm = useMediaQuery("(max-width: 550px)")
    const {data} = useLiveVideosList()
  return (
    <div className='grid grid-cols-1 gap-4'>
        <Navbar/>
        <main className={Sm?'w-full':'container w-full lg:max-w-6xl md:max-w-4xl mx-auto'}>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-7'>
                {data!==undefined && data.length!==0 ? <>
                    <div className={Sm?' container md:col-span-3 lg:col-span-7':'md:col-span-3 lg:col-span-7'}>
                        <p className='text-xl font-serif'>{data[0].snippet.title}</p>
                    </div>
                    <div className='md:col-span-2 lg:col-span-5'>
                        <YoutubeEmbed embedId={data[0].videoId} />
                    </div>
                    
                </>:<RecentVideo/>}
                <div className={Sm?'container w-full md:col-span-1 lg:col-span-2 overflow-y-auto h-[36rem]':' md:col-span-1 lg:col-span-2 overflow-y-auto h-[36rem]'}>
                        <MiniMeetingsBox/>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default LivePage
import React, { useEffect, useState } from 'react'
import { getrecentList, YOUTUBE_API_KEY } from '../../api/getRecentVideosYT'
import { PlaylistItem, youtubeSearchType } from '../../types/interfacesAndTypes'


const MiniMeetingsBox = () => {
    // console.log(process.env)
    // const [recentdata,setRecentData]= useState<PlaylistItem[]>([])
    const [recentVideosList,setRecentVideosList] = useState<youtubeSearchType[]>()
    const [upcomingVideosList,setUpcomingVideosList] = useState<youtubeSearchType[]>()

    // useEffect(()=>{
    //     const params = {
    //         nextButtonToken:null,
    //         prevButtonToken:null
    //     }
    //     getrecentList(params).then(res=>{
    //         // console.log(res)
    //         setRecentData(res.items.slice(0,3));
    //     })
    // },[])

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
                isMounted && setRecentVideosList(newArray.slice(0,3))
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

    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();
        const getVideoDetails = async () =>{
            try{
                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjm1A-rBB_6nbP-fuqyIrow&eventType=none&maxResults=30&order=date&type=video&key=${YOUTUBE_API_KEY}`)
                const data = await res.json();
                console.log(data);
                const tempArray:youtubeSearchType[] = data.items
                const newArray = tempArray.filter(obj=>obj.snippet.liveBroadcastContent === "upcoming")
                isMounted && setUpcomingVideosList(newArray.slice(0,3))
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

  return (
    <div className='container rounded-lg shadow-lg'>
        <nav className='pt-2'>
            <div className="nav nav-tabs flex justify-between" id="nav-tab" role="tablist">
                <button className="nav-link active px-2 xl:px-3" id="nav-recent-tab" data-bs-toggle="tab" data-bs-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="true">Recent</button>
                <button className="nav-link px-2 xl:px-3" id="nav-live-tab" data-bs-toggle="tab" data-bs-target="#nav-live" type="button" role="tab" aria-controls="nav-live" aria-selected="false">Live</button>
                <button className="nav-link px-2 xl:p-3" id="nav-upcoming-tab" data-bs-toggle="tab" data-bs-target="#nav-upcoming" type="button" role="tab" aria-controls="nav-upcoming" aria-selected="false">Upcoming</button>

            </div>
        </nav>
            <div className="tab-content pb-3" id="nav-tabContent">
                <div className="tab-pane fade show active " id="nav-recent" role="tabpanel" aria-labelledby="nav-recent-tab" tabIndex={0}>
                    <h5 className='py-2 font-bold' >Recent Meetings</h5>
                    <ul className='flex flex-col'>
                        {recentVideosList? recentVideosList.map(item=>{
                        const {id, snippet} = item;
                        const {videoId} = id;
                        const {title, thumbnails} = snippet;
                        return (
                            <div className='p-1' key={videoId}>
                                <a className='flex' href={`/meetings/${videoId}`}> 
                                    <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                                    <p className=' meetingsBoxtext p-1'>{title}</p>
                                </a>
                            </div>
                        ) 
                    }):<div>
                         <h5 className=''>No Recent Videos</h5>
                        </div>}
                    </ul>
                </div>
                <div className="tab-pane fade" id="nav-live" role="tabpanel" aria-labelledby="nav-live-tab" tabIndex={0}>
                    <h5 className=''>No Live Videos</h5>
                    
                </div>
                
                <div className="tab-pane fade" id="nav-upcoming" role="tabpanel" aria-labelledby="nav-upcoming-tab" tabIndex={0}>
                    <h5 className='py-2 font-bold'>Upcoming Meetings</h5>
                    <ul>
                    {upcomingVideosList? upcomingVideosList.map(item=>{
                        const {id, snippet} = item;
                        const {videoId} = id;
                        const {title, thumbnails} = snippet;
                        return (
                            <div className='p-1' key={videoId}>
                                <a className='flex' href={`/meetings/${videoId}`}> 
                                    <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                                    <p className=' meetingsBoxtext p-1'>{title}</p>
                                </a>
                            </div>
                        ) 
                    }):<div>
                         <h5 className=''>No Upcoming Videos</h5>
                        </div>}
                    </ul>
                </div>
            
            </div>
    </div>
  )
}

export default MiniMeetingsBox
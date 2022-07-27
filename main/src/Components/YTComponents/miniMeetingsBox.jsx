import React, { useEffect, useState } from 'react'
import { getrecentList } from '../../api/getRecentVideosYT'


const MiniMeetingsBox = () => {
    // console.log(process.env)
    const [recentdata,setRecentData]= useState([])


    useEffect(()=>{
        const params = {
            nextButtonToken:null,
            prevButtonToken:null
        }
        getrecentList(params).then(res=>{
            // console.log(res)
            setRecentData(res.items.slice(0,3));
        })
    },[])

  return (
    <div className='container shadow-2xl '>
        <nav className='pt-2'>
            <div className="nav nav-tabs flex justify-between" id="nav-tab" role="tablist">
                <button className="nav-link active " id="nav-recent-tab" data-bs-toggle="tab" data-bs-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="true">Recent</button>
                <button className="nav-link " id="nav-live-tab" data-bs-toggle="tab" data-bs-target="#nav-live" type="button" role="tab" aria-controls="nav-live" aria-selected="false">Live</button>
                <button className="nav-link p-0" id="nav-upcoming-tab" data-bs-toggle="tab" data-bs-target="#nav-upcoming" type="button" role="tab" aria-controls="nav-upcoming" aria-selected="false">Upcoming</button>

            </div>
        </nav>
            <div className="tab-content pb-2" id="nav-tabContent">
                <div className="tab-pane fade show active " id="nav-recent" role="tabpanel" aria-labelledby="nav-recent-tab" tabIndex="0">
                    <h5 className='py-2 font-bold' >Recent Meetings</h5>
                    <ul className='flex flex-col'>
                        {
                            recentdata.map(item=>{
                                const {id, snippet={}} = item;
                                const {title, thumbnails, resourceId} = snippet;
                                
                                return(
                                    <div className="p-1" key={id} >
                                        <a className='flex' href={`http://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
                                            <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                                            <p className=' meetingsBoxtext p-1'>{title}</p>
                                        </a>
                                    </div>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="tab-pane fade" id="nav-live" role="tabpanel" aria-labelledby="nav-live-tab" tabIndex="0">
                    <h5 className=''>No Live Videos</h5>
                </div>
                
                <div className="tab-pane fade" id="nav-upcoming" role="tabpanel" aria-labelledby="nav-upcoming-tab" tabIndex="0">
                    <h5 className=''>No Upcoming Videos</h5>
                </div>
            
            </div>
    </div>
  )
}

export default MiniMeetingsBox
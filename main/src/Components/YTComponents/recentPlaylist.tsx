import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import getAllPlaylistData from '../../api/getAllPlaylistData'
import getPlaylistItems from '../../api/getPlaylistItems';
import { PlaylistItem } from '../../types/interfacesAndTypes';
import {IoIosArrowDropright} from "react-icons/io"
// import { ImPlus } from "react-icons/im";
const RecentPlaylist = () => {
    const [recentPlaylist,setRecentPlaylist] = useState<PlaylistItem>();
    const [playlistItems,setPlaylistItems] = useState<PlaylistItem[]>([]);

    const navigate = useNavigate();
    
    useEffect(()=>{
        getAllPlaylistData().then(res=>{
            console.log(res)
            setRecentPlaylist(res.items[0]);
            // if (recentPlaylist!==undefined){
            //     // getPlaylistItems(recentPlaylist?.id).then(res=>{
            //     //     setPlaylistItems(res.items.slice(0,6));
            //     //     // console.log(res)
            //     // })
            // }
            getPlaylistItems(res.items[0].id).then(res=>{
                console.log(res)
                setPlaylistItems(res.items.slice(0,6));
                // console.log(res)
            })
        })
    },[])
    console.log(playlistItems)


    const navigateToSeriesPage = (e:any,videoId:string)=>{
        e.preventDefault();
        navigate(`/series/${recentPlaylist?.id}`,{
            state:{
                id:videoId
            }
        })
    }

  return (
    <div className=' rounded-lg shadow-lg pt-3 pb-2 px-3 grid gap-3 bg-white'>
        <div>
            <h1 className='text-lg font-bold'>Recent Sermon</h1>
        </div>
        <div >
            <h1 className='text-xl mb-4 font-medium '>{recentPlaylist?.snippet?.title}</h1>
            <div className='grid grid-cols-2 gap-3'>
                {
                    playlistItems.map(i=>{
                        const {id, snippet} = i;
                        const {title, resourceId} = snippet;
                        return (
                            <div className='' key={id}>
                                <a href="/#" onClick={(e)=>navigateToSeriesPage(e,resourceId.videoId)} target="_blank" rel="noopener noreferrer" >
                                    <p className=' truncate '>{title}</p>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
        {/* <div className='flex justify-end'>
                <Link to={`/series/${recentPlaylist?.id}`}><button className='text-sm font-semibold font-sans border-blue-500 text-blue-500 px-2  border-2 rounded-md'>More</button></Link>
        </div> */}
        <div className='flex justify-end'>
            <Link to={`/series/${recentPlaylist?.id}`}><IoIosArrowDropright size={"30px"} color={"rgb(59 130 246)"} /> </Link>
        </div>
    </div>
  )
}

export default RecentPlaylist
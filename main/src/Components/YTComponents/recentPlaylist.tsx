import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import getAllPlaylistData from '../../api/getAllPlaylistData'
import getPlaylistItems from '../../api/getPlaylistItems';
import { PlaylistItem } from '../../types/interfacesAndTypes';
// import { ImPlus } from "react-icons/im";
const RecentPlaylist = () => {
    const [recentPlaylist,setRecentPlaylist] = useState<PlaylistItem>();
    const [playlistItems,setPlaylistItems] = useState<PlaylistItem[]>([]);

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
    // https://www.youtube.com/playlist?list=
    // console.log(recentPlaylist)
  return (
    <div className=' rounded-lg shadow-lg p-3 grid gap-3'>
        <div>
            <h1 className='text-lg font-semibold'>Recent Sermon</h1>
        </div>
        <div >
            <h1 className='text-xl mb-4 font-bold'>{recentPlaylist?.snippet?.title}</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    playlistItems.map(i=>{
                        const {id, snippet} = i;
                        const {title, resourceId} = snippet;
                        return (
                            <div className='' key={id}>
                                <a href={`http://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noopener noreferrer" >
                                    <p className=' truncate'>{title}</p>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
        <div className='flex justify-end'>
                <Link to={`/series/${recentPlaylist?.id}`}><button className='text-sm font-semibold font-sans border-gray-400 border-2'>More</button></Link>
            </div>
    </div>
  )
}

export default RecentPlaylist
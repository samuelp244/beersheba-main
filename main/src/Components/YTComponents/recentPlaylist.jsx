import React, { useEffect, useState } from 'react'
import getAllPlaylistData from '../../api/getAllPlaylistData'
import getPlaylistItems from '../../api/getPlaylistItems';

const RecentPlaylist = () => {
    const [recentPlaylist,setRecentPlaylist] = useState({});
    const [playlistItems,setPlaylistItems] = useState([]);
    useEffect(()=>{
        getAllPlaylistData().then(res=>{
            setRecentPlaylist(res[0]);
            
            getPlaylistItems(res[0].id).then(res=>{
                setPlaylistItems(res.items);
                // console.log(res)
            })
        })
        
        
    },[])
    
    // https://www.youtube.com/playlist?list=
    // console.log(recentPlaylist)
  return (
    <div className='rounded shadow-lg p-3 grid gap-3'>
        <div>
            <h1>Recent Sermon</h1>
        </div>
        <div>
            <h1>{recentPlaylist?.snippet?.title}</h1>
            <div className='grid grid-cols-2'>
                {
                    playlistItems.map(i=>{
                        const {id, snippet={}} = i;
                        const {title, resourceId} = snippet;
                        return (
                            <div key={id}>
                                <a href={`http://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noopener noreferrer" >
                                    <p className=' text-xs truncate'>{title}</p>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default RecentPlaylist
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import getAllPlaylistData from '../../api/getAllPlaylistData';
import { PlaylistItem } from '../../types/interfacesAndTypes';

const SeriesList = () => {
    const [ totalPlaylists,setTotalPlaylists] = useState("");
    const [playlistItems,setPlaylistItems] = useState<PlaylistItem[]>([])
    
    useEffect(()=>{
        getAllPlaylistData().then(res=>{
            setTotalPlaylists(res.pageInfo.totalResults)
            setPlaylistItems(res.items);
        })
    },[])

    return (
        <div className='  '>
                <div className=' px-3'>
                    <p>Results 1 - {totalPlaylists} of {totalPlaylists}</p>
                </div>
                <ul className='grid gap-3 pt-3'>
                {
                    playlistItems?.map(item=>{
                        const {id, snippet} = item;
                        const {title} = snippet;
                        return (
                            <div className=' border-b px-4 pb-3' key={id}>
                                {/* <a href={`https://www.youtube.com/playlist?list=${id}`} target="_blank" rel="noopener noreferrer" >
                                    <p className=' '>{title}</p>

                                </a> */}
                                <Link to={`/series/${id}`} target="_blank" rel="noopener noreferrer">
                                    <p className=' '>{title}</p>
                                </Link>
                            </div>
                        )
                    })
                }
                </ul>
        </div>
    )
}

export default SeriesList
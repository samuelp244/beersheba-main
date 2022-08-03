import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import getAllPlaylistData from '../../api/getAllPlaylistData';
import { PlaylistItem } from '../../types/interfacesAndTypes';

const SeriesList = () => {
    const [ totalPlaylists,setTotalPlaylists] = useState("");
    const [playlistItems,setPlaylistItems] = useState<PlaylistItem[]>([])
    
    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();
        const getPlaylists = async()=>{
            try{
                const res = await getAllPlaylistData()
                isMounted && setTotalPlaylists(res.pageInfo.totalResults)
                isMounted && setPlaylistItems(res.items);
            } catch (err){
                console.error(err);
            }
        }
        getPlaylists();
        return ()=>{
            isMounted = false;
            controller.abort();
        }
        // getAllPlaylistData().then(res=>{
        //     setTotalPlaylists(res.pageInfo.totalResults)
        //     setPlaylistItems(res.items);
        // })
    },[])

    return (
        <>
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
                                <div className=''>
                                    <Link to={`/series/${id}`}>
                                        <p className=' '>{title}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                </ul>
                <div className="clearfix"></div>
        </>
    )
}

export default SeriesList
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import getAllPlaylistData from '../../api/getAllPlaylistData';
import { PlaylistData } from '../../types/interfacesAndTypes';

const AllPlaylistBox = () => {
    const [AllPlaylistData,setAllPlaylistData] = useState<PlaylistData[]>([]);

    useEffect(()=>{
        getAllPlaylistData().then(res=>{
            console.log(res)
            setAllPlaylistData(res.items.slice(0,6))
        })
    },[])
    
  return (
    <div className=' rounded-lg shadow-lg p-3 grid gap-3'>
        <div >
            <h1 className='text-lg font-semibold'>Sermon Series</h1>
        </div>
        <div >
            <div className='grid grid-cols-2 gap-4'>
                {
                    AllPlaylistData?.map(item=>{
                        const {id, snippet} = item;
                        const {title} = snippet;
                        return (
                            <div className='' key={id}>
                                <a href="/#" target="_blank" rel="noopener noreferrer" >
                                    <p className=' '>{title}</p>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex justify-end'>
                <Link to="/series"><button className='text-sm font-semibold font-sans p-1 mt-3 px-2 mx-2 border-gray-400 border-2'>More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default AllPlaylistBox
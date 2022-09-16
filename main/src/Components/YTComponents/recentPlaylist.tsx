import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowDropright} from "react-icons/io"
import RecentPlaylistItemsList from '../../api/QueryComponents/recentPlaylistItemsList';
import { useAllPlaylistsData } from '../../api/queries';
import { mongoPlaylistdata } from '../../types/apiResponseTypes';

const RecentPlaylist = () => {
    const { data } = useAllPlaylistsData()
    const [currentData,setCurrentData] = useState<mongoPlaylistdata>()
    useEffect(()=>{
        if(data!==undefined){
            for(let i=0;i<data?.length;i++){
                if (data[i].items[0].snippet.title!=="Private video") {
                    setCurrentData(data[i]);
                    break;
                }
            }
        }
    },[data])
    

  return (
    <div className=' rounded-lg shadow-lg pt-3 pb-2 px-3 grid gap-3 bg-white'>
        <div>
            <h1 className='text-lg font-bold'>Recent Sermon</h1>
        </div>
        <div >
            <h1 className='text-lg mb-4 font-medium '>{currentData? currentData.PlaylistTitle:null}</h1>
            {data?<RecentPlaylistItemsList playlistId={currentData? currentData.PlaylistId:''} />:null}
        </div>
        <div className='flex justify-end'>
            <Link to={`/series/${currentData? currentData.PlaylistId:''}`}><IoIosArrowDropright size={"30px"} color={"rgb(59 130 246)"} /> </Link>
        </div>
    </div>
  )
}

export default RecentPlaylist
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { usePlaylistItems } from '../queries';
import {AiOutlinePlayCircle} from 'react-icons/ai'
interface RecentPlaylistItemsListProps{
    playlistId:string
}

const RecentPlaylistItemsList = (props:RecentPlaylistItemsListProps) => {

    const navigate = useNavigate();

    const { data } = usePlaylistItems(props.playlistId)

    const navigateToSeriesPage = (e:any,videoId:string)=>{
        e.preventDefault();
        navigate(`/series/${props.playlistId}`,{
            state:{
                id:videoId
            }
        })
    }

  return (
    <div className='grid grid-cols-2 gap-3'>
    {
        data?.items.sort((first, second) => { return new Date(first.snippet.publishedAt).getTime() - new Date(second.snippet.publishedAt).getTime()}).slice(0,6).map(i=>{
            const {_id, snippet} = i;
            const {title, videoId} = snippet;
            return (
                <div className='' key={_id}>
                    
                    <a href="/#" className='flex' onClick={(e)=>navigateToSeriesPage(e,videoId)} target="_blank" rel="noopener noreferrer" >
                        <span className='pt-1 pr-1'><AiOutlinePlayCircle size={"12px"}  /></span>
                        <p className=' truncate '>{title}</p>
                    </a>
                </div>
            );
        })
    }
    </div>
  )
}

export default RecentPlaylistItemsList
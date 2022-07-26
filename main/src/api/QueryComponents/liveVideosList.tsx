import React from 'react'
import { Link } from 'react-router-dom'
import { useLiveVideosList } from '../queries'

const LiveVideosList = () => {
    const {data} = useLiveVideosList()
    // console.log(data)
  return (
    <>
    <ul>
        {data?.length!==0? data?.slice(0,3)?.map(item=>{
            const {videoId, snippet} = item;
            // const {videoId} = id;
            const {title, thumbnails} = snippet;
            return (
                <div className='p-1' key={videoId}>
                    <Link className='flex' to={`/live`}> 
                        <img className='w-[72px] h-[54px] my-auto' src={thumbnails.default.url}  alt="..."/>
                        <p className=' meetingsBoxtext p-1'>{title}</p>
                    </Link>
                </div>
            ) 
        }):<div className='flex justify-center'>
            <h5 className='text-sm py-2'>No Live Videos</h5>
            </div>}
    </ul>
</>
  )
}

export default LiveVideosList
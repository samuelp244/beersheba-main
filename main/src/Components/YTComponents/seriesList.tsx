import React from 'react'
import { Link } from 'react-router-dom';
import { useAllPlaylistsData } from '../../api/queries';

const SeriesList = () => {
    const { data } = useAllPlaylistsData()

    return (
        <div className=' p-3 rounded-[10px]  grid gap-3 bg-white'>
                <div className=' px-3'>
                    <p className=' text-sm  '>Results 1 - {data?.length} of {data?.length}</p>
                </div>
                <ul className='grid gap-3 pt-3'>
                {
                    data?.map(item=>{
                        const {PlaylistId,PlaylistTitle} = item;
                        return (
                            <div className=' border-b px-4 pb-3' key={PlaylistId}>
                                <div className=''>
                                    <Link to={`/series/${PlaylistId}`}>
                                        <p className=' '>{PlaylistTitle}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                </ul>
                <div className="clearfix"></div>
        </div>
    )
}

export default SeriesList
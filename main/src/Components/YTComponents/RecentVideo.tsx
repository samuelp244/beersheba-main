import React from 'react'
import { useRecentVideosList } from '../../api/queries'
import useMediaQuery from '../../Hooks/useMediaQuery'
import YoutubeEmbed from './YoutubeEmbed'

const RecentVideo = () => {
    const {data} = useRecentVideosList()
    const Sm = useMediaQuery("(max-width: 550px)")
  return (
    <>
        {data?
        <>
            <div className={Sm?' container md:col-span-3 lg:col-span-7':'md:col-span-3 lg:col-span-7 grid grid-cols-1 gap-2'}>
                <div className=' p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'>
                <span className="font-medium">Alert!</span> No Live Sermon Happening right now. Please tune in on Sunday, Tuesday and Friday. Now showing our recent Sermon
                </div>
                <p className='text-xl font-serif'>{data[0].snippet.title}</p>
            </div>
            <div className='md:col-span-2 lg:col-span-5'>
                <YoutubeEmbed embedId={data[0].videoId} />
            </div>
        </>
        :null}
    </>
  )
}

export default RecentVideo
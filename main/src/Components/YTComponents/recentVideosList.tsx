import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/apiCalls'
// import { getAllVideosPageData, YOUTUBE_API_KEY } from '../../api/apiCalls'
import { useAllVideosList } from '../../api/queries'
import { AllVideosListDataType } from '../../types/apiResponseTypes'
// import { useAllVideosList } from '../../api/queries'
import { PlaylistItem } from '../../types/interfacesAndTypes'

const RecentVideosList = () => {
    const [playlistData,setPlaylistData] = useState<PlaylistItem[]>([])
    const [nextPageid,setNextPageId] = useState<string>()
    const [prevPageid,setPrevPageId] = useState<string>()
    const [totalResults,setTotalResults] = useState(0);
    const [fromResults,setFromResults] = useState(1);
    const [toResults,setToResults] = useState(30);

    const [showPrev,setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const {data} = useAllVideosList();
    // console.log(prevPageid)

    useEffect(()=>{
        if(data!==undefined){
            setNextPageId(data?.nextPageToken)
            setPlaylistData(data.items.sort((first, second) => { return new Date(second.snippet.publishedAt).getTime() - new Date(first.snippet.publishedAt).getTime()}));
            setTotalResults(data?.pageInfo?.totalResults)
            setFromResults(1);
            setToResults(30);
        }
    },[data])
    
    const prevButtonHandler = async ()=>{
        // console.log('hi')
        // console.log(prevPageid)
        if(prevPageid){
            const res:AllVideosListDataType = await axios.get(`${BASE_URL}/api/v1/getAllData?prevPageToken=${prevPageid}`)
            .then(res=>res.data)
            // console.log(res)
           
            if(playlistData.length<30){
                setFromResults(fromResults-30)
                setToResults(toResults-(totalResults%100))
                
                // console.log(res)
                setNextPageId(res.nextPageToken)
                setPrevPageId(res.prevPageToken)
                setPlaylistData(res.items.sort((first, second) => { return new Date(second.snippet.publishedAt).getTime() - new Date(first.snippet.publishedAt).getTime()}));
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
                
                window.scrollTo(0, 0);
            }else{
                setNextPageId(res.nextPageToken)
                setPrevPageId(res.prevPageToken)
                setFromResults(fromResults-30);
                setToResults(toResults-30)
                setPlaylistData(res.items.sort((first, second) => { return new Date(second.snippet.publishedAt).getTime() - new Date(first.snippet.publishedAt).getTime()}));
                // console.log(res.items)
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
                
                window.scrollTo(0, 0);
            }
        }
        
    }


    const nextButtonHandler = async ()=>{
        console.log(nextPageid)
            if(nextPageid){
                const res:AllVideosListDataType = await axios.get(`${BASE_URL}/api/v1/getAllData?nextPageToken=${nextPageid}`)
                .then(res=>res.data)
             
                if(res.nextPageToken){
                    setNextPageId(res.nextPageToken)
                    setFromResults(fromResults+30)
                    setToResults(toResults+30)
                }
                setPlaylistData(res.items.sort((first, second) => { return new Date(second.snippet.publishedAt).getTime() - new Date(first.snippet.publishedAt).getTime()}));
                setPrevPageId(res.prevPageToken)
                if(res.items.length<30){
                    setFromResults(toResults+1)
                    setToResults(totalResults)
                }
                if(res.nextPageToken){
                    setShowNext(true)
                }else{
                    setShowNext(false)
                }
                if(res.prevPageToken){
                    setShowPrev(true)
                }else{
                    setShowPrev(false)
                }
                // console.log(res)
                
                window.scrollTo(0, 0);
            }
            
        }

    // console.log(data)
    return (
        
        <div className=' p-3 rounded-[10px]  grid gap-3 bg-white'>
            <div className=' px-3'>
                <p className=' text-sm  '>Results {fromResults} - {toResults} of {totalResults}</p>
            </div>
            <ul className='  border-slate-100 rounded-[10px] divide-y'>
            {
                playlistData?.map(item=>{
                    const { _id, snippet} = item;
                    const {title, resourceId} = snippet;
                    return (
                        <div className="   px-3 pb-2 " key={_id} >
                            <div className='' >
                                <Link to={`/meetings/${resourceId?.videoId}`} state={{title:title}}><p className='mb-0 py-3'>{title}</p></Link>
                            </div>
                            
                        </div>
                        
                    );
                })
            }
            </ul>
            <div className=' px-3'>
                {showPrev ? <button className="border-2 px-2 p-1 font-medium text-sm  text-white bg-blue-500 rounded-md  float-left" type="button" onClick={()=>{prevButtonHandler()}}>Prev</button> :null}
                {showNext ? <button className="border-2 px-2 p-1 font-medium text-sm  text-white bg-blue-500 rounded-md float-right" type="button" onClick={()=>{nextButtonHandler()}}>Next</button> :null}
            </div>
            <div className="clearfix"></div>
        </ div>
    );
}

export default RecentVideosList
import { SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react'
import Footer from '../Components/HomeComponents/Footer';
import Navbar from '../Components/HomeComponents/Navbar';
import FilterButton from '../Components/YTComponents/FilterButton';
import MeetingsFilter from '../Components/YTComponents/meetingsFilter';
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox';
// import NaToShow from '../Components/YTComponents/NaToShow';
import RecentVideosList from '../Components/YTComponents/recentVideosList';
import SeriesList from '../Components/YTComponents/seriesList';
import useMediaQuery from '../Hooks/useMediaQuery';

interface MeetingsProps{
    CurrSermonType:string
}

const MeetingsPage = (props:MeetingsProps) => {

    const sermonType = ["meetings","series"]; 
    const [meetingsDisplay,setMeetingsDisplay] = useState(props.CurrSermonType);
    // const isSm = useMediaQuery('(min-width: 640px)');
    const isMd = useMediaQuery('(min-width: 768px)');
    const isLg = useMediaQuery('(min-width: 1024px)');

    const handleChange = (event:SelectChangeEvent) => {
        setMeetingsDisplay(event.target.value);

      };
    
    return (
    <>
    <div className='grid grid-cols-1 gap-4'>
    <Navbar />
        <main className='container w-full  lg:max-w-6xl md:max-w-4xl  mx-auto '>
        <div className='grid place-content-center gap-4  md:grid-cols-3 lg:grid-cols-4 '>
            <div className='grid md:grid-cols-5 gap-4  col-span-3' >
                {isMd?<div className='col-span-1'>
                    <MeetingsFilter 
                        meetingsDisplay = {meetingsDisplay}
                        setMeetingsDisplay = {setMeetingsDisplay}
                        sermonType = {sermonType}
                    />
                </div>:null}
                
                <div className='sm:col-span-4' >
                    <div className='border shadow py-3  bg-white'>
                        {isMd?null:<div className='mx-4 '>
                            <FilterButton
                            meetingsDisplay = {meetingsDisplay}
                            handleChange = {handleChange}
                            />
                        </div>}
                        {meetingsDisplay==="meetings"?<RecentVideosList />:<SeriesList/>}
                        {/* {meetingsDisplay==="series"?<SeriesList/>:<NaToShow/>} */}
                        
                    </div>
                </div>
            </div>
            {isLg?<div className='md:col-span-1'>
                <MiniMeetingsBox />

            </div>:null}
            
        </div>
        </main>
      <Footer />
    </div>
    </>
    );
}

export default MeetingsPage
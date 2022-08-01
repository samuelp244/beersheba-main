import React, { useState } from 'react'
import Footer from '../Components/HomeComponents/Footer';
import Navbar from '../Components/HomeComponents/Navbar';
import MeetingsFilter from '../Components/YTComponents/meetingsFilter';
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox';
import RecentVideosList from '../Components/YTComponents/recentVideosList';
import useMediaQuery from '../Hooks/useMediaQuery';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MeetingsPage = () => {

    const sermonType = ["meetings","series"]; 
    const [meetingsDisplay,setMeetingsDisplay] = useState("meetings");
    // const isSm = useMediaQuery('(min-width: 640px)');
    const isMd = useMediaQuery('(min-width: 768px)');
    const isLg = useMediaQuery('(min-width: 1024px)');

    const handleChange = (event:SelectChangeEvent) => {
        setMeetingsDisplay(event.target.value);
      };
    return (
        <div className='grid grid-cols-1 gap-4'>
            <Navbar />
            <div className='container w-full xl:max-w-7xl lg:max-w-6xl md:max-w-4xl  mx-auto '>
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
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                        value={meetingsDisplay}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="meetings">meetings</MenuItem>
                                            <MenuItem value="series">series</MenuItem>
                                        </Select>
                                        <FormHelperText>Without label</FormHelperText>
                                    </FormControl>
                                </div>
                                <RecentVideosList />
                            </div>
                        </div>
                    </div>
                    {isLg?<div className='md:col-span-1'>
                        <MiniMeetingsBox />
                    </div>:null}
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MeetingsPage
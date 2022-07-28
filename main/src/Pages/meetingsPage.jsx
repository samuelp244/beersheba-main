import React from 'react'
import Footer from '../Components/HomeComponents/Footer';
import Navbar from '../Components/HomeComponents/Navbar';
import MeetingsFilter from '../Components/YTComponents/meetingsFilter';
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox';
import RecentVideosList from '../Components/YTComponents/recentVideosList';

const MeetingsPage = () => {

    return (
        <div className='grid grid-cols-1 gap-4'>
            <Navbar />
            <div className='container w-full xl:max-w-7xl lg:max-w-6xl md:max-w-4xl  mx-auto '>
                <div className='grid place-content-center gap-4 md:grid-cols-3 xl:grid-cols-4 '>
                    <div className='grid grid-cols-5 gap-4 col-span-3' >
                        <div className='col-span-1'>
                            <MeetingsFilter />
                        </div>
                        <div className='col-span-4' >
                            <RecentVideosList />
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <MiniMeetingsBox />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MeetingsPage
import React from 'react'
import AddressBox from '../Components/HomeComponents/AddressBox'
import BeershebaCarousel from '../Components/HomeComponents/Carousel'
import Footer from '../Components/HomeComponents/Footer'
import Navbar from '../Components/HomeComponents/Navbar'
import TimingsBox from '../Components/HomeComponents/TimingsBox'
import AllPlaylistBox from '../Components/YTComponents/AllPlaylistBox'
import MiniMeetingsBox from '../Components/YTComponents/miniMeetingsBox'
import RecentPlaylist from '../Components/YTComponents/recentPlaylist'

const Main = () => {
  return (
    <>
    <div className='grid grid-cols-1 gap-4'>
      <Navbar />
        <main className='container w-full  lg:max-w-6xl md:max-w-4xl  mx-auto '>
          <div className=''>
            <BeershebaCarousel/>
          </div>
          
          <div className='grid place-content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {/* left column */}
            {/* grid sm:grid-cols-2 lg:col-span-2 xl:col-span-3 */}
              <div className='grid gap-4'>
                  <AddressBox/>
                  <TimingsBox/>
              </div>
              <div className='grid gap-4 xl:col-span-2'>
                  <RecentPlaylist />
                  <AllPlaylistBox />
              </div>
              {/* right column */}
              <div className=''>
                  <MiniMeetingsBox />
                  <div>

                  </div>
              </div>
          </div>
        </main>
      <Footer />
    </div>
    </>
  )
}

export default Main
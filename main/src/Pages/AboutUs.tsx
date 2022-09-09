import React, { useEffect } from 'react'
// import Footer from '../Components/HomeComponents/Footer'
// import Navbar from '../Components/HomeComponents/Navbar'
// import UnderConstructionPage from '../Components/HomeComponents/underConstructionPage'
import groupPhoto from "../assets/groupPhoto.JPG";
// import VBS_1990 from "../assets/VBS_1990.jpg"
import founders from "../assets/pic2.jpg"
const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <div className='grid grid-cols-1 gap-4 bg-[#F9F7F7] py-4 mt-2'>
      <main className=' w-full  lg:max-w-6xl md:max-w-4xl  mx-auto flex justify-center '>
        <div className='grid gap-4 max-w-[90%] sm:max-w-[65%] lg:max-w-[60%]'>
          {/* <h1 className='text-center text-5xl'>A Short History</h1> */}
          <h1 className='text-4xl castoro '>Founder Story</h1>
          <p className='text-justify text-sm md:text-base tracking-tighter'>With a great burden for the Lords Ministry few elders of Kakinada and who are co-workers with Bro. Bakht Singh from the early days, started praying Lord to open doors to start Ministry at Kakinada with a motto to serve the lord earnestly in 1983. Lord as shown a clear will when Bro. C.Prabhudas an elder and co-worker of Bro. Bakht Singh from HEBRON Visited Kakinada in 1987, while the elders at Kakinada Bro. Balasundara Rau, Bro. James prayed together with Bro. Prabhudas for a suitable place for worship at Kakinada.</p>
          <div className='flex justify-center '>
            <img src={founders} alt="founders.jpg" className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] '/>
          </div>
          <p className='text-justify text-sm md:text-base tracking-tighter'>A place near Boat club was offered by a local Hindu on rent and when the Brothers prayed on kneels in the sight for Lord's will God has shown his clear will and Bro. Prabhudas prophesied that Lord is going to do miracles at this place.  Immediately a thatched shed was erected to accommodate a 100 people where they can worship and pray with liberty.  On 10th of May 1987 Bro Prabhudas dedicated the place of worship and named the place "BEERSHEBA" House of Worship and Prayer.</p>
          <img src={groupPhoto} alt="groupPhoto.jpg" />
        </div>
      </main>
    </div>
  )
}

export default AboutUs
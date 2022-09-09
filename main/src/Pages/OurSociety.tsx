import React, { useEffect } from 'react'
// import Footer from '../Components/HomeComponents/Footer'
// import Navbar from '../Components/HomeComponents/Navbar'
// import UnderConstructionPage from '../Components/HomeComponents/underConstructionPage'
import image1 from '../assets/members/M.BALASUNDARARAU.jpeg'
import image2 from '../assets/members/M.DAVIDSUDHEER.jpeg' 
import image3 from '../assets/members/M.VENKATARAO.jpeg' 
import image4 from '../assets/members/P.VIDYASAGAR.jpeg' 
import image5 from '../assets/members/M.SUJINIKUMARI.jpeg' 
import image6 from '../assets/members/P.VEERABADHARARAO.jpg'
import image7 from '../assets/members/RATNASINGH.jpeg' 
import image8 from '../assets/members/K.ESTHERKAMALA.jpeg' 
import image9 from '../assets/members/broganes.jpeg' 

// import useMediaQuery from '../Hooks/useMediaQuery'
import SocietyMember from '../Components/HomeComponents/SocietyMember'

const OurSociety = () => {
  // const Sm = useMediaQuery("(max-width: 550px)")
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='grid grid-cols-1 gap-4 py-4'>
    {/* <Navbar/> */}
      <main className={'container w-full lg:max-w-6xl md:max-w-4xl mx-auto '}>
        <div className='grid gap-4'>
          <div className='rounded-[10px] shadow-lg md:p-3 '>
              <div className='grid grid-cols-2 my-4  gap-2 w-10/12 mx-auto'>
                  <div className='flex flex-wrap justify-center'>
                      <img className='w-36 md:w-40 lg:w-48 rounded-full  shadow shadow-blue-900  max-w-full h-auto align-middle border-none' src={image1} alt="balasundaraRao.jpg"/>
                  </div>
                  
                  <div className='flex flex-col justify-center'>
                      <p className=' mb-1 font-semibold text-sm md:text-xl lg:text-3xl '>Bro M. BALASUNDARA RAU</p>
                      <p className=' mt-1 text-xs text-gray-600 md:text-sm lg:text-md'>Honorary President</p>
                  </div>
              </div>
          </div>
          <div className='rounded-[10px] shadow-lg p-3  grid grid-cols-1 gap-2'>
            <div className='md:flex gap-2'>
              <SocietyMember image={image2} name={"Bro M.DAVID SUDHEER KUMAR"} role={"President"}/>
              <SocietyMember image={image4} name={"Bro P.VIDYA SAGAR"} role={"Secretary"}/>
              <SocietyMember image={image3} name={"Bro M.VENKATA RAO"} role={"Treasureray"}/>
            </div>
            <div className='md:flex gap-2'>
              <SocietyMember image={image7} name={"Bro CH. RATNA SINGH"} role={"Member"}/>
              <SocietyMember image={image8} name={"Sis K.ESTHER KAMALA CHARLES"} role={"Member"}/>
              <SocietyMember image={image6} name={"Bro P.VEERABADHARA RAO"} role={"Member"}/>
              <SocietyMember image={image9} name={"Bro V.GANI RAJU CHOWDARY (GIDEION)"} role={"Member"}/>
              <SocietyMember image={image5} name={"Sis M.SUJINI KUMARI"} role={"Member"}/>
            </div>
            
          </div>
        </div>
      </main>
    {/* <Footer/> */}
    </div>
  )
}

export default OurSociety
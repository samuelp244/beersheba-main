import React, { useEffect } from 'react'
// import Footer from '../Components/HomeComponents/Footer'
// import Navbar from '../Components/HomeComponents/Navbar'

const PageNotFound = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    {/* <Navbar/> */}
    <div className="relative h-[90vh] w-full flex items-center justify-center  text-center" >
        <div className="z-50 flex flex-col justify-center items-center text-black w-full h-full gap-2 opacity-60">
            <h1 className="text-6xl">Page Not Found!</h1>
        </div>
    </div>
    {/* <Footer/> */}
    </>
    
  )
}

export default PageNotFound
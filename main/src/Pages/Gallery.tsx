import React from 'react'
import Gallery from "react-grid-gallery";
import data from '../assets/galleryData';
import useMediaQuery from '../Hooks/useMediaQuery';

const ChurchGallery = () => {
  const sm = useMediaQuery("(min-width: 640px)")
  return (
    <div className='grid grid-cols-1 gap-4 py-4'>
    {/* <Navbar/> */}
      <main className={'container w-full lg:max-w-6xl md:max-w-4xl mx-auto flex justify-center'}>
        <div className='max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] grid gap-3 '>
          <h1 className=' text-4xl castoro  text-center'>Gallery</h1>
        
            <Gallery 
              images={data} 
              enableLightbox={true} 
              backdropClosesModal
              margin={5}
              enableImageSelection={false}
              rowHeight={sm?140:120}
          />
        </div>
      
      </main>
    </div>
  )
}

export default ChurchGallery
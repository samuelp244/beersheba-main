import React from 'react'

interface societyMember{
    image:string,
    name:string,
    role:string
}
const SocietyMember = (props:societyMember) => {
  return (
    <div className='grid grid-cols-2 my-3 gap-2 w-10/12 mx-auto md:grid-cols-1'>
        <div className='flex flex-wrap justify-center'>
            <img className='w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shadow rounded-full max-w-full  align-middle border-none' src={props.image} alt="balasundaraRao.jpg"/>
        </div>
        
        <div className='flex flex-col justify-center'>
            <p className='mb-1 font-semibold text-sm md:text-md md:text-center'>{props.name}</p>
            <p className='mt-1 text-gray-600 text-xs md:text-sm md:text-center'>{props.role}</p>
        </div>
    </div>
  )
}

export default SocietyMember
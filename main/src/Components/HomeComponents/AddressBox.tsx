import React from 'react'
import churhDetails from "../../assets/churchParams.json"
import {GrMapLocation} from "react-icons/gr"
import {FaRegEnvelope} from "react-icons/fa";
import {HiOutlinePhone} from "react-icons/hi";
const AddressBox = () => {
    
  return (
    <div className=" rounded-[10px] shadow-lg p-3 grid gap-3 bg-white">
        <div className='flex '>
            {/* <div className=' my-auto mr-2'><GrMapLocation size={"20px"} /></div>             */}
            <h4 className=' font-bold text-xl ' >Contact us</h4>
        </div>
        <div className='grid gap-1'>
            <div className='flex '>
                <div className=' my-auto mr-2 mt-0'><GrMapLocation size={"20px"} /></div>     
                <p className='text-sm'>{churhDetails.filter(x=>x.id===1).map(x=>x.address)}</p>
            </div>
            <div className='flex '>
                <div className=' my-auto mr-2 mt-0'><FaRegEnvelope size={"20px"}/></div>
                
                <p className='text-sm'>beershebakkd@gmail.com</p>
            </div>
            <div className='flex '>
            <div className=' my-auto mr-2 mt-0'> <HiOutlinePhone size={"20px"}/></div>
           
                <p className='text-sm'>+ 91 7799383373</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <a href={churhDetails.filter(x=>x.id===1).map(x=>x.mapsLink)[0]} target="_blank" rel="noopener noreferrer">
                <button className="text-sm font-medium text-white bg-blue-500  rounded-md p-2 px-3  transition duration-500 hover:scale-105 ">GET DIRECTIONS</button>
            </a>
        </div>
    </div>
  )
}

export default AddressBox
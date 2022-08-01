import React from 'react'
import churhDetails from "../../assets/churchParams.json"

const AddressBox = () => {
    
  return (
    <div className=" rounded-lg shadow-lg p-3 grid gap-3">
        <div className='flex justify-start'>
            <h4 className='border-bottom font-bold text-xl ' >Address</h4>
        </div>
        <div>
            <p className='text-sm'>{churhDetails.filter(x=>x.id===1).map(x=>x.address)}</p>
        </div>
        <div className='flex justify-center'>
            <a href={churhDetails.filter(x=>x.id===1).map(x=>x.mapsLink)[0]} target="_blank" rel="noopener noreferrer">
                <button className="text-sm text-blue-500 border-2 rounded-md p-1 border-blue-500">GET DIRECTIONS</button>
            </a>
        </div>
    </div>
  )
}

export default AddressBox
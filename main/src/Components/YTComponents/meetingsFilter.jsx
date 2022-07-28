import React, { useState } from 'react'

const MeetingsFilter = () => {

  const sermonType = ["meetings","series"]; 
  const [meetingsDisplay,setMeetingsDisplay] = useState("meetings");
  // const HandleMeetingsDisplay = (e)=>{
  //   setMeetingsDisplay(e.target.value);
  //   console.log(meetingsDisplay);
  // }
  return (
    <div className=' grid grid-cols-1 border shadow py-3 bg-white'>
        
      <div className='grid'>
          
          {sermonType.map(result=>(
            <div key={result}>
              <input type="radio" value={result} name="sermonType" checked={meetingsDisplay===result} onChange={(e)=>setMeetingsDisplay(e.target.value)} /> {result}
            </div>
          ))}
          
      </div>
      {meetingsDisplay}

    </div>
  )
}

export default MeetingsFilter
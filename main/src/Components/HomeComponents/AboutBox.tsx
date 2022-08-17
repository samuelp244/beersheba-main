import React from 'react'

const AboutBox = () => {
  return (
    <div className='grid grid-cols-1 gap-2 rounded-lg shadow-lg p-3 bg-white'>
      <div>
        <p className='text-lg font-bold'>About Beersheba Chuch,Kakinada</p>
      </div>
        <p className='text-sm'>In 1983, a small group of Kakinada elders who had a heavy burden for the Lord's ministry and had worked alongside Bro. Bakht Singh since their early days began to pray to the Lord for the opening of doors to establish a ministry in Kakinada with the mission statement "serve the Lord passionately." Bro. Prabhudas dedicated the place of worship on May 10th, 1987, and gave it the name "BEERSHEBA" House of Worship and Prayer.</p>    
      <div>

      </div>
      <div className='flex justify-end'>
          <button className=' text-center font-medium text-blue-500 border-2 border-blue-500  rounded-md p-1 px-3  px-auto  transition duration-500 hover:scale-105' >LEARN MORE</button>
      </div>
    </div>
  )
}

export default AboutBox
import React from 'react'

const Banner = () => {
    const img = "https://s3.envato.com/files/462332076/PhilippeDegroote_ID14522_437539_010.jpg"
  return (
    <div className=''>
        <img src={img} className='w-[80%] h-[550px] mx-auto' alt="" />
    </div>
  )
}

export default Banner
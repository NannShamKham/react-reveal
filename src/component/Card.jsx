import React from 'react'
 import { Fade } from 'react-reveal'
const Card = () => {
    const img = "https://s3.envato.com/files/462332076/PhilippeDegroote_ID14522_437539_010.jpg"
  return (
    <Fade bottom cascade>
        <div className="w-full">
            <img src={img} className="w-full h-[200px] " alt="" />
        </div>
        <div className="p-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti eligendi </p>
        </div>
    </Fade>
  )
}

export default Card
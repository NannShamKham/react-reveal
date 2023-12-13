import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <p className='text-2xl'>Logo</p>
<ul className='flex py-3'>
    <li className='px-2 py-1'>Home</li>
    <li className='px-2 py-1'>About</li>
    <li className='px-2 py-1'>Services</li>
    <li className='px-2 py-1'>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar
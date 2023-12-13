import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import Navbar from './component/navbar';
import Banner from './component/Banner';
import Card from './component/card';


const App = () => {
  const [current,setCurrent] = useState('one');
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Zoom>
  <p>Markup that will be revealed on scroll</p>
  </Zoom>
  <div className="flex items-center justify-center">
    <button onClick={()=>setCurrent('one')} className={`text-2xl px-2 py-1 ${current == 'one'?'text-pink-600':'text-pink-300'}`}>One</button>
    <button onClick={()=>setCurrent('two')} className={`text-2xl px-2 py-1 ${current == 'two'?'text-pink-600':'text-pink-300'}`}>Two</button>
  </div>
 {current == 'one' && <div className="grid grid-cols-6 w-[80%] mx-auto gap-4">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>} 
  {current == 'two' && <div className="grid grid-cols-6 w-[80%] mx-auto gap-4">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>} 


    </div>
  )
}

export default App
import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import bgImage from '../../assets/bg.png';

function Home() {

  return (
    <div className='font-centra flex bg-black w-screen h-screen flex-col text-white bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      <p className='text-4xl text-bold'>Hi! I'm Alex</p>
      <p className='text-4xl'>Alex</p>
    </div>
  )
}

export default Home

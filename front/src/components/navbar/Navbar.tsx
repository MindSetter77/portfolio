import { useState } from 'react'


function Navbar() {

  return (
    <div className='text-white flex gap-5 p-6 items-center text-2xl'>
        <p>Logo</p>

        <div className='flex w-[300px] justify-between ml-auto'>
            <p>Home</p>
            <p>Skills</p>
            <p>Projects</p>
        </div>
        

        <div className='border-2 p-3 self-start flex items-center justify-center'>
            <p>Let's connect</p>
        </div>
    </div>
  )
}

export default Navbar

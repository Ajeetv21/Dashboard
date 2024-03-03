import { TextInput } from '@tremor/react'
import React from 'react'


function Navbar() {
  
  return (
    <div id="top" className='relative w-full sm:flex justify-between items-center p-2 bg'>
       <h1 className='font-bold text-gray-300
       '>
        Dashboard
       </h1>
       <div className='py-3'>
       <TextInput   placeholder='Search...'/>
       </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import Sidebar from './Component/Sidebar'
import Navbar from './Component/Navbar'
import LeftColumn from './Component/LeftColumn'
import RightColumn from './Component/RightColumn'

function App() {
  
  return (
    <main className='flex'>
      <Sidebar/>
      <div className='flex flex-col flex-1 relative'>
        <Navbar/>
      
      <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
        <div className='col-span-2'><LeftColumn/></div>
        <div className='w-full'><RightColumn/></div>
      </div></div>
    </main>
  )
}

export default App




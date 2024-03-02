import React from 'react'
import Sidebar from './Component/Sidebar'
import Navbar from './Component/Navbar'

function App() {
  
  return (
    <main className='flex'>
      <Sidebar/>
      <div className='flex flex-col flex-1 relative'>
        <Navbar/>
      </div>
    </main>
  )
}

export default App




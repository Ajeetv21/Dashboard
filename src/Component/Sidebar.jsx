import React from 'react';
import { ArrowUpIcon, AtSymbolIcon, BellIcon, ChartBarIcon, CreditCardIcon, DocumentMagnifyingGlassIcon, HomeIcon, LinkIcon } from '@heroicons/react/24/solid';
function Sidebar() {
  return (
    <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen '>
     <div className='h-20 items-center flex '>
       <HomeIcon width={40} className='text-gray-300 left-3 sm:left-6 fixed'/> 
     </div>
     <div className='fixed left-3 sm:left-6 top-[100px] '>
      <ChartBarIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
      <DocumentMagnifyingGlassIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
      <AtSymbolIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
      <CreditCardIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
      <BellIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
      
     </div>
     <div className='fixed bottom-4 left-3 sm:left-6'>
     <ArrowUpIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
     <LinkIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-3 text-gray-300'/>
     </div>
     
    </div>
  )
}

export default Sidebar

import React from 'react'
/*  flex justify-between  p-4 mb-4 items-center -ml-56 md:ml-0*/
export default function Amounts() {
  return (
    <div className='flex justify-between p-4 mb-4 items-center -ml-56 md:ml-0'>
      <div className='text-xl -m-1'>
        Overview
      </div>
      <div className=' border border-gray-200 cursor-pointer rounded-sm items-center bg-white flex '>
         <button className='p-3'>This Month</button>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    

    </div>
  )
}

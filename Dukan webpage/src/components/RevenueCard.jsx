import React from 'react'

export default function RevenueCard({
    title,
    orderCount,
    amount,
    first,
    date,
    dateTime

}) {
  return ( <div className={first ? "bg-sky-600 rounded-lg shadow-md p-3 text-white-color mx-2 pb-5 " : "bg-white rounded-lg shadow-md mx-2 p-3"}>
     <div className='flex'>
       {title}
       <svg  xmlns="http://www.w3.org/2000/svg" className='w-4 ml-2' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" 
  
  />
</svg>

     </div>
     <div className='flex justify-between'>
      <div className='text-3xl'>
      ₹ {amount}
      </div>
     {  (orderCount ) ? <div className='flex cursor-pointer font-medium underline'>
      
     <div className={first ? 'text-white' : 'text-blue-700'} >
        {orderCount} order(s)
        </div> 
     <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path className='fill-blue-700' strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

 </div>: null }


  </div >
  <div className='bg-sky-800 relative rounded-xl -ml-3 -mr-3 '>
  { date ? (<div className='flex justify-between text-white-color pl-4 pr-7 pb-2 pt-2 mt-4 -ml-2 -mr-4 -mb-5  rounded-md  '>
   <div>
     Next Payout date:
   </div>
   <div>
    {dateTime}
   </div>

  </div>
  ) : null}
   </div>
    </div>
  )
}

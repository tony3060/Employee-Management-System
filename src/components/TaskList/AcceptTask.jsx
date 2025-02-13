/* eslint-disable no-unused-vars */
import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="bg-yellow-400 rounded-2xl shrink-0 h-full w-[25vw] p-5">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold bg-red-600 h-fit w-fit px-3 py-1">
            High
          </h2>
          <h3 className="text-sm ">14 feb 2025</h3>
        </div>
        <h2 className="text-2xl mt-4 font-semibold">{data.title}</h2>
        <p className="mt-3 font-medium">
          {data.description}
        </p>
        <div className='flex justify-between items-center mt-4 px-1'>
            <button className='bg-green-500 px-2 py-2 cursor-pointer active:scale-90 rounded-xl'>Mark As Completed</button>
            <button className='bg-red-500 px-2 py-2 cursor-pointer active:scale-90 rounded-xl'>Mark As Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask

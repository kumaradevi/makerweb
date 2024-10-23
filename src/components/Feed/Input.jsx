import React from 'react'

const Input = () => {
  return (
    <div className='w-[80%] md:w-full mt-5 px-2 py-1 rounded-md flex gap-2 bg-white mx-auto'>
        <input type="text" placeholder='Yael Adamson-Brown share some Progress' className='w-full px-2 py-1 rounded-md border border-gray-500'/>
        <button className='bg-red-700 text-white px-3 py-2'>Post</button>
    </div>
  )
}

export default Input
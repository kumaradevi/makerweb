import React from 'react'
import Settings from '../icons/Settings'

const TaskLists = ({item}) => {
  console.log("tasklist",item)
  return (
   <>
   
   <div className="flex justify-between border border-blue-500 p-2">
            <p>{item}</p>
           <div className="flex gap-2">
           <input type="checkbox" />
          <div className="text-blue-500"> <Settings/></div>
           </div>
        </div>
   </>
  )
}

export default TaskLists
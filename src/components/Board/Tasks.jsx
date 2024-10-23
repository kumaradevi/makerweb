import React, { useState } from "react";
import TaskLists from "./TaskLists";
import RightArrow from "../icons/RightArrow";
import LeftArrow from "../icons/LeftArrow";

const Tasks = () => {
  const[task,setTask]=useState("")
  const[todo,setTodo]=useState([]);

  const handleChange=(e)=>{
    setTask(e.target.value)
  }
  //
  const addActivity=()=>{
    setTodo([...todo,task])
     setTask("")
      
  
   
  }
  console.log("task",task)
  console.log("todo",todo)
  return (
    <>
      <div className="bg-white shadow-sm min-h-[250px] mt-4 p-3 rounded-md">
        <div className="flex justify-between h-[50px] border-b border-gray-200 items-center">
          <h6>Tasks</h6>
          <div className="">
            <input type="text" placeholder="25 To Do" />
            <button>43 Done</button>
          </div>
          <button className="bg-[#5BC0DE] text-white px-3 py-1 rounded-md">
            Filters
          </button>
        </div>
        <div className="mt-6 flex gap-3 justify-center items-center">
            <input type="text" placeholder="Add your next task" className="border border-gray-800 rounded-md px-3 py-1"  value={task} onChange={handleChange} />
            <button className="bg-red-600 text-white px-3 py-1" onClick={addActivity}>Save Task</button>
        </div>
     <div className="mt-8 gap-3 flex flex-col">
      {todo&& todo.map((item,i)=>{
        return(
       <div key={i}> <TaskLists item={item}/></div>)
})}
     
    
     <div className="flex justify-center mt-5">
        <button  className="border px-3 py-2 text-gray-500 flex gap-3 items-center"><LeftArrow/>Previous</button>
        <button  className="border px-3 py-2 text-blue-400 flex gap-3 items-center">Next<RightArrow/></button>
     </div>
     </div>
      </div>
    </>
  );
};

export default Tasks;

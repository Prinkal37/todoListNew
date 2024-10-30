import React from 'react'
import TodoEnv from './TodoEnv'
import './Envelope.css'

const Envelope = ({heading,tasks,setTasks}) => {

  return (
    <div className=' h-[32%] flex flex-col bg-[#B2DFDB] mx-1 rounded-lg'>
      <h2 className='text-xl font-semibold px-2 pt-1'>{heading}</h2> 
      <div className='todos-container h-full w-full flex flex-row items-center overflow-x-scroll overflow-y-hidden space-x-4'>
        {tasks.map((task,index)=>(
          <TodoEnv tasks={tasks} todo={task} index={index} setTasks={setTasks}/>
        ))
        }
      </div>
    </div>
  )
}

export default Envelope;

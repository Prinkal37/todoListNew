import React from 'react';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoEnv = ({tasks,setTasks,todo,index}) => {

    const deleteTask = (index) =>{
        const newTasks = tasks.filter((task,i)=> i !== index)
        setTasks(newTasks)
    }

    const markAsDone = (index) => {
    const newTasks = tasks.map((task, i) => {
        if (i === index) {
        return { ...task, completed: !task.completed };
        }
        return task;
    });

    setTasks(newTasks);
    };
    return (
    <div key={index} className='border border-rose-400 bg-[#E1BEE7] rounded-2xl px-2 py-1 min-w-[200px] max-w-[200px] h-[90%] mx-2 flex flex-col'>
        <div className='h-[20%] text-lg font-semibold overflow-hidden'>{todo.title}</div>
        <div className='h-[60%] '>{todo.description}</div>
        <div className='h-[20%] px-2 text-2xl flex justify-between cursor-pointer'>
            <IoCheckmarkDoneOutline onClick={()=>markAsDone(index)} />
            <RiDeleteBin6Fill onClick={()=>deleteTask(index)} />
        </div>
    </div>
    );
}

export default TodoEnv;

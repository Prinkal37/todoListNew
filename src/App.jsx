import { useEffect, useState } from 'react';
import Envelope from "./components/Envelope";
import Topbar from "./components/Topbar";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Your title',
      description: 'Your description',
      completed: false
    }
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Saving the tasks to local storage whenever the task state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Getting the tasks from local storage (on the first loading)
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('tasks'));

    if (storedTodos) {
      setTasks(storedTodos);
    }
  }, []);

  // Adding the new task
  const addTask = () => {
    const newTask = {
      title,
      description,
      completed: false
    };

    // Adding the new task to the tasks array
    if (title !== '' && description !== '') {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  // Filter tasks into completed and pending
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="border-2 border-black text-[#1A237E]">
      <div className="border-2 border-black bg-[#E1F5FE] rounded-xl w-96 h-[45rem] overflow-hidden m-auto my-8 flex flex-col justify-around">
        <Topbar />
        <div className="border border-black bg-[#B2DFDB] h-[24%] mx-1 rounded-lg flex flex-col justify-center px-2 gap-2">
          <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} className='px-2 py-1 outline-none text-xl rounded-lg' />
          <input type="text" placeholder='Give description' value={description} onChange={(e) => setDescription(e.target.value)} className='px-2 py-1 outline-none text-xl rounded-lg' />
          <div className="border border-black bg-[#E1BEE7] hover:bg-[#f8d2ff] rounded-lg text-lg font-medium px-1 py-1 cursor-pointer text-center select-none" onClick={addTask}>Add Todo</div>
        </div>
        {/* Render the Envelopes */}
        <Envelope heading={'Pending Tasks'} tasks={pendingTasks} setTasks={setTasks} />
        <Envelope heading={'Recently Completed Tasks'} tasks={completedTasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;

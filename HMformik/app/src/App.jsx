import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './Components/List';
import AddForm from './Components/AddForm';

function App() {

  const startTasks = [
    {
      id: 1,
      name: "Bob"
    },
    {
      id: 2,
      name: "Not Bob"
    }
  ];

  const [tasks, setTasks] = useState(startTasks);
 
  return (
    <>
      <AddForm tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App

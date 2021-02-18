import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'add river',
        day: 'Feb 2nd',
        reminder: true
    },
    {
        id: 2,
        text: 'add river water',
        day: 'Feb 3rd',
        reminder: false
    },
    {
        id: 3,
        text: 'add river creek',
        day: 'March 11th',
        reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? 
      {...task, reminder : !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />

      
      {tasks.length > 0 ?
        <Tasks 
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} 
        /> : 'nothing to show'}


    </div>
  );
}

export default App;
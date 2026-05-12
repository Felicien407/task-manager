import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import { createTask, getTasks, deleteTask, toggleTask, updateTask } from './api'

const App = () => {
  let [tasks, setTasks] = useState([])
  // State to track which task is being edited[cite: 4]
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks))
  }, [])

  const addTask = async (task) => {
    const newTask = await createTask(task)
    setTasks([...tasks, newTask])
  }

  const handleToggle = async (id) => {
    await toggleTask(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const handleDelete = async (id) => {
    await deleteTask(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Function to save the edited task[cite: 4]
  const handleUpdate = async (id, newTitle) => {
    const updated = await updateTask(id, newTitle)
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: updated.title } : task
    ))
    setEditId(null)
  }

  return (
    <div className='min-h-screen bg-slate-100 p-3 flex flex-col items-center'>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={setEditId} // Pass setEditId to trigger edit mode[cite: 3, 4]
        editId={editId}
        onUpdate={handleUpdate}
      />
    </div>
  )
}

export default App
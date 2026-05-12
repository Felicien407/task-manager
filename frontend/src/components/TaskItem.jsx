import { useState } from 'react'

const TaskItem = ({ task, onToggle, onDelete, onEdit, isEditing, onUpdate }) => {
    const [newTitle, setNewTitle] = useState(task.title)

    const handleSave = () => {
        onUpdate(task.id, newTitle)
    }

    return (
        <li className="bg-white shadow-sm mt-4 rounded flex justify-between p-2 w-140">
            <div className="flex gap-2 items-center">
                <input
                    className="hover:cursor-pointer"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                {isEditing ? (
                    <input
                        className="border-b-2 border-blue-500 outline-none"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <span className={task.completed ? "line-through text-gray-400" : ""}>
                        {task.title}
                    </span>
                )}
            </div>

            <span className="flex gap-2">
                {isEditing ? (
                    <button
                        onClick={handleSave}
                        className='bg-green-600 rounded p-1 text-white text-sm w-20 hover:bg-green-700'
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => onEdit(task.id)}
                        className='bg-yellow-500 rounded p-1 text-white text-sm w-20 hover:bg-yellow-600'
                    >
                        Edit
                    </button>
                )}
                <button
                    onClick={() => onDelete(task.id)}
                    className='bg-red-500 rounded p-1 text-white text-sm w-20 hover:bg-red-600'
                >
                    Delete
                </button>
            </span>
        </li>
    )
}

export default TaskItem;
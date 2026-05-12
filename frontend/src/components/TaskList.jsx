import React from 'react'
import TaskItem from "./TaskItem"

const TaskList = ({ tasks, onToggle, onDelete, onEdit, editId, onUpdate }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    isEditing={editId === task.id}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    )
}

export default TaskList
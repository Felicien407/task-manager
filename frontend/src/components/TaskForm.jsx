import { useState, useEffect } from 'react'

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return;
        onAdd(title)
        setTitle("")
    }
    return (
        <>
            <h1 className='font-bold text-2xl'>Student Tasks Manager</h1>
                <form onSubmit={handleSubmit} className='mt-4 w-200 min-w-sm flex justify-center gap-2'>
                    <input
                        className='p-2 px-3 w-120 bg-white rounded shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-200'
                        type='text'
                        placeholder='Enter a task...'
                        value={title}
                        name='taskValue'
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button
                        type='submit'
                        className='bg-blue-600 rounded p2 text-white text-sm w-20 hover:cursor-pointer hover:bg-blue-700'
                    >
                        Add Task
                    </button>
                </form>
        </>
    )
}

export default TaskForm
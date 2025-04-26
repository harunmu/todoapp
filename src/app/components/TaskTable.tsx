import { Todos } from '@/types'
import React from 'react'

interface TaskTableProps{
    tasks:Todos[];
}

const TaskTable = ({tasks}:TaskTableProps) => {
  return (
    <div className='text-lg bg-gray-200  w-full '>
        {tasks.map((task) => (
            <div className='py-2 pl-3 border-b-2 border-gray-400'>
                {task.text}
            </div>
        ))}
    </div>
  )
}

export default TaskTable
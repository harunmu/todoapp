import { Todos } from '@/types'
import Link from 'next/link';
import React from 'react'

interface TaskTableProps{
    tasks:Todos[];
}

const TaskTable = ({tasks}:TaskTableProps) => {
  return (

    <div className='text-lg bg-gray-200  w-full '>
        {tasks.map((task) => (
            <div key={task.id} className='py-2 pl-3 border-b-2 border-gray-400'>
              <Link 
                href={{
                  pathname: `/detail/${task.id}`,
                  query: {
                    text: task.text,
                    category: task.category
                  }
                }}>
                {task.text}
              </Link>
            </div>
        ))}
    </div>
  )
}

export default TaskTable
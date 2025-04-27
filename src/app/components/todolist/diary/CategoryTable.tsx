"use client"
import { Categories, Todos } from '@/types'
import React, { useState } from 'react'
import TaskTable from './TaskTable';

interface CategoryTableProps{
    todos: Todos[];
    category:Categories;
}

const CategoryTable = ({todos,category}: CategoryTableProps) => {

  const tasks = todos.filter(todo => todo.category == category.text);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = async () => {
    setIsOpen(true);
  }
  const handleClose = async () => {
    setIsOpen(false);
  }

  return (
    <li className='w-full'>
        <div className='flex text-2xl bg-gray-300 border-b-2 border-gray-400 w-full py-2 '>

          {isOpen?(
            <button className='mt-1 ml-7 mr-2 transform rotate-90 origin-center duration-100'onClick={(handleClose)}>
              {'>'}
            </button>
          ):(
            <button className='ml-7 mr-2 duration-100' onClick={(handleOpen)}>
              {'>'}
            </button>
          )}
          <div key={category.id}>
            {category.text}
          </div>

        </div>
        {isOpen &&(
          <div>
            <TaskTable tasks={tasks} />
          </div>
        )}
    </li>
  )
}

export default CategoryTable
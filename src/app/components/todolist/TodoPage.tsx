"use client"

import React, { useState } from 'react'
// import AddTask from './AddTask'
// import TodoList from './TodoList'
// import { getAllTodos } from '@/api';
import { Categories,Todos } from '@/types';
import Category from './Category';
import AddCategory from './AddCategory';
// import { getAllCategory } from '@/api';

interface TodoPageProps {
    todos: Todos[];
    categories: Categories[]
}

const TodoPage = ({todos,categories}: TodoPageProps) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpen = async() => {
        setIsOpen(true);
    }
    const handleClose = async () => {
        setIsOpen(false);
    }


    
  return (

    <div>
        {isOpen?(
                <div className='flex relative justify-center max-w-fit'>
                    <div className='ml-20 text-white bg-gray-600 text-xl flex items-center rounded hover:scale-95 duration-200' onClick={handleClose}>
                        <button>＞</button>
                    </div>
                    <ul className='flex flex-wrap'>
                        {categories.map((category) => (
                            <Category key={category.id} todos={todos} category={category}/>
                        ))}
                        <li className='self-end'>
                            <AddCategory />
                        </li>
                    </ul>
                </div>
        ):(
            <div className="flex items-center bg-white p-10 rounded-lg">
                <div className='mx-3 font-bold text-gray-600'>
                    click and open list
                </div>
                <div className='px-1  font-black text-white bg-gray-600 text-xl flex items-center rounded hover:scale-90 duration-200'>
                    <button onClick={handleOpen}>＞</button>
                </div>

            </div>

        )}
    </div>
  )
}

export default TodoPage
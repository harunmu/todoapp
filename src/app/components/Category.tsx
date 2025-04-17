import { Categories, Todos } from '@/types';
import { todo } from 'node:test';
import React, { useState } from 'react'
import AddTask from './AddTask';
import TodoList from './TodoList';

interface CategoryProps {
    todos: Todos[];
    category : Categories
}

const Category = ({todos,category}: CategoryProps) => {

    const task = todos.filter(todo => todo.category == category.text);
    // const mustTask = todos.filter(todo => todo.category == "mustTask");

    // const todos = await getAllTodos();

    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpen = async() => {
        setIsOpen(true);
    }
    const handleClose = async () => {
        setIsOpen(false);
    }

  return (

    <li key={category.id} className="mr-5 ml-2">
        <div className="bg-white w-96 p-5 text-sm rounded-lg shadow-xl">
            <h4 className="text-center font-bold mb-5 text-2xl text-blue-300">{category.text}</h4>
            <AddTask category={category.text}/>
            <TodoList todos={task}/>
        </div>
    </li>
  )
}

export default Category
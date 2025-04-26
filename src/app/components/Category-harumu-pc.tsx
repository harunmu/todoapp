import { Categories, Todos } from '@/types';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import AddTask from './AddTask';
import TodoList from './TodoList';
import { deleteCategory, editCategory, editTodoCategory } from '@/api';
import { useRouter } from 'next/navigation';

interface CategoryProps {
    todos: Todos[];
    category : Categories
}

const Category = ({todos,category}: CategoryProps) => {

    const router = useRouter();
    const ref = useRef<HTMLInputElement>(null);

    const tasks = todos.filter(todo => todo.category == category.text);


    const [isOpen, setIsOpen] = useState(false);
    const [isEditing,setIsEditing] = useState(false);
    const [newText, setNewText] = useState(category.text);
    

    const handleOpen = async() => {
        setIsOpen(true);
    }
    const handleClose = async () => {
        setIsOpen(false);
    }
    const handelEditing = async () => {
        setIsEditing(true);
    }
    const handleEdit = async () => {
        setIsEditing(false);
        setIsOpen(false);
        editCategory(category.id,newText);
        tasks.map((task) => {
            editTodoCategory(task.id,newText);
        })
        router.refresh()
    }
    const handleDelete = async () => {
        await deleteCategory(category.id)
        router.refresh()
    }

    useEffect(() =>{
        if(isEditing){
            ref.current?.focus();
        }
    })

  return (

    <li key={category.id} className="my-3 mr-5 ml-2 grid-cols-3">
        <div className=" bg-white w-96 p-5 text-sm rounded-lg shadow-xl">

                {isOpen?(
                    <div className='flex'>
                        <button className='text-gray-400 text-lg my-2' onClick={handleClose}>⚙</button>
                        {isEditing?(
                            <div className='mx-2 flex flex-col text-gray-800 text-xs font-light'>
                                <button className='ml-1 mt-3 mb-1 border-b-1 border-gray-300 hover:text-black hover:border-black hover:font-normal' onClick={handleEdit}>保存する</button>
                            </div>
                        ):(
                        <div className='mx-2 flex flex-col text-gray-800 text-xs font-light '>
                            <button className='mb-1 border-b-1 border-gray-300 hover:text-black hover:border-black hover:font-normal ' onClick={handelEditing}>名前の変更</button>
                            <button className='border-b-1 border-gray-300 hover:text-red-500 hover:border-red-300 hover:font-normal' onClick={handleDelete}>削除</button>
                        </div>
                        )}


                    </div>
                ):(
                    <button className='text-gray-400 text-lg my-2' onClick={handleOpen}>⚙</button>
                )}

                {isEditing?(
                    <input 
                        ref = {ref}
                        type="text"
                        className="border-dashed w-full text-center font-bold mb-5 text-2xl text-blue-300 border-b-2 border-gray-400 focus:outline-none"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNewText(e.target.value)
                        }
                        value = {newText}
                    />
                ):(
                    <h4 className="text-center font-bold mb-5 text-2xl text-blue-300">{category.text}</h4>
                )}

            <AddTask category={category.text}/>
            <TodoList todos={tasks}/>
        </div>
    </li>
  )
}

export default Category
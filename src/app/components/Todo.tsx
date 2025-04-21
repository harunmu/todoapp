"use client"

import { deleteTodo, editTodoText } from '@/api';
import { Todos } from '@/types'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

interface TodoProps {
    todo: Todos;
}

export const Todo = ( {todo}: TodoProps) => {

  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

    
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  useEffect(() => {
    if(isEditing){
        ref.current?.focus();
    }
  })

  const handleEdit = async () => {
    setIsEditing(true);
  }
  const handleSave = async () => {
    await editTodoText(todo.id, newText);
    setIsEditing(false);
    router.refresh();

  }
  const handleDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh();
  }

  return (
    
    <li key = {todo.id} className='flex justify-between py-3 px-2.5 border-l-4 border-blue-400 shadow-lg'>

    {isEditing ?  (
        <input
        ref = {ref}
        type="text"
        className='mr-2 py-1 px-2 border-b-gray-400 border-b focus:outline-none'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewText(e.target.value)
        }
        value = {newText}
        /> 
        ): (
        <span>{todo.text}</span>
        )}

    <div>

      {isEditing? (
        <button className='mr-3 text-blue-400 hover:text-blue-200' onClick={handleSave}>
          save
        </button>
      ) : (
        <button className='mr-3 text-green-400 hover:text-green-200' onClick={handleEdit}>
          edit
        </button>
      )}

      <button className='text-red-400 hover:text-red-200' onClick={handleDelete}>delete</button>
    </div>
  </li>

  )
}

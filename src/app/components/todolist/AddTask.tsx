"use client"

import { addTaskTodo } from '@/api';
import { Todos } from '@/types';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

type addTaskProps = {
  category: string;
}

const AddTask = ({category}: addTaskProps) => {

  const router = useRouter();

  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTaskTodo({id: uuidv4() , text: taskTitle, category: category});
    router.refresh();
    setTaskTitle("");
  }

  return (
    <form className='mb-4 space-y-3' onSubmit={handleSubmit}>
      <input 
      type="text" 
      className='border-gray-300 px-5 flex mb-2 w-full h-7 rounded-lg border focus:outline-none focus:border-blue-400'
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setTaskTitle(e.target.value)
      }
      value = {taskTitle}
      />
      <button className='text-white bg-blue-500 w-full py-2 text-xs rounded hover:bg-blue-300 hover:scale-95 duration-200'>
        Add Task
      </button>
    </form>
  )
}

export default AddTask
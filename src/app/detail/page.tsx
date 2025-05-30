import { getAllCategory, getAllTodos } from '@/api'
import React from 'react'
import CategoryTable from '../components/blog/CategoryTable';

export default async function pageDetail(){

  const todos = await getAllTodos();
  const categories = await getAllCategory();
  

  return (

    <ul className='pt-20 bg-gray-200 w-70 h-dvh'>
        {categories.map((category) =>(
          <CategoryTable key={category.id}todos={todos} category={category}/>
        ))}
    </ul>
  )
}
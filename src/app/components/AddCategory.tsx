"use client"
import { addCategory } from '@/api';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import {v4 as uuid4} from 'uuid'

const AddCategory = () => {

    const ref = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const [showForm, setShowForm] = useState(false);
    const [textCategory, setTextCategory] = useState("")

    const handleOpenForm = async () => {
        setShowForm(true);
    }

    const handleAddCategory = async (e: FormEvent) => {
        e.preventDefault();
        await addCategory({id: uuid4(), text: textCategory});
        setShowForm(false);
        router.refresh();
        setTextCategory("");
    }

    const handleCloseForm = async () => {
        setShowForm(false);
    }

    useEffect(() => {
        if(showForm){
            ref.current?.focus();
        }
    })


    return (

    <div>
        {showForm && (
            <div className='absolute inset-0 z-50 flex items-center justify-center'>
                <div className= 'mb-30 rounded-lg'>
                    <form className='pt-15 px-5 h-80 w-120 rounded-sm shadow-2xl border-2 border-gray-400 bg-white' onSubmit={handleAddCategory}>
                        <h4 className='mb-8 text-xl text-center font-medium text-blue-400'>
                            リストの追加
                        </h4>
                        <input
                            ref={ref}
                            type="text"
                            className='mb-15 p-5 h-10 w-full border-2 rounded-lg border-gray-400 focus:outline-none'
                            placeholder="新しいリスト名を入力"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setTextCategory(e.target.value)
                            }
                            value= {textCategory}
                        />
                        <div className='flex justify-center font-mono text-sm'>
                            <button className='mr-10 hover:text-blue-400 hover:scale-110 duration-200'>追加</button>
                            <button className='ml-10 hover:text-red-400 hover:scale-110 duration-200' onClick={handleCloseForm}>キャンセル</button>
                        </div>

                    </form>
                </div>

            </div>
        )}

        <button className='p-3.5 place-items-end rounded-full bg-gray-400 text-white font-black text-4xl h-full hover:bg-black hover:scale-110 duration-200' onClick={handleOpenForm}>
            ＋
        </button>
    </div>
  )
}

export default AddCategory
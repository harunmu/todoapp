// import Image from "next/image";
// import AddTask from "./components/AddTask";
// import TodoList from "./components/TodoList";
import { getAllCategory, getAllTodos } from "@/api";
import TodoPage from "./components/TodoPage";

export default async function Home() {
  const todos = await getAllTodos();
  const categories = await getAllCategory();


  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-3xl mb-10 font-bold text-blue-400">Nextjs 13 Todo App</h1>
      <TodoPage todos={todos} categories={categories}/>
      {/* <div className="flex">
        <TodoCategory />
        <div className="mr-5 ml-2">
          <div className="bg-white w-96 p-5 text-sm rounded-lg shadow-xl">
            <h4 className="text-center font-bold mb-5 text-2xl text-blue-300">list1</h4>
            <AddTask />
            <TodoList todos={todos}/>
          </div>
        </div>
        <div>
          <div className="bg-white w-96 p-5 text-sm rounded-lg shadow-xl">
            <h4 className="text-center font-bold mb-5 text-2xl text-blue-300">list2</h4>
            <AddTask />
            <TodoList todos={todos}/>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </main>
  );

}

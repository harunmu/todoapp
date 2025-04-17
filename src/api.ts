import { Categories, Todos } from "./types"


export const getAllTodos = async (): Promise<Todos[]> => {
    const res = await fetch("http://localhost:3001/tasks", {
        cache: "no-store",
    });
    const todos = res.json();

    return todos;
}

export const getAllCategory = async (): Promise<Categories[]> => {
    const res = await fetch("http://localhost:3001/category", {
        cache: "no-store",
    });
    const categories = res.json();

    return categories;
}

export const addTaskTodo = async (todo: Todos): Promise<Todos> => {
    const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    const newTask = await res.json();

    return newTask;
}

export const addCategory = async (category: Categories): Promise<Categories> => {
    const res = await fetch("http://localhost:3001/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    });
    const newCategory = await res.json();

    return newCategory;
}

export const editTodo = async (id: string, newText: string): Promise<Todos> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text: newText}),
    });
    const updatedTodo = await res.json();

    return updatedTodo;
}

export const deleteTodo = async (id: string) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
    })
}

export const deleteCategory = async (id: string) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
        method: "DELETE",
    })
}
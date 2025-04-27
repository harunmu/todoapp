import { getAllCategory, getAllTodos, getBlogContent } from "@/api";
import BlogPage from "@/app/components/blog/BlogPage";
import CategoryTable from "@/app/components/blog/CategoryTable";
import { notFound } from "next/navigation";

interface Props{
    params:{
        id:string;
    }
    searchParams:{
        text:string;
        category:string;
    }
}

export default async function pageBlog({params,searchParams}:Props){

    const todos = await getAllTodos();
    const categories = await getAllCategory();

    const preOpen = searchParams.category
    // const content = await getBlogContent(id)
      

    // if (id!) {
    //     notFound();
    // }

    return(
        <div className="flex">
            <ul className='pt-20 bg-gray-200 w-70 h-dvh'>
                {categories.map((category) =>(
                <CategoryTable key={category.id} todos={todos} category={category} preOpen={preOpen}/>
                ))}
            </ul>
            <div className="flex justify-center items-start gap-1  w-full">
                <div>
                    {searchParams.text}
                </div>
                <div>
                    {searchParams.category}
                </div>
                kai
            </div>

            {/* <BlogPage blogContents={content} /> */}
        </div>

    )

}
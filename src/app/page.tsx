import Link from "next/link";
import {prisma} from "./db";
import Todo from "@/app/components/todo";

export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};

export default async function Home() {

    function getTodos() {
        return prisma.todo.findMany({
        });
    }
    const todos = await getTodos();

    return (
        <>
            <header className="flex justify-between items-center py-5 bg-gray-900 shadow-md">
                <h1 className="text-2xl text-center ml-5 text-white">Todos</h1>
                <Link
                    href="/newitem"
                    className="px-4 py-2 text-black rounded-md bg-white border-white border-2 hover:bg-gray-900 hover:text-white focus:outline-none mr-5"
                >
                    New
                </Link>
            </header>


            <ul className=" pl-4 m-4">
                {
                    todos.map(
                        (todo : TodoType)=> <div className="border-b-2 mb-1">{todo.id}{todo.title} </div> )
                }
            </ul>
        </>
    );
}
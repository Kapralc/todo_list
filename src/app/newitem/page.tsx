import {prisma} from "../db";
import Link from "next/link";
import {redirect} from "next/navigation";

export default function NewItem() {


    async function createTodoItem(data: FormData){
        "use server";
        const title = data.get("title")?.valueOf()??('');

        if (typeof title === "string" && title != null) {
            await prisma.todo.create({
                data:{title},
            })
            redirect('/');
        }else return new Error("Invalid Title");

    }
    return (
        <main className="">
            <div className="flex justify-between items-center py-5 bg-gray-900 shadow-md">
                <h2 className="text-2xl text-center ml-5 text-white p-1.5">Create new item</h2>
            </div>
            <form action={createTodoItem} className="flex flex-col gap-2 m-5">
                <input
                    type="text"
                    name="title"
                    placeholder="Create a new todo item"
                    className="px-4 py-2 rounded-md text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
                />

                <div className="flex justify-end gap-2">
                    <Link href=".." className="px-4 py-2 rounded-md text-gray-500 hover:underline">
                        Cancel
                    </Link>
                    <button type="submit"
                            className="px-4 py-2 rounded-md bg-green-400 text-white hover:bg-green-700 focus:outline-none">
                        Save
                    </button>
                </div>
            </form>
        </main>
    );
}


import {Input} from "@nextui-org/react";
export default function Home() {
  return (
      <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Create your own ToDo!</h2>
          <div className="flex justify-center w-full">
              <form className="w-full md:w-3/4 space-y-4">
                  <div className="flex flex-col">
                      <label className="text-gray-700 mb-2 text-xl">Title</label>
                      <input type="text" placeholder="Enter your title" className="rounded-md border border-gray-300 px-3 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                  </div>
                  <div className="flex flex-col">
                      <label className="text-gray-700 mb-2 text-xl">Content</label>
                      <textarea placeholder="Enter your content" className="rounded-md border border-gray-300 px-3 py-4 h-24 min-h-14 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                  </div>
                  <div className="flex flex-col">
                      <label className="text-gray-700 mb-2 text-xl">Email (Optional)</label>
                      <input type="email" placeholder="Enter your email" className="rounded-md border border-gray-300 px-3 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
              </form>
          </div>
      </div>

  );
}

class TodoItemProps {
    title: string | undefined;
    description: string | undefined;
    checked: Boolean | undefined;
}
function Navbar(){
    return<nav className="flex justify-between bg-cyan-500 ">
        <label className="hover:text-orange-400 px-4">Stránka všechny Todos</label>
        <label className="hover:text-orange-400 px-4">Přidej Todos</label>
    </nav>
}
function Card({title, description, checked}:TodoItemProps){
    return <div className="flex flex-col items-center justify-start bg-slate-300 w-1/6 h-60 px-4 hover:bg-slate-600">

        <h2 className="text-xl py-1">{title}</h2>
        <label className="text-xs">{description}</label>
    </div>
}
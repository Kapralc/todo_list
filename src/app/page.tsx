import {Input} from "@nextui-org/react";
export default function Home() {
  return (
      <div className={"flex flex-col items-center"}>
          <h2>Create your own ToDo!</h2>
          <div className="flex flex-col items-center w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" label="Title" placeholder="Enter your title of your todo"/>
              <Input type="email" label="Content" placeholder="Enter your content of your todo"/>
              <Input type="email" label="Email" placeholder="Enter your email"/>
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
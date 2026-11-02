import { useState } from "react";
import Button from "../button/Button"


type Prop = {
    head: string,
    discription: string,

}

interface TaskType {
  head: string,
  discription: string,
  done: boolean,
}

export default function Task({head, discription}: Prop){
    const [done, setDone] = useState(false);
    function newSetDone(){
        setDone(!done)
    }

    const remoute = head;
    const remouteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        
        const allTasks: TaskType[] = JSON.parse(getTask())

        const newTask = allTasks.filter(i => i.head !== remoute);
        
        localStorage.removeItem("tasks")
        console.log(localStorage)
        localStorage.setItem("tasks", JSON.stringify(newTask))

        alert("Карточка удалена")

        window.location.reload();
    };

    function getTask():string{
        const newTask = localStorage.getItem("tasks");
        if(newTask===null){
            return "[]";
        }
        return newTask;
    }

    return (
        <div className={(done ? "bg-(--code-bg)" : "bg-(--accent)") +" py-7 px-10 flex justify-between"}>
            <div className="grid gap-5">
                <h2>{head}</h2>
                <p>{discription}</p>
            </div>
            <div className="flex items-center gap-3">
                <h3>{done ? "Не выполнено" : "Выполнено" }</h3>
                <Button text='Done' varCol={done ? true:false} onclick={newSetDone} />
                <Button text='Delete' varCol={done ? true:false} onclick={remouteTask} />
            </div>
            
        </div>
    )
}
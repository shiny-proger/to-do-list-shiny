import { useState } from 'react'
import "./index.css"
import './App.css'
import Button from './components/button/Button'
import Task from './components/task/Task'

interface TaskType {
  head: string,
  discription: string,
  done: boolean,
}

let allTasks: TaskType[] = [];
allTasks = JSON.parse(getTask())

function getTask():string{
  const newTask = localStorage.getItem("tasks");
  if(newTask===null){
    return "[]";
  }
  return newTask;
}

function App() {
  const [textArea, setTextArea]=useState('');
  const [textInput, setTextInput]=useState('');
  
  const [doneTask, setDoneTask] = useState(false);
  const [unDoneTask, setUnDoneTask] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(textArea==='' || textInput===''){
      alert("Заполните все поля")
      return ;
    }
    allTasks.push({
      head: textInput,
      discription: textArea,
      done: true,
    })

    localStorage.setItem("tasks", JSON.stringify(allTasks))

    setTextArea("")
    setTextInput("")
    
    alert("Карточка создана")
    window.location.reload();
  };
  
  return (
    <>
      <div className='mx-100 grid gap-10 mt-50'>
        <h1>To-do list shiny</h1>
        
        <input 
        className='rounded-sm h-8 w-full focus:outline-none bg-(--code-bg)' type="text" 
        placeholder='Имя заметки'
        value={textInput} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)}
        />

        <textarea 
        className='rounded-sm w-full h-32 bg-(--code-bg) focus:outline-none' 
        placeholder='Описание заметки' 
        name="описание" 
        id=""
        value={textArea}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextArea(e.target.value)}
        ></textarea>
        
        <div className='flex justify-between'>
          <Button text='Create' varCol={false} onclick={handleClick} />
          <div className='flex gap-10 items-center'>
            <h3>Выбери какие таски плоказать:</h3>
            <Button text='Done tasks' varCol={doneTask? true : false} onclick={()=>{setDoneTask(!doneTask)}} />
            <Button text='Undone tasks' varCol={unDoneTask? true : false} onclick={()=>{setUnDoneTask(!unDoneTask)}} />
          </div>
        </div>
        <div className='grid gap-5'>
          {allTasks.map((elem)=>{
            if (unDoneTask===false && doneTask===false){
              return (
                <Task head={elem.head} discription={elem.discription} done={elem.done}/>
              )
            } else if (doneTask && elem.done===true && !unDoneTask) {
                return (
                  <Task head={elem.head} discription={elem.discription} done={elem.done}/>
                )
            } else if(unDoneTask && elem.done===false && !doneTask){
                return (
                  <Task head={elem.head} discription={elem.discription} done={elem.done}/>
                )
            } else if(unDoneTask===true && doneTask===true){
                
            }
            })}
        </div>
      </div>
    </>
  )
}

export default App

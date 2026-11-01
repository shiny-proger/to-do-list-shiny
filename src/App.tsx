import { useState } from 'react'
import "./index.css"
import './App.css'
import Button from './components/button/Button'

function App() {
  return (
    <>
      <div className='mx-100 grid gap-10 mt-50'>
        <h1>To-do list shiny</h1>
        <input className='h-8 w-full focus:outline-none bg-(--code-bg)' type="text" placeholder='Имя заметки' />
        <textarea className='w-full h-32 bg-(--code-bg) focus:outline-none' placeholder='Описание заметки' name="описание" id=""></textarea>
        <Button text='wassap' varCol={false} />
      </div>
    </>
  )
}

export default App

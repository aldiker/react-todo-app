import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'

function App() {
    function addTodoToList(todo) {
        setArrayTodos([...arrayTodos, todo])
    }

    const [arrayTodos, setArrayTodos] = useState([])
    console.log(arrayTodos)

    return (
        <div className='App'>
            <h1>Todo App</h1>
            <TodoForm onClick={addTodoToList} />
        </div>
    )
}

export default App

import { useState } from 'react'
import './App.css'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
    const [todos, setArrayTodos] = useState([])
    console.log(todos)

    function addTodoHandler(todo) {
        setArrayTodos([...todos, todo])
    }

    function deleteTodoHandler(idx) {
        const tempArray = [...todos]
        tempArray.splice(idx, 1)
        setArrayTodos(tempArray)
    }

    return (
        <div className='App'>
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} delTodo={deleteTodoHandler} />
        </div>
    )
}

export default App

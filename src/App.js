import { useState } from 'react'
import './App.css'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
    const [todos, setTodos] = useState([])
    console.log(todos)

    function addTodoHandler(todo) {
        setTodos([...todos, todo])
    }

    function deleteTodoHandler(idx) {
        setTodos(todos.filter((todo, index) => index !== idx))
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />

            {!todos.length && <h2>Todo list is empty</h2>}
            <TodoList todos={todos} delTodo={deleteTodoHandler} />
        </div>
    )
}

export default App

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    console.log(todos)

    function addTodoHandler(todo) {
        const newTodo = {
            name: todo,
            isCompleted: false,
            id: uuidv4(),
        }
        setTodos([...todos, newTodo])
    }

    function deleteTodoHandler(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        )
    }

    return (
        <div className='App'>
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodosActions />
            {!todos.length && <h2>Todo list is empty</h2>}
            <TodoList
                todos={todos}
                delTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
        </div>
    )
}

export default App

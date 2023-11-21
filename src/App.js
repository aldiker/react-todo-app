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

    const resetTodosHandler = () => {
        setTodos([])
    }

    const clearCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const countCompletedTodos = todos.filter((todo) => todo.isCompleted).length

    return (
        <div className='App'>
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />

            {todos.length !== 0 && (
                <TodosActions
                    resetTodos={resetTodosHandler}
                    clearCompletedTodos={clearCompletedTodosHandler}
                    clearCompletedButtonDisable={!countCompletedTodos}
                />
            )}
            <TodoList
                todos={todos}
                delTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
            {countCompletedTodos > 0 && (
                <h2>
                    You have completed {countCompletedTodos}
                    {countCompletedTodos > 1 ? ' todos' : ' todo'} !
                </h2>
            )}
        </div>
    )
}

export default App

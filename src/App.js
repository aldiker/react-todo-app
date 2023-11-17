import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
    function addTodoToList(todo) {
        setArrayTodos([...arrayTodos, todo])
    }

    function deleteTodoFromList(idx) {
        const tempArray = [...arrayTodos]
        tempArray.splice(idx, 1)
        setArrayTodos(tempArray)
    }

    const [arrayTodos, setArrayTodos] = useState([])
    console.log(arrayTodos)

    return (
        <div className='App'>
            <h1>Todo App</h1>
            <TodoForm onClick={addTodoToList} />
            <TodoList
                arrayTodos={arrayTodos}
                deleteTodoFromList={deleteTodoFromList}
            />
        </div>
    )
}

export default App

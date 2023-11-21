import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm(props) {
    const { addTodo } = props

    const [newTodo, setNewTodo] = useState('')

    function onSubmitHandler(event) {
        event.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    type='text'
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    placeholder='Enter new todo'
                />
                {/* <button type='submit'>Sumbit</button> */}
                <Button type='submit' title='Add task'>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default TodoForm

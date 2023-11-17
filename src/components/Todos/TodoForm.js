import { useState } from 'react'

function TodoForm(props) {
    const { onClick } = props

    const [todoName, setTodoName] = useState('')

    function handleFormSubmit(event) {
        event.preventDefault()
        onClick(todoName)
        setTodoName('')
    }

    return (
        <div className='TodoForm'>
            <form onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    name='todoName'
                    value={todoName}
                    onChange={(event) => setTodoName(event.target.value)}
                    placeholder='Enter new todo'
                />
                <button type='submit'>Sumbit</button>
            </form>
        </div>
    )
}

export default TodoForm

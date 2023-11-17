function TodoForm() {
    return (
        <div className='TodoForm'>
            <form>
                <input
                    type='text'
                    name='todoName'
                    placeholder='Enter new todo'
                />
                <button type='submit'>Sumbit</button>
            </form>
        </div>
    )
}

export default TodoForm

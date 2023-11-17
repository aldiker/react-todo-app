function Todo(props) {
    const { todo } = props

    return (
        <div className='Todo'>
            <h1>{todo}</h1>
        </div>
    )
}

export default Todo

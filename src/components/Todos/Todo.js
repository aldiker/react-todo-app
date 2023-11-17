function Todo(props) {
    const { todo, onDoubleClick, index } = props

    function delTodo() {
        onDoubleClick(index)
    }

    return (
        <div className='Todo' onDoubleClick={delTodo}>
            <h1>{todo}</h1>
        </div>
    )
}

export default Todo

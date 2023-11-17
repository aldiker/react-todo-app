function Todo(props) {
    const { todo, index, onDoubleClick } = props

    function delTodo() {
        onDoubleClick(index)
    }

    return (
        <div className='Todo' onDoubleClick={delTodo}>
            <h3>{todo}</h3>
        </div>
    )
}

export default Todo

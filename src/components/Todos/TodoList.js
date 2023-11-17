import Todo from './Todo'

function TodoList(props) {
    const { todos, delTodo } = props

    return (
        <div className='TodoList'>
            {todos.map((todo, index) => {
                return (
                    <Todo
                        key={index}
                        todo={todo}
                        index={index}
                        onDoubleClick={delTodo}
                    />
                )
            })}
        </div>
    )
}

export default TodoList

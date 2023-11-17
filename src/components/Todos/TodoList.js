import Todo from './Todo'

function TodoList(props) {
    const { arrayTodos, deleteTodoFromList } = props

    return (
        <div className='TodoList'>
            {arrayTodos.map((todo, index) => {
                return (
                    <Todo
                        todo={todo}
                        key={index}
                        index={index}
                        onDoubleClick={deleteTodoFromList}
                    />
                )
            })}
        </div>
    )
}

export default TodoList

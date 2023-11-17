import Todo from './Todo'

function TodoList(props) {
    const { arrayTodos } = props

    return (
        <div className='TodoList'>
            {arrayTodos.map((todo, index) => {
                return <Todo todo={todo} key={index} />
            })}
        </div>
    )
}

export default TodoList

import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
    const { todos, delTodo, toggleTodo } = props

    return (
        <div className={styles.todoListContainer}>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onDoubleClick={delTodo}
                        toggleTodo={toggleTodo}
                    />
                )
            })}
        </div>
    )
}

export default TodoList

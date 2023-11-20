import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
    const { todos, delTodo } = props

    return (
        <div className={styles.todoListContainer}>
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo.name}
                        index={todo.id}
                        onDoubleClick={delTodo}
                    />
                )
            })}
        </div>
    )
}

export default TodoList

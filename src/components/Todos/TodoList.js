import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
    const { todos, delTodo } = props

    return (
        <div className={styles.todoListContainer}>
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

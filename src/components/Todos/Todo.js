import styles from './Todo.module.css'

function Todo(props) {
    const { todo, index, onDoubleClick } = props

    function delTodo() {
        onDoubleClick(index)
    }

    return (
        <div className={styles.todo} onDoubleClick={delTodo}>
            <div className={styles.todoText}>{todo}</div>
        </div>
    )
}

export default Todo

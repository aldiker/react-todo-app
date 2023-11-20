import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

function Todo(props) {
    const { todo, onDoubleClick } = props

    function delTodo() {
        onDoubleClick(todo.id)
    }

    return (
        <div className={styles.todo} onDoubleClick={delTodo}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.name}</div>
        </div>
    )
}

export default Todo

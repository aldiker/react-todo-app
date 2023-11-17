import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

function Todo(props) {
    const { todo, index, onDoubleClick } = props

    function delTodo() {
        onDoubleClick(index)
    }

    return (
        <div className={styles.todo} onDoubleClick={delTodo}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo}</div>
        </div>
    )
}

export default Todo

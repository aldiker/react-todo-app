import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo(props) {
    const { todo, onDoubleClick, toggleTodo } = props

    function delTodo() {
        onDoubleClick(todo.id)
    }

    return (
        <div
            className={`${styles.todo} ${
                todo.isCompleted ? styles.completedTodo : ''
            }`}
        >
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.name}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={delTodo} />
            <FaCheck
                className={styles.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            />
        </div>
    )
}

export default Todo

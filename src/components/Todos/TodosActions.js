import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodosActions.module.css'

function TodosActions({
    resetTodos,
    clearCompletedTodos,
    clearCompletedButtonDisable,
}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button onClick={resetTodos} title='Reset Todos'>
                <RiRefreshLine />
            </Button>
            <Button
                onClick={clearCompletedTodos}
                title='Clear Completed Todos'
                disabled={clearCompletedButtonDisable}>
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions

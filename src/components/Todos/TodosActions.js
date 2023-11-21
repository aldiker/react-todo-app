import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodosActions({
    resetTodos,
    clearCompletedTodos,
    clearCompletedButtonDisable,
}) {
    return (
        <>
            <Button onClick={resetTodos} title='Reset Todos'>
                <RiRefreshLine />
            </Button>
            <Button
                onClick={clearCompletedTodos}
                title='Clear Completed Todos'
                disabled={clearCompletedButtonDisable}>
                <RiDeleteBin2Line />
            </Button>
        </>
    )
}

export default TodosActions

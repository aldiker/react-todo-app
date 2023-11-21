import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodosActions() {
    return (
        <>
            <Button title='Reset Todos'>
                <RiRefreshLine />
            </Button>
            <Button title='Clear Completed Todos'>
                <RiDeleteBin2Line />
            </Button>
        </>
    )
}

export default TodosActions

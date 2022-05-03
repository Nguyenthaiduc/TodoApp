import React from 'react'
import {  IconButton, ListItem } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITodo } from '../../App';
interface Props {
    todo: ITodo
    handleDelete: (id: string) => void
    handleEdit: (id: string) => void

}

const TodoList: React.FC<Props> = ({ todo, handleDelete, handleEdit }) => {
    return (
        <>

            <ListItem key={todo._id} >
                {todo.todo}
                <IconButton
                    onClick={() => handleDelete(todo._id)}
                    style={{ padding: '32' }}
                >
                    <DeleteIcon />
                </IconButton>

                <IconButton
                    onClick={() => handleEdit(todo._id)}
                    style={{ padding: '32' }}
                >
                    <EditIcon />
                </IconButton>

            </ListItem>

        </>
    )
}

export default TodoList
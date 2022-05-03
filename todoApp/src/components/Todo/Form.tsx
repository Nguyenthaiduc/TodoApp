
import { Box, Button, Input, List, Typography  } from '@mui/material';
import React from 'react'
import { ITodo } from '../../App'
import TodoList from './TodoList';

interface Props {
    todo: string
    todos: ITodo[]
    inputRef: React.RefObject<HTMLInputElement>
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleChangeTodo: (todoInput: string) => void
    handleOnClick: () => void
    isEditing: ITodo | null
    handleDelete: (id: string) => void
    handleEdit: (id: string) => void
}

const Form: React.FC<Props> = ({ todos, inputRef, todo, isEditing, handleOnChange, handleChangeTodo, handleOnClick, handleDelete, handleEdit }) => {
    return (
        
        <Box sx={{ textAlign: 'center', margin: 'auto' }}>
            <Typography variant="h4" >Todo App</Typography>

            <Input
                ref={inputRef}
                type="text"
                placeholder="Enter Text"
                value={todo}
                onChange={handleOnChange}
            />
            {isEditing !== null ? (
                <Button variant="contained" color="success" onClick={() => handleChangeTodo(todo)}>Change</Button>
            ) : (
                <Button variant="contained" onClick={handleOnClick}>ADD</Button>
            )}


            <List
                sx={{ margin: 'auto', width: '200px', display: 'grid', gridTemplateColumns: 'auto' }}>

                {todos.map((todo: ITodo, index: number) => (

                    <TodoList
                        todo={todo}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}

                    />

                ))}
            </List>
        </Box>
        


    )
}

export default Form

/**
 * 
 */
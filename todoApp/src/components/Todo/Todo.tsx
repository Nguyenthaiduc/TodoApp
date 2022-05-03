import axios from 'axios';
import React, { FC, useRef, useState } from 'react'
import { ITodo } from '../../App';
import Form from './Form';
interface Props {
    apitodos: Array<ITodo>
}
///
/*
[
    {
        _id: "624521fd64503112ff743489",
        todo: "lau nha"
    },
    {
        _id: "6245221464503112ff74348b",
        todo: "quet nha"
    },
    {
        _id: "6245221d64503112ff74348d",
        todo: "rua bat"
    }]*/
///
const Todo: FC<Props> = ({ apitodos }) => {



    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Array<ITodo>>(apitodos);
    const [isEditing, setIsEditing] = useState<ITodo | null>(null);

    const inputRef = useRef<HTMLInputElement>(null)
    const currentIdx = useRef<any>(null)


    //handleOnChange
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    const handleOnClick = async () => {
        if (todo != "") {
            const res = await axios.post('http://localhost:5000/api/v1/todos', { todo });
            const newtodo = res.data.todo as ITodo;

            setTodos((prev: Array<ITodo>) => [...prev, newtodo])

        }
        setTodo('')
        inputRef.current?.focus()
    }
    const indexOfId = (id: string, arr: Array<ITodo>): number => {
        const item = arr.find(i => i._id === id);
        if (item)
            return arr.indexOf(item);
        else
            return -1;
    }
    //remove Todo
    const handleDelete = (id: string) => {
        const indexItem = indexOfId(id, todos);
        const newTodos = [...todos]
        newTodos.splice(indexItem, 1)
        setTodos(newTodos)
    }
    //handle Edit
    const handleEdit = (id: string) => {
        const indexItem = indexOfId(id, todos);
        currentIdx.current = indexItem;
        const todoChange = todos[indexItem]; //lấy item cần sửa
        setIsEditing(todoChange);
        if (todoChange)
            setTodo(todoChange.todo);//gán lại ô input
        //console.log('edit', todoChange);
        //changeRef.current = todoChange
        // setTodos([...todoChange])
        // inputRef.current?.focus()

    }
    //handle ChangeTodo

    const handleChangeTodo = (todoInput: string) => {

        if (todoInput != '')
        //gán lại todochange
        {
            const newList = todos;
            if (isEditing !== null)
                newList.splice(currentIdx.current, 1, { _id: isEditing._id, todo: todoInput });
            setTodos([...newList]);
        }
        setIsEditing(null);
        setTodo('');
    }


    return (

        <Form
            todo={todo}
            todos={todos}
            inputRef={inputRef}
            isEditing={isEditing}
            handleOnChange={handleOnChange}
            handleChangeTodo={handleChangeTodo}
            handleOnClick={handleOnClick}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />


    )
}

export default Todo
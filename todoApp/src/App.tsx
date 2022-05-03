import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import ColorBox from "./components/ColorBox";
import Todo from "./components/Todo/Todo";
export interface ITodo {
  _id: string,
  todo: string
}
const App: FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/todos')
      .then(res => {
        //console.log('api', res);
        const todoList = res.data
        setTodos(todoList.todos)
        console.log(todoList)
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      {/* <h1>Todo App</h1> */}
      <ColorBox />


      {!isLoading && todos.length > 0 ? <Todo apitodos={todos} /> : null}
    </>
  )
}

export default App;
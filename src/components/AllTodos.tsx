import React from "react";
import { TodoList } from "../Models/Todo";
import "./style.css"
import Lists from './SingleTodo'

interface Props{
    todoList:TodoList[];
    setTodoList:React.Dispatch<React.SetStateAction<TodoList[]>>;
    
}

const AllTodos: React.FC<Props> = ({todoList,setTodoList}) => {
    
    return ( 
        <div>
          {todoList.map((list)=>(
            <Lists todoList={todoList} list={list} setTodoList={setTodoList} key={list.id} />
       
            ))};
        </div>
   
    );
};
 
export default AllTodos;

import { TodoList } from "../Models/Todo";
import './style.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState } from "react";


interface props{
    todoList:TodoList[];
    setTodoList:React.Dispatch<React.SetStateAction<TodoList[]>>
    list:TodoList
}

const Lists:React.FC<props> = (props) => {
    const[Edit, setEdit] = useState<boolean>(false)
    const[EditTodo,setEditTodo] = useState<string>(props.list.todo)

    //EditTodo
    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();
        props.setTodoList(props.todoList.map((todo)=>(
            todo.id===id ? {...todo,todo:EditTodo} : todo
        )));setEdit(false)

    }

     //markComplete
    const handlecomplete=(id:number)=>{
       props.setTodoList(props.todoList.map((todo)=>(todo.id===id ? {...todo,isdone:!todo.isdone}:todo)))
    }

    //DeleteTodo
  const Delete = (id:number)=>{
    props.setTodoList(props.todoList.filter((todo)=>todo.id!==id))
  }
    
    return ( 
        
          <div className="Todos_List" key={props.list.id}>

                <form action="" className="listed" onSubmit={(e)=>handleEdit(e, props.list.id)}>
 
                   {Edit ? (
                       <input value={EditTodo} onChange={(e)=>{setEditTodo(e.target.value)}} className="todo_note"/>
                   ) : (
                    
                    props.list.isdone ?
                        <s className="todo_note">{props.list.todo}</s>
                       : <span className="todo_note">{props.list.todo}</span>
                    
                   )}

                   
                    
                        <div className="actions">

                            <span 
                               className="icons"
                               onClick={()=>{
                                if(!Edit && !props.list.isdone){
                                    setEdit(!Edit)
                                }
                               }}
                               >
                               <FaEdit />
                            </span> 

                            <span className="icons"><MdDelete onClick={()=>{Delete(props.list.id)}} /></span> 

                            <span className="icons" onClick={()=>{handlecomplete(props.list.id)}}><IoCheckmarkOutline /></span>
                        </div>
              </form>
              
           </div>
        
        
     );
}
 
export default Lists;
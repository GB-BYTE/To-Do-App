import React, { useState } from 'react';
import './App.css';
import InputFied from './components/InputField';
import { TodoList } from './Models/Todo';
import AllTodos from './components/AllTodos';

 const App:React.FC = ()=> {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoList[]>([])
  
  const handlesubmit = (e: React.FormEvent)=>{
     e.preventDefault();
    if(todo){
     setTodoList([...todoList, {id:Date.now(), todo:todo, isdone:false}])
     setTodo("") 
    }
  }
  console.log(todoList)

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='heading'> To-Do LIST </h1>
      </header>
      <main className='main-container'>
        <div className="user-informations">
            <div className="user-input">
              <InputFied todo={todo} setTodo = {setTodo} handlesubmit={handlesubmit} ></InputFied>
             
            </div> 
            <div className="listed-tasks">
                <div className="first-col">
                  <div className="tasks-list">
                    <h2>Listed Task </h2>
                  </div>
                 <div className="Todos_container">
                  <AllTodos todoList={todoList} setTodoList={setTodoList} ></AllTodos>
                 </div>
                </div>
              </div> 
        </div>
        
      </main>
    </div>
  );
}

export default App;

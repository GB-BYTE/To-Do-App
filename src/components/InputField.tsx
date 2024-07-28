import React, { useRef } from 'react';
import './style.css';


interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handlesubmit:(e:React.FormEvent) =>void
    
} 
const InputFied:React.FC<Props>= (Props) => {
    const InputDefault = useRef<HTMLInputElement>(null); //To Remove the focus color of the backgrond after Todo is entered
     
    return ( 
        
        <form  className="user_inputs" onSubmit={(e)=> {
            Props.handlesubmit(e);
            InputDefault.current?.blur()}}
        >
            
            <input  ref={InputDefault} type="text" className="input_box" value={Props.todo} onChange={(e)=>Props.setTodo(e.target.value)} placeholder="Enter your Task" />
            <button className="enter" type='submit'>Enter</button>
        </form>
     );
}
 
export default InputFied;
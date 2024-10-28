import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateStatus } from '../Components/Slice';

const TodoList = () => {
   const [input , setInput]= useState('');
  const dispatch =  useDispatch();
const todo = useSelector(state => state.todos);

const filterdTodo = todo.filter((todo) => todo.status == true);
console.log("filtered :",filterdTodo);

console.log("this is todos ",todo)
   const handleClick = ()=>{
    if(input.trim()){
        dispatch(addTodo(input));
        setInput('');
    }
   }

   const handleComplete = (id) =>{
   dispatch(updateStatus(id));
   console.log("status updated");
   }
  return (
    <div>
        <h1>Add any task </h1>
        <input type="text"
        value={input} 
        onChange={(e)=> setInput(e.target.value)}
        placeholder='type task'
         />
         <button 
         onClick={handleClick}
         >
            Add task
         </button>
         <ul>

         {

         todo.map((todo,index) =>{
            return <li key={index} 
            style={{}}>
                {todo.text}
                <button
                onClick={()=>handleComplete(todo.id)}
                >
                     {todo.status == true? 'completed' :'notcompleted'} </button>
             </li>
             
        })}
        </ul>
      
    </div>
  )
}

export default TodoList

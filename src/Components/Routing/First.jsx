import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from './RoutingSlice';



const First = () => {
    const [input,setInput] = useState(0);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = ()=>{
           dispatch(add(input));
           setInput('');
           navigate('/second')
    }
    
  return (
    <div>
        <h1>Type a number to Add</h1>
        <input type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button
        onClick={handleClick}
        > Next page </button>

      
    </div>
  )
}

export default First

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from './RoutingSlice';

const Second = () => {
    const [input , setInput ] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(add(input));
        setInput('');
        navigate('/result')
    }

  return (
    <div>
        <h1>Input the second number to add</h1>
        <input type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <button
        onClick={handleClick}
        >Go to see Result </button>
      
    </div>
  )
}

export default Second

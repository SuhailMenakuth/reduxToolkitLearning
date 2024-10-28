import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    useEffect(()=>
        setSum(result.reduce((acc, curr) => acc + Number(curr), 0))
    )
    const [sum , setSum] =useState(0)
    const result = useSelector((state)=> state.numbersArray)

   

  return (
    <div>
    <h1>
      
      the result is : {sum}</h1>
      
    </div>
  )
}

export default Result

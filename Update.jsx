import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {


    const [task,setTask] = useState('')
    const [details,setDetails] = useState('')


   

    const {id} = useParams()

    console.log(id)

    const getDate = async () => {
        const res = await axios.get(`http://localhost:6000/api/${id}`)
 
         setTask(res.data.task)
         setDetails(res.data.details)

    }

   

    useEffect(() => {
        getDate()
    }, [])
    
    
    const updateData = async(e) =>{
    e.preventDefault()
    
    await axios.put(`http://localhost:6000/api/${id}`,{task,details})
    
    setTask("")
    setDetails("")
    
    alert('update')
    
    }
    
    const navigate = useNavigate()

  return (
    <div>
    <button onClick={()=>{navigate('/')}}>Go to Home</button>
    <form onSubmit={updateData}>
        <label>Task 😁</label>
        <input value={task} type='text' placeholder='Enter Your Task here .....' onChange={(e)=>{setTask(e.target.value)}} />
        <label>Details 🤣</label>
        <input value={details} type='text' placeholder='Enter Your Details here .....' onChange={(e)=>{setDetails(e.target.value)}} />
        <input type='submit' value={"Update 😎"} />
    </form>
</div>
  )
}

export default Update
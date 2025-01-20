import axios from 'axios'
import './ToGet.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ToGet = () => {

    const [todo, setTodo] = useState([])

    const getDate = async () => {
        const res = await axios.get('http://localhost:6000/api/')

        setTodo(res.data)

    }

    useEffect(() => {
        getDate()
    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <h1>Our ToDo List 📃</h1>
            <button onClick={()=>{navigate('/create')}}>Add Todo 😶</button>
            <div id='todoBox'>
                {
                    todo.map((todo) => {
                        return (
                            <div id='todo' key={todo._id}>
                                <h2>{todo.task}</h2>
                                <p>{todo.details}</p>
                                <button style={{background:'blue',border:'none',width:'6rem'}} onClick={()=>{navigate(`/update/${todo._id}`)}}><MdEdit size={35}/></button>
                                <button style={{background:'red',border:'none',width:'6rem'}}><MdDelete size={35}/></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToGet